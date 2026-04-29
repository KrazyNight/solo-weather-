// weather Api:
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7

// geocode/geolocation to find longitude and latitude
// End Point
//  https://nominatim.openstreetmap.org/search?
//  https://nominatim.openstreetmap.org/search?q=birmingham%2C+pilkington+avenue&format=jsonv2






//hw: i want this code today's date
//ex: Tuesday, Aug 5, 2025
// I GOOGLED "javascript , I want to code the current date in this format, Tuesday, Aug 5, 2025"

// const today = new Date();

// const options = { 
//   weekday: 'long', 
//   year: 'numeric', 
//   month: 'short', 
//   day: 'numeric' 
// };

// const formattedDate = today.toLocaleDateString('en-US', options);

// console.log(formattedDate); 
// Output Example: "Tuesday, Aug 5, 2025"













// step 1 solo
// const ddlUnits = document.querySelector("#ddlUnits");

// let cityName, countryName;





// async function getGeoData() {
//   let search = "los angeles, ca"

//   const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);


//     let lat = result[0].lat;
//     let lon = result[0].lon;

//     loadLocationData(result)
//     getWeatherData(lat, lon);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// function loadLocationData(locationData){
//   let location = locationData[0].address;
//   cityName = location.city;
//   countryName = location.country;

//   console.log(cityName, countryName)

// }


// async function getWeatherData(lat, lon) {
//   let tempUnit = "celsius";
//   let windUnit = "kmh";
//   let precipUnit = "mm";

//   if (ddlUnits.value === "F") {
//     tempUnit = "fahrenheit";
//     windUnit = "mph";
//     precipUnit = "inch";
//   }


//   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// }




// getGeoData();












// example 1: del afterwards


































// step 2 solo: connecting web to code screen for current   (current complete)
// (current complete)
// (current complete)
// (current complete)
// (current complete)
// (current complete)
// (current complete)
// (current complete)
// (current complete)
// (current complete)
// (current complete)
//continue scary 
// const ddlUnits = document.querySelector("#ddlUnits");

// const dvCityCountry = document.querySelector("#dvCityCountry");
// const dvCurrDate = document.querySelector("#dvCurrDate");
// const dvCurrTemp = document.querySelector("#dvCurrTemp");

// const pFeelsLike = document.querySelector("#pFeelsLike");
// const pHumidity = document.querySelector("#pHumidity");
// const pWind = document.querySelector("#pWind");
// const pPrecipitation = document.querySelector("#pPrecipitation");


// let cityName, countryName;





// async function getGeoData() {
//   let search = "los angeles, ca"

//   const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);


//     let lat = result[0].lat;
//     let lon = result[0].lon;

//     loadLocationData(result)
//     getWeatherData(lat, lon);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// function loadLocationData(locationData){
//   let location = locationData[0].address;
//   cityName = location.city;
//   countryName = location.country_code.toUpperCase();


//   const today = new Date();

//   const dateOptions = { 
//     weekday: 'long', 
//     year: 'numeric', 
//     month: 'short', 
//     day: 'numeric' 
//   };

//   const formattedDate = today.toLocaleDateString('en-US', dateOptions);

//   dvCityCountry.textContent = `${cityName}, ${countryName}`;
//   dvCurrDate.textContent = formattedDate;

//   //console.log(formattedDate); 
//   //Output Example: "Tuesday, Aug 5, 2025"
//   //console.log(cityName, countryName, formattedDate)

// }


// async function getWeatherData(lat, lon) {
//   let tempUnit = "celsius";
//   let windUnit = "kmh";
//   let precipUnit = "mm";

//   if (ddlUnits.value === "F") {
//     tempUnit = "fahrenheit";
//     windUnit = "mph";
//     precipUnit = "inch";
//   }


//   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);

//     loadWeatherData(result); // why do I place this function here
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// function loadWeatherData(weatherData) {
//   dvCurrTemp.textContent = Math.round(weatherData.current.temperature_2m);
//   pFeelsLike.textContent = Math.round(weatherData.current.apparent_temperature);
//   pHumidity.textContent = weatherData.current.relative_humidity_2m;
//   pWind.textContent = `${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m.replace("mp/h", "mph")}`;
//   pPrecipitation.textContent = `${weatherData.current.precipitation} ${weatherData.current_units.precipitation.replace("inch", "in")}`;
// };




// getGeoData();



//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)
//(current above complete)








//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code


// const ddlUnits = document.querySelector("#ddlUnits");

