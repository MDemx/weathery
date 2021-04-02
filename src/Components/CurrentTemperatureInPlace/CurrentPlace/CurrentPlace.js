import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getError, getUserCity, getUserCountry} from "../../../Selectors/userLocationSelectors";
import {ErrorPopUp} from "../../common/ErrorPopUp/ErrorPopUp";
import {getWeekForecastData} from "../../../Selectors/weekForecastSelectors";
import styled from "styled-components"
import {getUserCoords, setError} from "../../../Reducers/userLocationReducer";


const Place = styled.p`
    font-size: 1.2em;
    margin-top: -5%;
`


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
        <Place>{userCity}, {userCountry}</Place>
        {(error && error.length > 0) &&
            <ErrorPopUp errorText={error}/>
        }
    </div>
}