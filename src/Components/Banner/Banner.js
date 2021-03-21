import React from 'react'
import s from './Banner.module.css'
import logo from '../../assets/logo.png'

export const Banner = (props) => {
    return <div className={s.wrapper}>
        <div className={s.logo}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={s.name}>
            <h1>Weathery</h1>
        </div>
    </div>
}