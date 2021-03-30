import React from 'react'
import {CurrentWeather} from "./CurrentWeather/CurrentWeather"
import {CurrentPlace} from "./CurrentPlace/CurrentPlace"
import styled from "styled-components"

const Wrapper = styled.div`
    float: left;
    
    @media screen and (max-width: 800px) {
        margin-left: 50%;
        text-align: center;
    }
    
    @media screen and (max-width: 500px) {
        margin: 0;
    }
`


export const CurrentTemperatureInPlace = (props) => {
    return <Wrapper>
        <CurrentWeather/>
        <CurrentPlace/>
    </Wrapper>
}