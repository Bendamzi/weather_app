# CloudCheck

CloudCheck is a simple and responsive weather application that provides real-time weather data for cities around the world. The app allows users to search for any city and get details such as temperature, weather conditions, wind speed, and humidity. Built using HTML, CSS, and JavaScript, it leverages the WeatherAPI for real-time weather data.

## Features
- Real-time weather information for any city worldwide.
- Displays temperature, weather conditions, humidity, and wind speed.
- Responsive design for both desktop and mobile users.
- Simple and intuitive user interface.
- Error handling for invalid city names or network issues.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Learning Objectives](#learning-objectives)
- [Challenges](#challenges)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **API**: [WeatherAPI](https://www.weatherapi.com/)
- **Version Control**: Git, GitHub

## Setup Instructions

To set up the project locally, follow the steps below:

1. **Clone the repository**:
   Open your terminal and run the following command to clone the CloudCheck repository to your local machine:

   ```bash
   git clone https://github.com/Bendamzi/weather_app.git

2. **Navigate to the project directory**:

    ```bash
    cd weather_app

3. **Open the project**:
    You can open the project in any code editor (such as Visual Studio Code) or directly in your browser by opening the index.html file.

4. **Set up the WeatherAPI**:
    Create an account at WeatherAPI and get your API key.
    In your local project, create a config.js file and add your API key as follows:

    ```javascript
    const apiKey = 'your-api-key-here';

5. **Run the application**:
    Open the index.html file in your browser or use a live server extension in your code editor to view the app.

## Usage
Once the app is set up, you can search for any city's weather information by entering the city name in the search bar and pressing "Enter" or clicking the search button.

Example
1. Enter Lagos into the search bar.
2. Press "Enter" or click the search icon.
3. View real-time weather details such as temperature, wind speed, and  weather conditions.

## Learning Objectives
Deepen knowledge of asynchronous operations and API integration in JavaScript.
Improve UI/UX design and responsive layout development.
Strengthen error handling and edge case management when working with APIs.
Practice effective version control with Git and GitHub.

## Challenges
API Error Handling: Managing user input errors (e.g., invalid city names) and handling network/API failures.
Responsive Design: Ensuring that the app works seamlessly across different screen sizes and devices.
Asynchronous JavaScript: Properly handling API requests without freezing the user interface.

## Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request with your improvements. All contributions are welcome!

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m "Add your feature here").
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.

## License
This project is open-source and available under the MIT License.

### Key Sections:
- **Setup Instructions**: Guides the user through cloning the repository, setting up the API key, and running the app.
- **Technologies Used**: Lists the tools and technologies employed in the project.
- **Usage**: Provides a brief explanation of how to use the app.
- **Learning Objectives** and **Challenges**: Highlight your growth and problem-solving during development.
- **Contributing**: Encourages collaboration and improvement.