// let cityName, countryName;





// async function getGeoData() {
//   let search = "los angeles, ca"

//   const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);


//     let lat = result[0].lat;
//     let lon = result[0].lon;

//     loadLocationData(result)
//     getWeatherData(lat, lon);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// function loadLocationData(locationData){
//   let location = locationData[0].address;
//   cityName = location.city;
//   countryName = location.country;

//   console.log(cityName, countryName)

// }


// async function getWeatherData(lat, lon) {
//   let tempUnit = "celsius";
//   let windUnit = "kmh";
//   let precipUnit = "mm";

//   if (ddlUnits.value === "F") {
//     tempUnit = "fahrenheit";
//     windUnit = "mph";
//     precipUnit = "inch";
//   }


//   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// }




// getGeoData();


//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code
//example 2: template, do not change code








//example 2: yes work on it, del afterwards, template above 


//yes work on it, del afterwards, template above
//yes work on it, del afterwards, template above
//yes work on it, del afterwards, template above
//yes work on it, del afterwards, template above
//yes work on it, del afterwards, template above
//yes work on it, del afterwards, template above
//yes work on it, del afterwards, template above








// const ddlUnits = document.querySelector("#ddlUnits");

// let cityName, countryName;





// async function getGeoData() {
//   let search = "los angeles, ca"

//   const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);


//     let lat = result[0].lat;
//     let lon = result[0].lon;

//     loadLocationData(result)
//     getWeatherData(lat, lon);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// function loadLocationData(locationData){
//   let location = locationData[0].address;
//   cityName = location.city;
//   countryName = location.country;

//   console.log(cityName, countryName)

// }


// async function getWeatherData(lat, lon) {
//   let tempUnit = "celsius";
//   let windUnit = "kmh";
//   let precipUnit = "mm";

//   if (ddlUnits.value === "F") {
//     tempUnit = "fahrenheit";
//     windUnit = "mph";
//     precipUnit = "inch";
//   }


//   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// }




// getGeoData();







//yes work on it, del afterwards, template above 
//yes work on it, del afterwards, template above 
//yes work on it, del afterwards, template above 
//yes work on it, del afterwards, template above 
//yes work on it, del afterwards, template above 
//yes work on it, del afterwards, template above 
//yes work on it, del afterwards, template above 
//yes work on it, del afterwards, template above 










































// example 3: complete
//complete
//complete
//complete
//complete
//complete
//complete
//complete








// //continue
// //create function getWeatherFileName(){}
// //create function loadDailyForecast(){}
// // ----- create week loop 
// //----get date; number 1
// // ----- get dayOfWeek = mon, thu,  wed




// const ddlUnits = document.querySelector("#ddlUnits");

// const dvCityCountry = document.querySelector("#dvCityCountry");
// const dvCurrDate = document.querySelector("#dvCurrDate");
// const dvCurrTemp = document.querySelector("#dvCurrTemp");

// const pFeelsLike = document.querySelector("#pFeelsLike");
// const pHumidity = document.querySelector("#pHumidity");
// const pWind = document.querySelector("#pWind");
// const pPrecipitation = document.querySelector("#pPrecipitation");




// let cityName, countryName;





// async function getGeoData() {
//   let search = "los angeles, ca"

//   const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);


//     let lat = result[0].lat;
//     let lon = result[0].lon;

//     loadLocationData(result)
//     getWeatherData(lat, lon);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// function loadLocationData(locationData){
//   let location = locationData[0].address;
//   cityName = location.city;
//   countryName = location.country_code.toUpperCase();


//   const today = new Date();

//   const dateOptions = { 
//     weekday: 'long', 
//     year: 'numeric', 
//     month: 'short', 
//     day: 'numeric' 
//   };

//   const formattedDate = today.toLocaleDateString('en-US', dateOptions);

//   dvCityCountry.textContent = `${cityName}, ${countryName}`;
//   dvCurrDate.textContent = formattedDate;

//   //console.log(formattedDate); 
//   //Output Example: "Tuesday, Aug 5, 2025"
//   //console.log(cityName, countryName, formattedDate)

// }


// async function getWeatherData(lat, lon) {
//   let tempUnit = "celsius";
//   let windUnit = "kmh";
//   let precipUnit = "mm";

//   if (ddlUnits.value === "F") {
//     tempUnit = "fahrenheit";
//     windUnit = "mph";
//     precipUnit = "inch";
//   }


//   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);

