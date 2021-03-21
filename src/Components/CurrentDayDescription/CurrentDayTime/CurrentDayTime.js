import React from 'react'
import s from "./CurrentDayTime.module.css"

export const CurrentDayTime = (props) => {
    return <div className={s.wrapper}>
        <p className={s.day}>{props.day}</p>
        <p className={s.time}>{props.time}</p>
    </div>
}