import {forecastAPI} from "../API/forecastAPI";

const GET_FORECAST = 'forecast/GET_FORECAST'
const SET_NEW_WEEK_INDEX = 'forecast/SET_NEW_WEEK_INDEX'

let initialState = {
    newWeekIndex: 0,
    forecastData: [],
}

export const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORECAST:
            return {
                ...state,
                forecastData: action.forecastData
            }
        case 'SET_NEW_WEEK_INDEX':
            return { ...state, newWeekIndex: action.index + 1 }
        default:
            return state
    }
}

export const getForecastSuccess = (forecastData, currentDay) => ({
    type: GET_FORECAST,
    forecastData, currentDay
})

export const getForecast = (lat, lon, currentDay) => async (dispatch) => {
    try {
        if (lat && lon) {
            const response = await forecastAPI.getForecast(lat, lon)
            const forecastData = response.data.list

            dispatch(getForecastSuccess(forecastData, currentDay))
        }
    } catch (error) {
        console.log("Some error");
    }
}
