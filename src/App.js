import { useEffect, useState } from 'react';
import './App.css';
import { WeatherBox } from './component/WeatherBox';
import { WeatherButton } from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClipLoader } from 'react-spinners';
import { Button } from 'react-bootstrap';

function App() {
  const [weather, setWeather] = useState(null)
  const cities = ['Paris', 'New York', 'Tokyo', 'Seoul']
  const [city, setCity] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const getCurrentLocation = () => { //현재위치
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
    });
  }
  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2bbfca26b218d02919ec5a1c0f56539a`
      let resopon = await fetch(url) //fetch하는걸 기다려주셈
      let data = await resopon.json();
      setWeather(data)
      setLoading(false)
    } catch (err) {
      console.log("err", err)
      setLoading(true)
    }
  }
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2bbfca26b218d02919ec5a1c0f56539a`
      setLoading(true)
      let resopon = await fetch(url) //fetch하는걸 기다려주셈
      let data = await resopon.json();
      setLoading(false)
      setWeather(data)
    }
    catch (err) {
      console.log("err", err)
      setLoading(true)
    }
  }
  const getWeatherBySearch = async (search) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2bbfca26b218d02919ec5a1c0f56539a`
      setLoading(true)
      let resopon = await fetch(url) //fetch하는걸 기다려주셈
      let data = await resopon.json();
      setLoading(false)
      setWeather(data)
  }
  useEffect(() => { //렌더후 바로실행 
    if (city == "") {
      getCurrentLocation()
      setLoading(true)
    } else {
      getWeatherByCity()
      setLoading(false)
    }
  }, [city])

  return (
    <div className="App">
      <div className="container">
        {
          loading == true ? (
            <ClipLoader color='#f88c6b' loading={loading} size={150} />
          ) : (
            <div>
              <WeatherBox weather={weather} />
              <WeatherButton cities={cities} setCity={setCity}getCurrentLocation={getCurrentLocation}/>
              <input type='text' placeholder='Search city' id='search' onChange={(e) => setSearch(e.target.value)} />
              <Button variant="success" onClick={() => getWeatherBySearch(search)}>Search</Button>
            </div>
          )}
      </div>  
    </div>
  );
}
export default App;

