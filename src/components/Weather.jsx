import React from 'react'

function Weather(props) {
    // useEffect(()=>{props.call("Pittsburgh")}, [props]);

    return (
    <div className="box">
        <div className="location">
        <p>Latitude: {props.wInfo.latitude}</p>
        <p>Latitude: {props.wInfo.longitude}</p>
        <p>{props.wInfo.elevation}m Above Sea Level </p>
        </div>

        <div className="time">
        <p>Sunrise: {props.wInfo.daily?.sunrise} {props.wInfo.timezone_abbreviation}</p>
        <p>Current Time: {props.wInfo.daily.time} {props.wInfo.timezone_abbreviation}</p>
        <p>Sunset: {props.wInfo.daily?.sunset} {props.wInfo.timezone_abbreviation}</p>
        </div>

        <div className="weather">
            <p>Current Temperature: {props.wInfo.current_weather?.temperature} °F</p>
            <p>Current Windspeed: {props.wInfo.current_weather?.windspeed} Knots</p>
            <p>Precipitation Chance: {props.wInfo.daily?.precipitation_probability_max}%</p>
        </div>

    </div>
)
}

export default Weather