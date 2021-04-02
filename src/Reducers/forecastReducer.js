import {forecastAPI} from "../API/forecastAPI";

const GET_FORECAST = 'forecast/GET_FORECAST'
const TOGGLE_FETCHING = 'forecast/TOGGLE_FETCHING'

let initialState = {
    forecastData: [],
    isFetching: false
}

export const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FORECAST:
            return {
                ...state,
                forecastData: action.forecastData
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const getForecastSuccess = (forecastData, currentDay) => ({
    type: GET_FORECAST,
    forecastData, currentDay
})

export const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
})

export const getForecast = (lat, lon, currentDay) => async (dispatch) => {
    try {
        dispatch(toggleFetching(true));
        if (lat && lon) {
            const response = await forecastAPI.getForecast(lat, lon)
            const forecastData = response.data.list

            dispatch(getForecastSuccess(forecastData, currentDay))
        }
    } catch (error) {
        console.log("Some error");
    }
    dispatch(toggleFetching(false));
}
