import React from 'react'
import {CurrentDayDescription} from "../CurrentDayDescription/CurrentDayDescription"
import {CurrentTemperatureInPlace} from "../CurrentTemperatureInPlace/CurrentTemperatureInPlace"
import {Banner} from "../Banner/Banner";
import {WeekForecastItemsContainer} from "../WeekForecastItems/WeekForecastItemsContainer";
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    & * {
        color: white;
    }
`

const LeftContentWrapper = styled.div`
    margin: 4%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media screen and (max-width: 800px) {
        height: 70vh;
        order: 2;
    }
    
    @media screen and (max-width: 500px) {
        margin: 0 auto;
        text-align: center;
        height: 80vh;
        margin-bottom: 15%;
}
`

const BannerWrapper = styled.div`
    @media screen and (max-width: 800px) {
        order: 1;
        & img {
            padding-left: 20%;
        }
`

const RightContentWrapper = styled.div`
    @media screen and (max-width: 800px) {
        order: 3;
    }
`

export const MainContainer = (props) => {
    return <Wrapper>

        <LeftContentWrapper>
            <CurrentDayDescription/>
            <CurrentTemperatureInPlace/>
        </LeftContentWrapper>

        <BannerWrapper>
            <Banner/>
        </BannerWrapper>

        <RightContentWrapper>
            <WeekForecastItemsContainer/>
        </RightContentWrapper>

    </Wrapper>
}