//     loadCurrentWeather(result); // why do I place this function here
//     loadDailyWeather(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// function loadCurrentWeather(weatherData) {
//   dvCurrTemp.textContent = Math.round(weatherData.current.temperature_2m);
//   pFeelsLike.textContent = Math.round(weatherData.current.apparent_temperature);
//   pHumidity.textContent = weatherData.current.relative_humidity_2m;
//   pWind.textContent = `${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m.replace("mp/h", "mph")}`;
//   pPrecipitation.textContent = `${weatherData.current.precipitation} ${weatherData.current_units.precipitation.replace("inch", "in")}`;
// };


// function loadDailyWeather(weatherData){
// // create week loop 
// // get date; number 1
// // get dayOfWeek = mon, thu,  wed
//   let daily = weatherData.daily;

//   for (let i = 0; i < 7; i++) {
//     // Get the raw date string (e.g., "2026-04-28") => daily.time[i]
//     // 3. Create a Date object
//     let date= new Date(daily.time[i]);
//     // 4. Format to get the day of the week (e.g., "Mon")
//     let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });

//     // 5. Console.log the result
//     //console.log(dayOfWeek); // Output: "Tue", "Wed", etc.
//     //console.log(date); // Output: "2026-04-28"
    
//     //access any of the 7 daily boxes 
//     let dvForecastDay = document.querySelector(`#dvForecastDay${i + 1}`);
//     //console.log(dvForecastDay)

//     let weatherCodeName = getWeatherCodeName(daily.weather_code[i]);
//     let dailyHigh = Math.round(daily.temperature_2m_max[i]) + "°";
//     let dailyLow = Math.round(daily.temperature_2m_min[i]) + "°";


//     //console.log("any of the "let" above");
//     // ex: 
//     //console.log(date)
//     while (dvForecastDay.firstChild) {
//       dvForecastDay.removeChild(dvForecastDay.firstChild);
//     }





//     addDailyElement("p", "daily_day-title", dayOfWeek, "", dvForecastDay, "afterbegin");
//     addDailyElement("img", "daily_day-icon", "", weatherCodeName, dvForecastDay, "beforeend");
//     addDailyElement("div", "daily_day-temp", "", "", dvForecastDay, "beforeend");

//     let dvDailyTemps = document.querySelector(`#dvForecastDay${i + 1} .daily_day-temp`);
//     addDailyElement("p", "daily__day-high", dailyHigh, "", dvDailyTemps, "afterbegin");
//     addDailyElement("p", "daily__day-low", dailyLow, "", dvDailyTemps, "beforeend");



//   }
// };



// function addDailyElement(tag, className, content, weatherCodeName, parentElement, position) {
//   const newElement = document.createElement(tag);
//   if (className) newElement.className = className;

//   if (content) {
//     newElement.textContent = content; // Simpler than createTextNode
//   }

//   if (tag === "img" && weatherCodeName) {
//     newElement.src = `/assets/images/icon-${weatherCodeName}.webp`;
//     newElement.alt = `Weather condition: ${weatherCodeName}`;
//     newElement.width = 60;
//     newElement.height = 60;
//   }

//   parentElement.insertAdjacentElement(position, newElement);
//   return newElement; // Useful if you need to reference it immediately after
// }










// function getWeatherCodeName(code) {
//   // sunny - 0, 
//   // partly-cloudy - 1,2
//   // overcast - 3
//   // fog - 45, 48
//   // drizzle -51, 53, 55, 56, 57
//   // rain - 61, 63, 65, 66, 67, 80, 81, 82
//   // snow - 71, 73, 75, 77, 85, 86
//   // storm -95, 96, 99

//   const weatherCodes = {
//     0: "sunny",
//     1: "partly-cloudy",
//     2: "partly-cloudy",
//     3: "overcast",
//     45: "fog",
//     48: "fog",
//     51: "drizzle",
//     53: "drizzle",
//     55: "drizzle",
//     56: "drizzle",
//     57: "drizzle",
//     61: "rain",
//     63: "rain",
//     65: "rain",
//     66: "rain",
//     67: "rain",
//     80: "rain",
//     81: "rain",
//     82: "rain",
//     71: "snow",
//     73: "snow",
//     75: "snow",
//     77: "snow",
//     85: "snow",
//     86: "snow",
//     95: "storm",
//     96: "storm",
//     99: "storm",
//   };

//   //let fileName = `icon-${weatherCodes[code]}.webp`;

//   return weatherCodes[code];
  
  
// }


// //console.log(getWeatherCodeName(0))




