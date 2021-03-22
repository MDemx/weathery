export const getCurrentTemperature = (state) => {
    return state.userCurrentWeather.currentTemperature
}

export const getCurrentWeatherDescription = (state) => {
    return state.userCurrentWeather.currentWeatherDescription
}

export const getIsFetching = (state) => {
    return state.userCurrentWeather.isFetching
}