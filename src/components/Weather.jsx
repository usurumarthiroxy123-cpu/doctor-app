import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Weather() {
    const [city,setCity]=useState('')
    const [weather,setWeather]=useState('')
   async  function handlesubmit(e){
        e.preventDefault()
        let response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`)

        
        setWeather(response.data.main.temp)

      
    }
  return (
    <div>
        <h1>Weather app</h1>
        <form action="" onSubmit={handlesubmit}>
            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="enter city name" className='text-field'/>
            <button type='submit' >Search</button>
        </form>
        <div>
            <h1>Name- {city}</h1>
           
            <h2>Temp -  {weather}</h2>
        </div>
    </div>
  )
}

export default Weather