// getGeoData();

// ddlUnits.addEventListener("change", getGeoData);







//complete
//complete
//complete
//complete
//complete
//complete
//complete
//complete
//complete
//complete









//example 3: woring on daily

// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3


//
// const ddlUnits = document.querySelector("#ddlUnits");

// const dvCityCountry = document.querySelector("#dvCityCountry");
// const dvCurrDate = document.querySelector("#dvCurrDate");
// const dvCurrTemp = document.querySelector("#dvCurrTemp");

// const pFeelsLike = document.querySelector("#pFeelsLike");
// const pHumidity = document.querySelector("#pHumidity");
// const pWind = document.querySelector("#pWind");
// const pPrecipitation = document.querySelector("#pPrecipitation");




// let cityName, countryName;





// async function getGeoData() {
//   let search = "los angeles, ca"

//   const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);


//     let lat = result[0].lat;
//     let lon = result[0].lon;

//     loadLocationData(result)
//     getWeatherData(lat, lon);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// function loadLocationData(locationData){
//   let location = locationData[0].address;
//   cityName = location.city;
//   countryName = location.country_code.toUpperCase();


//   const today = new Date();

//   const dateOptions = { 
//     weekday: 'long', 
//     year: 'numeric', 
//     month: 'short', 
//     day: 'numeric' 
//   };

//   const formattedDate = today.toLocaleDateString('en-US', dateOptions);

//   dvCityCountry.textContent = `${cityName}, ${countryName}`;
//   dvCurrDate.textContent = formattedDate;

//   //console.log(formattedDate); 
//   //Output Example: "Tuesday, Aug 5, 2025"
//   //console.log(cityName, countryName, formattedDate)

// }


// async function getWeatherData(lat, lon) {
//   let tempUnit = "celsius";
//   let windUnit = "kmh";
//   let precipUnit = "mm";

//   if (ddlUnits.value === "F") {
//     tempUnit = "fahrenheit";
//     windUnit = "mph";
//     precipUnit = "inch";
//   }


//   const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);

//     loadCurrentWeather(result); // why do I place this function here
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// function loadCurrentWeather(weatherData) {
//   dvCurrTemp.textContent = Math.round(weatherData.current.temperature_2m);
//   pFeelsLike.textContent = Math.round(weatherData.current.apparent_temperature);
//   pHumidity.textContent = weatherData.current.relative_humidity_2m;
//   pWind.textContent = `${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m.replace("mp/h", "mph")}`;
//   pPrecipitation.textContent = `${weatherData.current.precipitation} ${weatherData.current_units.precipitation.replace("inch", "in")}`;
// };






// getGeoData();

// ddlUnits.addEventListener("change", getGeoData);



// template above  #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template #3
// template above #3




// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards














// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards
// example 3 : You try, del afterwards



//continue





const ddlUnits = document.querySelector("#ddlUnits");

const dvCityCountry = document.querySelector("#dvCityCountry");
const dvCurrDate = document.querySelector("#dvCurrDate");
const dvCurrTemp = document.querySelector("#dvCurrTemp");

const pFeelsLike = document.querySelector("#pFeelsLike");
const pHumidity = document.querySelector("#pHumidity");
const pWind = document.querySelector("#pWind");
const pPrecipitation = document.querySelector("#pPrecipitation");




let cityName, countryName;





async function getGeoData() {
  let search = "los angeles, ca"

  const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);


    let lat = result[0].lat;
    let lon = result[0].lon;

    loadLocationData(result)
    getWeatherData(lat, lon);
  } catch (error) {
    console.error(error.message);
  }
}

function loadLocationData(locationData){
  let location = locationData[0].address;
  cityName = location.city;
  countryName = location.country_code.toUpperCase();


  const today = new Date();

  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };

  const formattedDate = today.toLocaleDateString('en-US', dateOptions);

  dvCityCountry.textContent = `${cityName}, ${countryName}`;
  dvCurrDate.textContent = formattedDate;

  //console.log(formattedDate); 
  //Output Example: "Tuesday, Aug 5, 2025"
  //console.log(cityName, countryName, formattedDate)

}


async function getWeatherData(lat, lon) {
  let tempUnit = "celsius";
  let windUnit = "kmh";
  let precipUnit = "mm";

  if (ddlUnits.value === "F") {
    tempUnit = "fahrenheit";
    windUnit = "mph";
    precipUnit = "inch";
  }


  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7&wind_speed_unit=${windUnit}&temperature_unit=${tempUnit}&precipitation_unit=${precipUnit}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    loadCurrentWeather(result); // why do I place this function here
    loadDailyWeather(result);
  } catch (error) {
    console.error(error.message);
  }
};

