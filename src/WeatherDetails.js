import React, { Component } from 'react';

class WeatherDetails extends Component {
    render() {
        const { humidity, pressure } = this.props;
        return (
            <div className="weather-details">
                <p>Humidity: {humidity}%</p>
                <p>Pressure: {pressure} hPa</p>
            </div>
        );
    }
}

export default WeatherDetails;
