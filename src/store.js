import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {userLocationReducer} from "./Reducers/userLocationReducer";
import {userCurrentWeatherReducer} from "./Reducers/userCurrentWeatherReducer";
import {appReducer} from "./Reducers/appReducer";
import {currentDayTimeReducer} from "./Reducers/currentDayTimeReducer";
import {forecastReducer} from "./Reducers/forecastReducer";

let reducers = combineReducers({
    userLocation: userLocationReducer,
    userCurrentWeather: userCurrentWeatherReducer,
    app: appReducer,
    currentDayTime: currentDayTimeReducer,
    forecast: forecastReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;