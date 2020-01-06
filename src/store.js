import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import mainPageReducer from "./reducers/mainpage-reducer";

const reducers = combineReducers({
    mainPage: mainPageReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
