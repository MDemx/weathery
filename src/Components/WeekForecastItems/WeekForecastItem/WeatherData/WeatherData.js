import React from 'react'
import styled from "styled-components"


const Temperature = styled.div`
    font-weight: bold;
    font-size: 1.5em;
`

const WeatherDescription = styled.div`
    font-size: 0.9em;
`


export const WeatherData = ({temperature, weatherDescription}) => {
    return <div>
        <Temperature>
            <p>{temperature}°C</p>
        </Temperature>
        <WeatherDescription>
            <p>{weatherDescription}</p>
        </WeatherDescription>
    </div>
}