import axios from 'axios';

const apiKey = process.env.WEATHER_API_KEY;

export async function getByCity(cityName: string) {
	return axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey);
}

export async function getByCityState(cityName: string, state: string) {
	return axios.get(
		'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',' + state + '&appid=' + apiKey
	);
}

export async function getByLatLon(latitude: string, longitude: string) {
	return axios.get(
		'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey
	);
}