function loadCurrentWeather(weatherData) {
  dvCurrTemp.textContent = Math.round(weatherData.current.temperature_2m);
  pFeelsLike.textContent = Math.round(weatherData.current.apparent_temperature);
  pHumidity.textContent = weatherData.current.relative_humidity_2m;
  pWind.textContent = `${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m.replace("mp/h", "mph")}`;
  pPrecipitation.textContent = `${weatherData.current.precipitation} ${weatherData.current_units.precipitation.replace("inch", "in")}`;
};


function loadDailyWeather(weatherData){
// create week loop 
// get date; number 1
// get dayOfWeek = mon, thu,  wed
  let daily = weatherData.daily;

  for (let i = 0; i < 7; i++) {
    // Get the raw date string (e.g., "2026-04-28") => daily.time[i]
    // 3. Create a Date object
    let date= new Date(daily.time[i]);
    // 4. Format to get the day of the week (e.g., "Mon")
    let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });

    // 5. Console.log the result
    //console.log(dayOfWeek); // Output: "Tue", "Wed", etc.
    //console.log(date); // Output: "2026-04-28"
    
    //access any of the 7 daily boxes 
    let dvForecastDay = document.querySelector(`#dvForecastDay${i + 1}`);
    //console.log(dvForecastDay)

    let weatherCodeName = getWeatherCodeName(daily.weather_code[i]);
    let dailyHigh = Math.round(daily.temperature_2m_max[i]) + "°";
    let dailyLow = Math.round(daily.temperature_2m_min[i]) + "°";


    //console.log("any of the "let" above");
    // ex: 
    //console.log(date)
    while (dvForecastDay.firstChild) {
      dvForecastDay.removeChild(dvForecastDay.firstChild);
    }





    addDailyElement("p", "daily_day-title", dayOfWeek, "", dvForecastDay, "afterbegin");
    addDailyElement("img", "daily_day-icon", "", weatherCodeName, dvForecastDay, "beforeend");
    addDailyElement("div", "daily_day-temp", "", "", dvForecastDay, "beforeend");

    let dvDailyTemps = document.querySelector(`#dvForecastDay${i + 1} .daily_day-temp`);
    addDailyElement("p", "daily__day-high", dailyHigh, "", dvDailyTemps, "afterbegin");
    addDailyElement("p", "daily__day-low", dailyLow, "", dvDailyTemps, "beforeend");



  }
};



function addDailyElement(tag, className, content, weatherCodeName, parentElement, position) {
  const newElement = document.createElement(tag);
  if (className) newElement.className = className;

  if (content) {
    newElement.textContent = content; // Simpler than createTextNode
  }

  if (tag === "img" && weatherCodeName) {
    newElement.src = `/assets/images/icon-${weatherCodeName}.webp`;
    newElement.alt = `Weather condition: ${weatherCodeName}`;
    newElement.width = 60;
    newElement.height = 60;
  }

  parentElement.insertAdjacentElement(position, newElement);
  return newElement; // Useful if you need to reference it immediately after
}










function getWeatherCodeName(code) {
  // sunny - 0, 
  // partly-cloudy - 1,2
  // overcast - 3
  // fog - 45, 48
  // drizzle -51, 53, 55, 56, 57
  // rain - 61, 63, 65, 66, 67, 80, 81, 82
  // snow - 71, 73, 75, 77, 85, 86
  // storm -95, 96, 99

  const weatherCodes = {
    0: "sunny",
    1: "partly-cloudy",
    2: "partly-cloudy",
    3: "overcast",
    45: "fog",
    48: "fog",
    51: "drizzle",
    53: "drizzle",
    55: "drizzle",
    56: "drizzle",
    57: "drizzle",
    61: "rain",
    63: "rain",
    65: "rain",
    66: "rain",
    67: "rain",
    80: "rain",
    81: "rain",
    82: "rain",
    71: "snow",
    73: "snow",
    75: "snow",
    77: "snow",
    85: "snow",
    86: "snow",
    95: "storm",
    96: "storm",
    99: "storm",
  };

  //let fileName = `icon-${weatherCodes[code]}.webp`;

  return weatherCodes[code];
  
  
}


//console.log(getWeatherCodeName(0))




getGeoData();

ddlUnits.addEventListener("change", getGeoData);
