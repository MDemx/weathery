import React, {useEffect} from 'react';
import {MainContainer} from "./Components/MainContainer/MainContainer";
import {useDispatch, useSelector} from "react-redux";
import {getInitializedStatus} from "./Selectors/appSelectors";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./Components/common/Preloader/Preloader";
import {getCurrentWeatherDescription} from "./Selectors/currentUserWeatherSelectors";
import {CurrentWeatherVideo} from "./Components/common/CurrentWeatherVideo";
import styled from "styled-components"


const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

export const App = () => {

    const isInitialized = useSelector(getInitializedStatus)
    const currentWeatherDescription = useSelector(getCurrentWeatherDescription)

    const dispatch = useDispatch()
    const callInitializeApp = () => {
        dispatch(initializeApp())
    }

    useEffect(() => {
        callInitializeApp()
    }, [isInitialized])


    if (!isInitialized) {
        return <Preloader/>
    }

    return <Wrapper>
        <MainContainer/>
        <CurrentWeatherVideo weather={currentWeatherDescription}/>
    </Wrapper>
}