// adding API key and URL from the website
const apiKey = "bc56830c1b30e51b66d02ae1d7075b8f";
const apiUrl =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// input fields
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

// to fetch the weather of the particular city via API key
async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    // display nothing when enter unknown city name
	if (response.status == 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {

        // show city name, temperatue, humidity, wind if they are found
		var data = await response.json();

		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // shows icons according to the weather condition in the form of array
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

		document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
	}
}
// to reterive the information when search button is click
searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});


// Call the functions
checkWeather();
