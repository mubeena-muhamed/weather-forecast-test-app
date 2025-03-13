import axios from 'axios';
export interface ForecastModel {
    latitude: number,
    longitude: number,
    elevation: number,
    current_weather: {
        temperature: number,
        windspeed: number,
        winddirection: number,
        weathercode: number,
        time: Date
    }
}

// API call to get weather forecast details
export async function getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {
    const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
            latitude: lat,
            longitude: lng,
            current_weather: true
        }
    });
    const result = response.data;
    return {
        latitude: result.latitude,
        longitude: result.longitude,
        elevation: result.elevation,
        current_weather: {
            temperature: result.current_weather.temperature,
            windspeed: result.current_weather.windspeed,
            winddirection:  result.current_weather.winddirection,
            weathercode:  result.current_weather.weathercode,
            time: result.current_weather.time
        }
    };
}
