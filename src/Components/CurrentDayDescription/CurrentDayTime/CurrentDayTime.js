import React from 'react'
import s from "./CurrentDayTime.module.css"
import {useSelector} from "react-redux";
import Preloader from "../../common/Preloader/Preloader";
import {getIsFetching} from "../../../Selectors/currentDayTimeSelectors";

export const CurrentDayTime = (props) => {
/*
    const isFetching = useSelector(getIsFetching)
    if (isFetching) {
        return <Preloader/>
    }*/

    return <div className={s.wrapper}>
        <p className={s.day}>{props.day}</p>
        <p className={s.time}>{props.time}</p>
    </div>
}