document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const weatherResult = document.getElementById('weather-result');
    const errorMessage = document.getElementById('error-message');

    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        weatherResult.innerHTML = "";
    } else {
        // Clear previous error message
        errorMessage.textContent = "";
        weatherResult.innerHTML = "Fetching weather data...";

        // Make API call to WeatherAPI
        const apiKey = 'f891b5fd097a440cbd9181532241010';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("City not found");
                }
                return response.json();
            })
            .then(data => {
                // Display the weather data
                const { location, current } = data;
                weatherResult.innerHTML = `
                    <h2>${location.name}, ${location.country}</h2>
                    <p>Temperature: ${current.temp_c}°C</p>
                    <p>Condition: ${current.condition.text}</p>
                    <img src="${current.condition.icon}" alt="Weather Icon">
                `;
            })
            .catch(error => {
                // Handle errors (e.g., invalid city)
                errorMessage.textContent = "Error: " + error.message;
                weatherResult.innerHTML = "";
            });
    }
});
