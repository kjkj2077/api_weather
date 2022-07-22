import React from 'react'
import { Button } from 'react-bootstrap';

export const WeatherButton = ({cities,setCity,getCurrentLocation }) => {
  return (
    <div >
      <Button  id='button' variant="warning" onClick={() =>getCurrentLocation()}>Current Location</Button>
      
       {cities.map((item,index)=>(
        <Button id='button'  variant="warning"  key={index} onClick={()=>setCity(item)}>{item}</Button>
       ))}
    </div>
  )
}
