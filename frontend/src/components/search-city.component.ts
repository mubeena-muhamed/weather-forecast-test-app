import { Options, Vue } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';

@Options({
  props: {
  }
})
export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number } | null = null;
  defaultCenter = { lat: 40.7128, lng: -74.006 };
  @Inject('citySelectionService')
  citySelectionService!: { selectedPlace: { lat: number; lng: number } | null; setSelectedPlace: any };

  placeChanged(eventContext: string, place?: any) {
    if (eventContext === 'search' && place) {
      // Handle autocomplete search
      // Parameter place will be a place object
      this.selectedPlace = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      console.log('Place changed from search:', this.selectedPlace);
    } else if (eventContext === 'map' && place) {
      // Handle map click
      // Parameter place will be an event object
      const lat = place.latLng.lat();
      const lng = place.latLng.lng();
      this.selectedPlace = { lat, lng };
    }
    this.citySelectionService.setSelectedPlace(this.selectedPlace);
  }

  // Load map on page load with default options
  get mapCenter() {
    return this.selectedPlace || this.defaultCenter;
  }

}