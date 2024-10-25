<template>
  <div data-cy="weather-forecast" class="border border-gray-300 rounded-lg p-5 max-w-md mx-auto my-5 shadow-md bg-white">
    <h3 class="mb-4 text-xl text-center">Weather Forecast for City</h3>
    <div v-if="errorMessage" class="text-red-600 text-center">{{ errorMessage }}</div>
    <div v-else-if="weatherForecast">
      <div class="text-center">
        <p class="font-bold text-lg">Temperature: {{ weatherForecast.temperature }}°C</p>
        <p class="text-gray-600">Conditions: {{ weatherCondition }}</p>
        <p class="text-gray-600">Wind Speed: {{ weatherForecast.windspeed }} km/h</p>
        <p class="text-gray-600">Wind Direction: {{ windDirection }}°</p>
      </div>
    </div>
    <div v-else>
      <p class="text-center">Loading City Weather Forecast...</p>
    </div>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>
