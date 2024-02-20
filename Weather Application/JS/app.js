// API key and URL from the OpenWeatherMap API

const apiKey = "bc56830c1b30e51b66d02ae1d7075b8f"; // NOTE - you have to create your own API key by creatimg your own account
const apiUrl =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Selecting HTML elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to fetch weather data for a particular city via API
async function checkWeather(city) {
	// Fetch weather data from OpenWeatherMap API
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

	// Display an error message if the city is not found
	if (response.status == 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {
		// Parse the JSON response
		var data = await response.json();

		// Update HTML with weather information
		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML =
			Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

		// Display weather icons based on the weather condition
		if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "/Weather Application/Images/clouds.png";
		} else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "/Weather Application/Images/clear.png";
		} else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "/Weather Application/Images/rain.png";
		} else if (data.weather[0].main == "Drizzle") {
			weatherIcon.src = "/Weather Application/Images/drizzle.png";
		} else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "/Weather Application/Images/mist.png";
		}

		// Show the weather information and hide the error message
		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display = "none";
	}
}

// Event listener for the search button click
searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});

// Call the checkWeather function without any argument to display default information
checkWeather();
