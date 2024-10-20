Real-Time Weather Monitoring System
Table of Contents
Features
Technologies
Getting Started
Prerequisites
Installation
Configuration
Running the Application
API Endpoints
Entities
License
Features
Real-time Weather Data Retrieval: Continuously fetches weather data from the OpenWeatherMap API at configurable intervals.
Daily Weather Summary: Calculates daily aggregates like average, maximum, and minimum temperatures, and dominant weather condition.
Temperature Conversion: Converts temperature from Kelvin to Celsius or Fahrenheit based on user preferences.
Alerting System: User-configurable thresholds for temperature and weather conditions trigger alerts.
Persistent Storage: Saves daily summaries in a database for future analysis.
Visualization: Display weather summaries, historical trends, and triggered alerts using graphs.
Technologies
Node.js: Backend framework
Express.js: For API handling
MongoDB: Database for storing weather summaries
OpenWeatherMap API: For retrieving real-time weather data
Chart.js / D3.js: For visualization of weather trends and alerts
Getting Started
Follow these instructions to set up the project locally and start monitoring weather data in real-time.

Prerequisites
Node.js (v12 or higher)
npm
MongoDB installed locally or accessible via cloud
OpenWeatherMap API Key: Sign up here
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Jatingupta9120/WeatherWise
cd weather-monitoring-system
Install the dependencies:

bash
Copy code
npm install
Configuration
Create a .env file in the project root and set the following environment variables:

bash
Copy code
API_KEY=<Your OpenWeatherMap API Key>
DB_URI=<MongoDB connection string>
INTERVAL=300  # Interval in seconds for data retrieval (default: 5 minutes)
TEMP_UNIT=Celsius  # Set to 'Fahrenheit' for Fahrenheit
ALERT_THRESHOLD_TEMP=35  # Temperature threshold for alerts (in Celsius)
Running the Application
To start the application, run:

bash
Copy code
npm start
The application will now retrieve weather data at the specified interval, process it, and store daily summaries in MongoDB. Alerts will trigger based on defined thresholds.

API Endpoints
GET /api/weather/summary: Retrieves the daily weather summaries.
GET /api/weather/alerts: Fetches any triggered alerts.
POST /api/weather/thresholds: Set user-defined thresholds for temperature or weather conditions.
Entities
Weather Summary:
date: Date of the weather summary.
avg_temp: Average temperature.
max_temp: Maximum temperature.
min_temp: Minimum temperature.
dominant_condition: The most frequent weather condition for the day.
Alert:
alert_type: Type of alert (e.g., temperature, condition).
trigger_value: Value that triggered the alert.
timestamp: Time the alert was triggered.
