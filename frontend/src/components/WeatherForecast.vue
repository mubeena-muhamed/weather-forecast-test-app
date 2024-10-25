<template>
  <div data-cy="weather-forecast" class="border border-gray-300 rounded-lg p-5 max-w-md mx-auto my-5 shadow-md bg-white">

    <div class="max-w-full mx-auto px-4">
      <div class="flex justify-center">
        <div class="w-full max-w-md"> 
          <div class="bg-white rounded-3xl p-4 shadow-lg">   



            <h3 class="mb-4 text-2xl text-center">Weather Forecast for City</h3>
            <div v-if="errorMessage" class="text-red-600 text-center">{{ errorMessage }}</div>
            <div v-else-if="weatherForecast">
              <div class="text-center">
                <div class="flex flex-col items-center mt-5 mb-3">
                  <h1 class="mb-0 text-5xl text-gray-800 font-bold" id="temperature">{{ weatherForecast.temperature }}° C</h1>
                  <span id="condition" class="text-gray-500 text-md">{{ weatherCondition }}</span>
                </div>

                <div class="flex">
                  <div class="flex-grow">
                    <p class="my-1 flex items-center">
                      <img src="@/assets/images/wind.png" height="17px" alt="Wind Speed Icon" class="mr-1">
                      <span id="windspeed">{{ weatherForecast.windspeed }} km/h</span>
                      <span id="winddirection">{{ windDirection }}°</span> 
                    </p>

                  
                  </div>
                  <p class="my-1 flex items-center"> 
                      <img src="@/assets/images/cloud.png" height="17px" alt="Cloud Icon" class="mr-1">
                    </p>
              
                </div>
              </div>
            </div>
            <div v-else>
              <p class="text-center">Loading City Weather Forecast...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>
