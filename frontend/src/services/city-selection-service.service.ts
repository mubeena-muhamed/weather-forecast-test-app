
  import { reactive } from 'vue';
  export type Place = { lat: number; lng: number };

  const CitySelectionService = reactive({
    selectedPlace: null as Place | null,
    setSelectedPlace(place: Place) {
      this.selectedPlace = place;
    },
  });

  export default CitySelectionService;

