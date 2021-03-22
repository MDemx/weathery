import React from 'react'
import s from "./CurrentWeatherVideo.module.css"

import Clouds from "../../../assets/videos/Clouds.mp4"
import StarryNight from "../../../assets/videos/Starry night.mp4"
import Clear from "../../../assets/videos/sunny.mp4"
import Rain from "../../../assets/videos/Rain.mp4"
import {useSelector} from "react-redux";
import {getCurrentTime} from "../../../Selectors/currentDayTimeSelectors";
import Preloader from "../Preloader/Preloader";

export const CurrentWeatherVideo = ({weather}) => {

    const currentTime = useSelector(getCurrentTime)

    let currentHours
    if (currentTime) {
        currentHours = currentTime.split(":")[0]

        if ((currentHours >= 19 && currentHours <= 23) || (currentHours >= 0 && currentHours <= 5)) {
            return <video autoPlay muted loop id={s.myVideo}>
                <source src={StarryNight} type="video/mp4"/>
            </video>
        } else {
            return <video autoPlay muted loop id={s.myVideo}>
                <source src={Clear} type="video/mp4"/>
                {/*{weather === "Clouds" && <source src={Clouds} type="video/mp4"/>}
                {weather === "Clear" && <source src={Clear} type="video/mp4"/>}
                {weather === "Rain" && <source src={Rain} type="video/mp4"/>}*/}
            </video>
        }
    } else {
        return <Preloader/>
    }
}