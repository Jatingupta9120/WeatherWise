# WeatherPulse

A real-time weather monitoring system built with Node.js, OpenWeatherMap API, MongoDB, and Chart.js. This application retrieves real-time weather data, processes it for daily rollups and aggregates, triggers alerts based on thresholds, and visualizes weather trends.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Entities](#entities)
- [License](#license)

## Features

- **Real-time Data Retrieval**: Fetches weather data from the OpenWeatherMap API at configurable intervals (default: 5 minutes).
- **Daily Rollups and Aggregates**: Calculates daily average, maximum, and minimum temperatures, and determines the dominant weather condition.
- **Temperature Conversion**: Converts temperature values from Kelvin to Celsius or Fahrenheit based on user preferences.
- **User-Defined Alerts**: Allows users to define thresholds for temperature and weather conditions.
- **Triggered Alerts**: Triggers alerts when temperature or weather conditions exceed defined thresholds.
- **Data Visualization**: Visualizes daily summaries and weather trends with charts.
- **Persistent Data Storage**: Stores daily weather summaries in MongoDB for further analysis.

## Technologies

- **Node.js**: Backend framework for server-side logic.
- **Express.js**: Handles API requests and routing.
- **MongoDB**: NoSQL database for storing weather summaries.
- **OpenWeatherMap API**: Source of real-time weather data.
- **Chart.js / D3.js**: Visualization libraries to display weather summaries and trends.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (local or cloud instance)
- **OpenWeatherMap API Key**: [Sign up for a free API key](https://home.openweathermap.org/users/sign_up)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jatingupta9120/WeatherWise.git
   cd weatherpulse
