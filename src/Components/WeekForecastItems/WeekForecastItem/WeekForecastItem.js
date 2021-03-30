import React from 'react'
import {WeatherData} from "./WeatherData/WeatherData";
import DayData from "./DayData/DayData";
import styled from "styled-components"

const ForecastWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 10px;
    margin-bottom: 1%;
    margin-top: 1%;
    
    & p {
        margin: 5px;
    }
`


export const WeekForecastItem = ({temperature, weatherDescription, day}) => {

    /*Temperature from server response is in Kelvins and should be converted to Celsium*/
    temperature = Math.ceil(temperature - 273.15)

    return <ForecastWrapper>

        <WeatherData temperature={temperature} weatherDescription={weatherDescription}/>
        <DayData day={day}/>
    </ForecastWrapper>
}