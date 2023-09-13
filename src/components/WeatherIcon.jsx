import React from 'react'

let timeIcon =
[
    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_209726.png&f=1&nofb=1&ipt=64bf444c55a44925cec0e531db05af2a36d19e0aa9ebd415173220a51b933cc7&ipo=images' className='pic' alt=''/>,
    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_91085.png&f=1&nofb=1&ipt=af18d54630c7320e9be6c9370542f64aee0b210ab99690abd49a29f6155a550f&ipo=images' className='pic' alt=''/>,
]

let weatherIcon =
[
    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F139963%2Fisolated%2Fpreview%2F49089515e9bae1b23ab1241a8c7eca36-cloudy-rain-icon-by-vexels.png&f=1&nofb=1&ipt=856605b99634c7c4acf46503019851c88c46a29a252c00f050bacf813a6c04c3&ipo=images' className='wPic' alt=''/>,
    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fbzzricon-weather-outline%2F512%2F17_Clear_Sky-512.png&f=1&nofb=1&ipt=e63901cbce96221ce8e568abc8ad841c3904d186b92f7af2218c99d740ab82a6&ipo=images' className='wPic' alt=''/>,
    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fcloud-icon-png.png&f=1&nofb=1&ipt=a28276f1b0deb30cc32035db0b8da8e07095c8a4189c3383866034045c4928c9&ipo=images' className='wPic' alt=''/>
]

let counter = 0;
let weatherCounter = 0;

function WeatherIcon(props) {
    if(props.wInfo.current_weather?.is_day === 1)
    {
        counter = 0
    }
    else
    {
        counter = 1
    }
    if(props.wInfo.daily?.precipitation_probability_max >= 50)
    {
        weatherCounter = 0
    }
    else
    {
        weatherCounter = 1
    }
    if(props.wInfo.current_weather?.weathercode >= 2)
    {
        weatherCounter = 2;
    }
    else
    {
        weatherCounter = 1;
    }
return (
    <div>
        {timeIcon[counter]}
        {weatherIcon[weatherCounter]}
    </div>

)

}

export default WeatherIcon