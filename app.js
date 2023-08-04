// app.js
const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'templates')));
app.use(express.static(path.join(__dirname, "static")));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("templates", __dirname);

// Home route
app.get("/", (req, res) => {
	res.render("index");
});

// Weather route
app.post("/weather", async (req, res) => {
	const rawData = fs.readFileSync("./apiKeys.json");
	const apiKeys = JSON.parse(rawData);
	const apiKey = apiKeys.apiKey;
	const { city } = req.body;

	try {
		const weatherData = await getWeatherData(city, apiKey);
		res.render("weather", { weatherData, city });
	} catch (error) {
		res.render("error.html");
	}
});

async function getWeatherData(city, apiKey) {
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
	const response = await axios.get(apiUrl);
	return response.data;
}

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
