<template>
  <div data-cy="search-city">
    <h3>Type a city name to search</h3>
    <GMapAutocomplete @place_changed="(place:any) => placeChanged('search', place)" class="gmap-autocompolete" />
    <div>You can also click a location on the map to view the weather forecast</div>
    <GMapMap class="gmap-class" :center="mapCenter" :zoom="10" map-type-id="roadmap" ref="gmap"
      @click="(event:any) => placeChanged('map', event)">
    </GMapMap>
  </div>
</template>

<script lang="ts" src="./search-city.component.ts"></script>

<style scoped>
.gmap-class {
  height: 500px;
  width: 100%;
}
.gmap-autocompolete {
  width: 250px;
  margin: 10px auto;
  border-width: 1px;
  padding-left: 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.vue-map-container {
  height: 500px;
  width: 100%;
}

.pac-logo:after {
  display: none;
}

.hdpi.pac-logo:after {
  background-image: none;
}

.pac-item {
  cursor: default;
  padding: 0 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 40px;
  text-align: left;
  border-top: 1px solid #e6e6e6;
  font-size: 11px;
  color: #515151;
}

</style>
