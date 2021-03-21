import s from './App.module.css';
import React, {useEffect} from 'react';
import cn from "classnames";
import {MainContainer} from "./Components/MainContainer/MainContainer";
import {useDispatch, useSelector} from "react-redux";
import {getInitializedStatus} from "./Selectors/appSelectors";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./Components/common/Preloader/Preloader";
import {getCurrentWeatherDescription} from "./Selectors/currentUserWeatherSelectors";
import {CurrentWeatherVideo} from "./Components/common/CurrentWeatherVideo/CurrentWeatherVideo";
import {getCurrentTime} from "./Selectors/currentDayTimeSelectors";

export const App = () => {

    const isInitialized = useSelector(getInitializedStatus)
    const currentWeatherDescription = useSelector(getCurrentWeatherDescription)
    const currentTime = useSelector(getCurrentTime);

    const dispatch = useDispatch()
    const callInitializeApp = () => {
        dispatch(initializeApp())
    }

    useEffect(() => {
        callInitializeApp()
    }, [])


    if (!isInitialized) {
        return <Preloader/>
    }

    return <div className={cn(s.wrapper, s.wrapperDay)}>
        <MainContainer/>
        <CurrentWeatherVideo weather={currentWeatherDescription}/>
    </div>
}