import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentTemperature, getCurrentWeatherDescription} from "../../../Selectors/currentUserWeatherSelectors";
import {getUserCurrentWeather} from "../../../redux/userCurrentWeatherReducer";
import {getUserCity} from "../../../Selectors/userLocationSelectors";
import styled from "styled-components"

const CurrentWeatherInfoWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 5%;
`

const CurrentWeatherDescription = styled.p`
    margin-bottom: 5%;
    font-size: 1.5em;
    font-weight: bolder;
`

const Temperature = styled.p`
    font-size: 5em;
    font-weight: bold;
`


export const CurrentWeather = (props) => {

    const currentTemperature = useSelector(getCurrentTemperature)
    const userCity = useSelector(getUserCity)
    const currentWeatherDescription = useSelector(getCurrentWeatherDescription)

    const dispatch = useDispatch();
    const callGetUserCurrentWeather = (city) => {
        dispatch(getUserCurrentWeather(city))
    }

    useEffect(() => {
        callGetUserCurrentWeather(userCity)

        /*Here i've set interval 60s to get actual weather when customer is on site */
        setInterval( () => {
            callGetUserCurrentWeather(userCity)
        }, 600000)
    }, [currentTemperature, userCity])

    return <CurrentWeatherInfoWrapper>
        <Temperature>{currentTemperature}°C</Temperature>
        <CurrentWeatherDescription>{currentWeatherDescription}</CurrentWeatherDescription>
    </CurrentWeatherInfoWrapper>
}