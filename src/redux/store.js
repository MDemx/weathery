import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {userLocationReducer} from "./userLocationReducer";
import {userCurrentWeatherReducer} from "./userCurrentWeatherReducer";
import {appReducer} from "./appReducer";
import {currentDayTimeReducer} from "./currentDayTimeReducer";
import {forecastReducer} from "./forecastReducer";

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