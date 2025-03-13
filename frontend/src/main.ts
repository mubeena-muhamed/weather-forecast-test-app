import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps';
import WeatherService from './services/weather-service.service';
import { setupAxiosInterceptors } from './shared/axios-interceptor';
import CitySelectionService from './services/city-selection-service.service';
import './styles/common.css';
setupAxiosInterceptors(() => {
    console.log('Unauthenticated');
});

const app = createApp(App)

const weatherService = new WeatherService();
const citySelectionService = CitySelectionService;
app.provide('weatherService', weatherService);
app.provide('citySelectionService', citySelectionService);

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAmlmN3Spuolpvy8xtSeeYK2KgH0166I90',
        libraries: 'places,geometry',
    },
});

app.use(store).use(router)

app.mount('#app')

