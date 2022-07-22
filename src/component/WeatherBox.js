import React from 'react'
export const WeatherBox = ({ weather }) => {
  const temperatureC =
    weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : "";
  const temperatureF =
    weather && weather.main
      ? (((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
      : "";
      console.log('weather',weather)
  return (
    
    <div className='weather-box'>
      {
        weather?.cod == 404 ? (
          <div>
            <h1>City not found</h1>
          </div>
        ) : (
          <div>
            <h1>{weather?.name}</h1>
            <h2>{`${temperatureC} °C / ${temperatureF} °F`}</h2>
            <h3>{weather?.weather[0].main}</h3>
          </div>
        )}
    </div>
  )
}
