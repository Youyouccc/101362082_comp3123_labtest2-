import React from 'react';

const WeatherForecast = ({ forecast }) => {
    // Group data by day
    const dailyData = forecast.list.filter(item =>
        item.dt_txt.includes("12:00:00") // Filter for midday data
    );

    return (
        <div className="forecast">
            <h3>5-Day Weather Forecast</h3>
            <div className="forecast-cards">
                {dailyData.map((day, index) => (
                    <div key={index} className="forecast-card">
                        <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                        />
                        <p>{day.weather[0].description}</p>
                        <p>Temp: {day.main.temp}°C</p>
                        <p>Min: {day.main.temp_min}°C</p>
                        <p>Max: {day.main.temp_max}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;
