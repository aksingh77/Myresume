import React, { useEffect, useState } from 'react'

import './CustomWeather.css'
const CustomWeather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b3db72cf8d90309e886d0c8cbf9bee1f`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson.main);
            setCity(resJson.main)

        }
        fetchApi();
    }, [search])

    return (
        <div className="custom_weather">
            <div className="custom_weather_container">
                <div className="custom_weather_input">
                    <input type="search" placeholder="Enter any city name" className="custom_weather_inputfield" onChange={(event) => {

                        setSearch(event.target.value)
                    }} />
                </div>
                {!city ? (<p>no data found</p>) :
                    (<>
                        <div className="infromation">
                            <h2 className="custom_weather_location"><i className="fas fa-street-view"></i>{search}</h2>
                            <h1 className="custom_weather_temp">{city.temp}°C</h1>
                            <h3 className="custom_weather_tempminmax"><span>Min: {city.temp_max}</span>°C | <span>Max: {city.temp_min}°C</span></h3>
                            <div className="custom_weather_wavee">
                                <div className="custom_weather_wave -one"> </div>
                                <div className="custom_weather_wave -two"> </div>
                                <div className="custom_weather_wave -three"> </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div >
    )
}

export default CustomWeather;
