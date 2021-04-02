import {userWeatherAPI} from "../API/userWeatherAPI";

const GET_USER_CURRENT_WEATHER = 'userCurrentWeather/GET_USER_CURRENT_WEATHER'
const TOGGLE_FETCHING = 'userCurrentWeather/TOGGLE_FETCHING'

let initialState = {
    currentTemperature: null,
    currentWeatherDescription: null,
    isFetching: false
}

export const userCurrentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_CURRENT_WEATHER:
            return {
                ...state,
                currentTemperature: action.currentTemperature,
                currentWeatherDescription: action.weatherDescription
            };
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const toggleFetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching
})

export const getUserCurrentWeatherSuccess = (currentTemperature, weatherDescription) => ({
    type: GET_USER_CURRENT_WEATHER,
    currentTemperature, weatherDescription
})

export const getUserCurrentWeather = (userCity) => async (dispatch) => {
    if (userCity) {
        try {
            dispatch(toggleFetching(true))
            let userCityResult;
            if (userCity.includes(" ")) {
                userCityResult = userCity.split(" ")[0];
            } else {
                userCityResult = userCity;
            }

            let response = await userWeatherAPI.getUserCurrentWeather(userCityResult)

            const data = response.data
            const temperature = Math.ceil(data.main.temp - 273.15)
            const weatherDescription = data.weather[0].main;

            dispatch(getUserCurrentWeatherSuccess(temperature, weatherDescription));
        } catch (error) {
            console.log("Some error occured");
        }
        dispatch(toggleFetching(false))
    }
}