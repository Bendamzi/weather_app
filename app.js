// Select DOM elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    } else {
        displayError('Please enter a city name.');
    }
});

// Event listener for Enter key press
cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value.trim();

        if (city) {
            getWeather(city);
        } else {
            displayError('Please enter a city name.');
        }
    }
});

// Fetch weather data from WeatherAPI
function getWeather(city) {
    const apiKey = 'f891b5fd097a440cbd9181532241010';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.location) {
                displayWeather(data);
                errorMessage.innerHTML = ''; // Clear error message
            } else {
                displayError('City not found. Please try again.');
            }
        })
        .catch(error => {
            displayError('Error fetching weather data.');
        });
}

// Display weather data
function displayWeather(data) {
    const temp = data.current.temp_c;
    const description = data.current.condition.text;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;

    weatherInfo.innerHTML = `
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Weather:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} kph</p>
    `;
}

// Display error message
function displayError(message) {
    errorMessage.innerHTML = message;
    weatherInfo.innerHTML = ''; // Clear weather info
}