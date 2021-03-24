import React, {useEffect} from 'react'
import s from "../CurrentTemperatureInPlace.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getError, getUserCity, getUserCountry} from "../../../Selectors/userLocationSelectors";
import {getUserCoords, setError} from "../../../redux/userLocationReducer";
import {ErrorPopUp} from "../../common/ErrorPopUp/ErrorPopUp";
import {getWeekForecastData} from "../../../Selectors/weekForecastSelectors";

export const CurrentPlace = (props) => {

    const userCity = useSelector(getUserCity)
    const userCountry = useSelector(getUserCountry)
    const error = useSelector(getError)
    const forecast = useSelector(getWeekForecastData)


    const dispatch = useDispatch()

    const callGetUserCoords = () => {
        dispatch(getUserCoords());
    }
    const callSetError = (error) => {
        dispatch(setError(error));
    }

    if (!userCity && !forecast) {
        /* If there is no userCity and user forecast from server
        * it means that server has blocked request and in this case
        * will be displayed and error*/
        callSetError("Unable to load data from gh-pages")
    }

    useEffect(() => {
        callGetUserCoords()
    }, [userCity, userCountry])

    return <div>
        <p className={s.place}>{userCity}, {userCountry}</p>
        {(error && error.length > 0) &&
            <ErrorPopUp errorText={error}/>
        }
    </div>
}