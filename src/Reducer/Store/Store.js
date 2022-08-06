import {createStore,combineReducers} from "redux";
import rootReducer from "../index";


export default function configureStore(initialState) {
    const store= createStore(rootReducer, initialState);
    return store;
}