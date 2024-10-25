import WeatherService from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject, Watch } from 'vue-property-decorator';

import { WEATHER_CODES, WIND_DIRECTION_DESCRIPTIONS } from '@/constants/weatherConstants';

@Options({
  props: {
  }
})
export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;

  @Inject('citySelectionService')
  citySelectionService!: { selectedPlace: { lat: number; lng: number } | null };
  
  weatherForecast: any = null;
  errorMessage: string | null = null;


  mounted() {
    this.fetchWeatherForecast(null)
  }

  @Watch('citySelectionService.selectedPlace', { immediate: true, deep: true })
  onSelectedPlaceChanged(newPlace: { lat: number; lng: number } | null) {
    if (newPlace) {
      this.fetchWeatherForecast(newPlace);
    }
  }

  async fetchWeatherForecast(selectedPlace: { lat: number; lng: number } | null) {
    this.errorMessage = '';
    if (selectedPlace) {
      const { lat, lng } = selectedPlace;
      try {
        const result = await this.weatherService.getWeatherForecast(lat, lng);
        this.weatherForecast = result.current_weather;
        console.log('Weather data:', this.weatherForecast.temperature);
      } catch (error) {
        this.errorMessage = 'Failed to fetch weather data. Please try again.';
        console.error('Error fetching weather data:', error);
      }
    } else {
      this.errorMessage = 'Please select a location first.';
    }
  }

  get weatherCondition() {
    return WEATHER_CODES[this.weatherForecast?.weathercode] || 'Unknown weather condition';
  }

  get windDirection() {
    const windDirection = this.weatherForecast?.winddirection;

    if (windDirection === 0 || windDirection === 360) {
        return WIND_DIRECTION_DESCRIPTIONS['0'];
    } else if (windDirection > 0 && windDirection < 90) {
        return WIND_DIRECTION_DESCRIPTIONS['1-89'];
    } else if (windDirection === 90) {
        return WIND_DIRECTION_DESCRIPTIONS['90'];
    } else if (windDirection > 90 && windDirection < 180) {
        return WIND_DIRECTION_DESCRIPTIONS['91-179'];
    } else if (windDirection === 180) {
        return WIND_DIRECTION_DESCRIPTIONS['180'];
    } else if (windDirection > 180 && windDirection < 270) {
        return WIND_DIRECTION_DESCRIPTIONS['181-269'];
    } else if (windDirection === 270) {
        return WIND_DIRECTION_DESCRIPTIONS['270'];
    } else if (windDirection > 270 && windDirection < 360) {
        return WIND_DIRECTION_DESCRIPTIONS['271-359'];
    } else {
        return 'Unknown direction';
    }
  }

}


