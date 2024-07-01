import axios from 'axios';

const API_KEY = '1ea304b25e9641b4a2f170725242606';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getCurrentWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
  return response.data;
};

export const getForecast = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`);
  return response.data;
};