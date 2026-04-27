// weather Api:
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7

// geocode/geolocation to find longitude and latitude
// End Point
//  https://nominatim.openstreetmap.org/search?
//  https://nominatim.openstreetmap.org/search?q=birmingham%2C+pilkington+avenue&format=jsonv2













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



































//continue scary 
const ddlUnits = document.querySelector("#ddlUnits");

const dvCityCountry = document.querySelector("#dvCityCountry");
const dvCurrDate = document.querySelector("#dvCurrDate");
const dvCurrTemp = document.querySelector("#dvCurrTemp");

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
  } catch (error) {
    console.error(error.message);
  }
}




getGeoData();

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
