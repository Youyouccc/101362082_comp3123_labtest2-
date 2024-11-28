import axios from 'axios';

const API_KEY = 'ecf67ce62137ad347717c0c78f635dcb';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


const FORECAST_URL_5days = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};



export const fetchForecast = async (city) => {
    try {
        const response = await axios.get(`${FORECAST_URL_5days}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching forecast:', error);
        throw error;
    }
};
