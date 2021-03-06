import React from 'react'
import StarryNight from "../../assets/videos/Starry night.mp4"
import Clear from "../../assets/videos/sunny.mp4"
import {useSelector} from "react-redux";
import {getCurrentTime} from "../../Selectors/currentDayTimeSelectors";
import Preloader from "./Preloader/Preloader";
import styled from "styled-components"


const VideoWrapper = styled.video`
    z-index: -1;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`

export const CurrentWeatherVideo = ({weather}) => {

    const currentTime = useSelector(getCurrentTime)

    let currentHours
    if (currentTime) {
        currentHours = currentTime.split(":")[0]

        if ((currentHours >= 19 && currentHours <= 23) || (currentHours >= 0 && currentHours <= 5)) {
            //if it is night will be displayed background with starry sky
            return <VideoWrapper autoPlay muted loop>
                <source src={StarryNight} type="video/mp4"/>
            </VideoWrapper>
        } else {
            /*if it is day will be displayed background with weather from server.
            * For example in response there is data that it is rainy weather now, so
            * background will be video with rain
            */

            /* I made video with sunny weather displayed by default because while running site on
            * github pages server requests may be blocked by CORS policy
            * and there is no response and to prevent white background, by default will
            * be displayed this background
            * */
            return <VideoWrapper autoPlay muted loop>
                <source src={Clear} type="video/mp4"/>
                {/*{weather === "Clouds" && <source src={Clouds} type="video/mp4"/>}
                {weather === "Clear" && <source src={Clear} type="video/mp4"/>}
                {weather === "Rain" && <source src={Rain} type="video/mp4"/>}*/}
            </VideoWrapper>
        }
    } else {
        return <Preloader/>;
    }
}