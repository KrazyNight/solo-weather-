// weather Api:
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation&past_days=0&forecast_days=7

// geocode/geolocation to find longitude and latitude
// End Point
//  https://nominatim.openstreetmap.org/search?
//  https://nominatim.openstreetmap.org/search?q=birmingham%2C+pilkington+avenue&format=jsonv2


async function getData() {
  let search = "los angeles, ca"

  const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2`;

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

getData()