import React from 'react';

const WeatherDisplay = ({ weather }) => {
    const {
        name,          // City name
        weather: [condition], // Weather condition object
        main,          // Temperature, pressure, humidity
        wind,          // Wind speed and direction
        visibility,    // Visibility
        sys            // Sunrise and sunset
    } = weather;

    const formatTime = (timestamp) => {
        return new Date(timestamp * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="weather-display">
            <h2>{name}</h2>
            <img
                src={`http://openweathermap.org/img/wn/${condition.icon}@2x.png`}
                alt={condition.description}
            />
            <p><strong>{condition.main}</strong>: {condition.description}</p>
            <p>Temperature: {main.temp}°C</p>
            <p>Min Temperature: {main.temp_min}°C | Max Temperature: {main.temp_max}°C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Air Pressure: {main.pressure} hPa</p>
            <p>Wind: {wind.speed} m/s at {wind.deg}°</p>
            <p>Visibility: {visibility / 1000} km</p>
            <p>Sunrise: {formatTime(sys.sunrise)}</p>
            <p>Sunset: {formatTime(sys.sunset)}</p>
            <br></br>
        </div>
    );
};

export default WeatherDisplay;
