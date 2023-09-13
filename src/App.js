import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SubmitLocation from './components/SubmitLocation';
import Weather from './components/Weather';
import WeatherIcon from './components/WeatherIcon';

function App() {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState(null)
  const getLocation = async (searchTerm) =>
  {
    await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=1&language=en&format=json`)
    .then(res => 
      {
        // console.log(res.data.results[0])
        setLocation(res.data.results[0])
      })
      .catch(err => 
        {
          console.log(err);
        })
  }

  const getWeather = async () =>
  {
    await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=weathercode,is_day&daily=sunrise,sunset,uv_index_max,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1&models=gfs_seamless`)
    .then(res => 
      {
        console.log(res.data)
        setWeather(res.data)
      }).catch(err => 
        {
          console.log(err);
        })
  }

useEffect(()=>{getWeather()}, [location]);


  return (
    <div className='wrapper'>
    <div className="App">
      <h1>Today's Weather for: {location.name}</h1>
      <h2><a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a></h2>
      <SubmitLocation locationSearch={getLocation}/>
      {weather?<Weather wInfo={weather}/> : <p>Loading...</p>}
    </div>
    </div>
  );
}

export default App;

//NOTES
//To make an interactive weather app
//We need to do the following things.

//Form Submit -> Name -> Returns Name setLocation(res.data.results[0].name) and???
// NEED res.data.results[0].latitude & res.data.results[0].longitude
// INPUT INTO METEO WEATHER API AND HAVE IT UPDATE EVERYTHING ELSE


//Extras
//Change background based on time of day
//Add more weather icons based on provided weather codes

//Resources used to Learn:
//https://www.youtube.com/watch?v=bMRrSqWFKqM API Tutorial - Fetch Data with Axios - (Example in React)
