# Weather Application

The Weather Application is a simple web-based weather forecasting tool that provides real-time weather data for any location using the OpenWeatherMap API. It is developed using Node.js, Express.js, HTML, and CSS.

## Features

- Get current weather information for a specific location.
- Display temperature, humidity, wind speed, and weather description.
- Show an icon representing the current weather condition.
- Search for weather data of any city or location worldwide.

## Technologies Used

- Node.js: A JavaScript runtime environment used for server-side development.
- Express.js: A minimalist web application framework for Node.js that simplifies routing and handling HTTP requests.
- HTML: The markup language used for creating the structure of the web page.
- CSS: The styling language used for enhancing the presentation of the web page.
- OpenWeatherMap API: An external weather data provider that offers a wide range of weather information.

## Installation

1. Clone the repository or download the source code as a ZIP file.
2. Install Node.js if you haven't already. You can download it from the official website: https://nodejs.org/
3. Open a terminal or command prompt in the project directory.
4. Install the project dependencies by running the following command:

```bash
$ npm install
```
1. Sign up for a free OpenWeatherMap API key at https://openweathermap.org/appid if you don't have one.
2. Create a new file in the root directory named env.json.
3. Inside the env.json file, add your API key in the following format:

```json
{
    "apiKey" : "YOUR_OPENWEATHERMAP_API_KEY"
}
```

## Usage
1. Ensure you have completed the installation steps.
2. In the terminal or command prompt, start the application by running:

```bash
$ node app.js
```

1. Open your web browser and navigate to http://localhost:5000.
2. Enter the name of the city or location you want to check the weather for in the provided search input.
3. Click on the "Get Weather" button to retrieve and display the current weather data for the specified location.

## Contributing
Contributions to this Weather Application are welcome. If you find any issues or want to add new features, feel free to open an issue or submit a pull request on the GitHub repository.

## License
This Weather Application is open-source and distributed under the MIT License.

## Acknowledgments
- This application was developed as part of a project, inspired by the desire to learn and explore web - - development with Node.js and Express.js.
- Thanks to the creators and contributors of Node.js, Express.js, HTML, CSS, and OpenWeatherMap API for providing excellent tools and services.