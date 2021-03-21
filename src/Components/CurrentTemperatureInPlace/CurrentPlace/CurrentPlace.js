import React, {useEffect} from 'react'
import s from "../CurrentTemperatureInPlace.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getUserCity, getUserCountry} from "../../../Selectors/userLocationSelectors";
import {getUserCoords} from "../../../redux/userLocationReducer";

export const CurrentPlace = (props) => {

    const userCity = useSelector(getUserCity)
    const userCountry = useSelector(getUserCountry)

    const dispatch = useDispatch()

    const callGetUserCoords = () => {
        dispatch(getUserCoords());
    }

    useEffect(() => {
        callGetUserCoords()
    }, [userCity, userCountry])

    return <div>
        <p className={s.place}>{userCity}, {userCountry}</p>
    </div>
}