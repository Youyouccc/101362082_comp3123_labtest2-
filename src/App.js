import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import WeatherDisplay from './WeatherDisplay.js';
import WeatherForecast from './WeatherForecast.js';
import { fetchWeather, fetchForecast } from './api.js';
import './App.css';

const getBackgroundClass = (condition) => {
  switch (condition.toLowerCase()) {
      case 'clear':
          return 'sunny';
      case 'clouds':
          return 'cloudy';
      case 'rain':
      case 'drizzle':
          return 'rainy';
      case 'snow':
          return 'snowy';
      case 'thunderstorm':
          return 'stormy';
      default:
          return 'default';
  }
};


const App = () => {
    const [city, setCity] = useState('Toronto');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState('');
    const [backgroundClass, setBackgroundClass] = useState('default');

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const weatherData = await fetchWeather(city);
                const forecastData = await fetchForecast(city);
                setWeather(weatherData);
                setForecast(forecastData);
                setError('');

                // Update background class based on current weather
                const condition = weatherData.weather[0].main;
                setBackgroundClass(getBackgroundClass(condition));

            } catch (err) {
                setError('City not found. Please try again.');
                setBackgroundClass('default');
            }
        };
        fetchWeatherData();
    }, [city]);
  

    return (
      <div className={`App ${backgroundClass}`}>
          <h1>Weather App</h1>
          <SearchBar onSearch={setCity} />
          {error && <p className="error">{error}</p>}
          {weather && <WeatherDisplay weather={weather} />}
          {forecast && <WeatherForecast forecast={forecast} />}
      </div>
    );
};

export default App;
