import { useEffect,useState} from 'react';
import './App.css';


function App() {
  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeatherByCurrentLocation(lat,lon)
    });
  }
  const getWeatherByCurrentLocation = async(lat,lon)=>{
    let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2bbfca26b218d02919ec5a1c0f56539a`
    let resopon= await fetch(url) //fetch하는걸 기다려주셈
    let data = await resopon.json();
    console.log("data",data)
  }

  useEffect(()=>{ //렌더후 바로실행 
    getCurrentLocation()
  },[])

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
