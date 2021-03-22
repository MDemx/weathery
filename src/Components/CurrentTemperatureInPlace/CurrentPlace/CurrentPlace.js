import React, {useEffect} from 'react'
import s from "../CurrentTemperatureInPlace.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getError, getUserCity, getUserCountry} from "../../../Selectors/userLocationSelectors";
import {getUserCoords, setError} from "../../../redux/userLocationReducer";
import {ErrorPopUp} from "../../common/ErrorPopUp/ErrorPopUp";

export const CurrentPlace = (props) => {

    const userCity = useSelector(getUserCity)
    const userCountry = useSelector(getUserCountry)
    const error = useSelector(getError)

    const dispatch = useDispatch()

    const callGetUserCoords = () => {
        dispatch(getUserCoords());
    }
    const callSetError = (error) => {
        debugger
        dispatch(setError(error));
    }

    if (!userCity) {
        callSetError("Unable to load data from github pages")
    }

    useEffect(() => {
        callGetUserCoords()
    }, [userCity, userCountry])

    return <div>
        <p className={s.place}>{userCity}, {userCountry}</p>
        {error &&
            <ErrorPopUp errorText={error}/>
        }
    </div>
}