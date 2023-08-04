/**
 * Function for get month | day date | time
 *
 * @returns {string} - Formatted date
 */
const getCurrentDayTime = () => {
	let months = [
		"Jan",
		"Fab",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	let $date = new Date();
	let month = months[$date.getMonth()];
	let date = $date.getDate();

	let weeksDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let day = weeksDay[$date.getDay()];
	let hours = $date.getHours();
	let minuts = $date.getMinutes();
	if (minuts < 10) {
		minuts = "0" + minuts;
	}

	let priod = "AM";
	if (hours > 10) {
		priod = "PM";
		if (hours > 12) {
			hours -= 12;
		}
	}

	return `${day} | ${month} ${date} | ${hours}:${minuts} ${priod}`;
};

let data = document.getElementById("date");
data.innerHTML = getCurrentDayTime();