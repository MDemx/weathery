import {userWeatherAPI} from "../API/userWeatherAPI";

const GET_USER_CURRENT_WEATHER = 'userCurrentWeather/GET_USER_CURRENT_WEATHER'

let initialState = {
    currentTemperature: null,
    currentWeatherDescription: null
}

export const userCurrentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_CURRENT_WEATHER:
            return {
                ...state,
                currentTemperature: action.currentTemperature,
                currentWeatherDescription: action.weatherDescription
            };
        default:
            return state
    }
}

export const getUserCurrentWeatherSuccess = (currentTemperature, weatherDescription) => ({
    type: GET_USER_CURRENT_WEATHER,
    currentTemperature, weatherDescription
})

export const getUserCurrentWeather = (userCity) => async (dispatch) => {
    if (userCity) {
        try {
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
    }
}