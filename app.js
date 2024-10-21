document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    
    if (city === "") {
        alert("Please enter a city name");
    } else {
        // Placeholder for weather API call
        document.getElementById('weather-result').innerHTML = `Searching weather for ${city}...`;
    }
});
