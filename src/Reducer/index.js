import {combineReducers} from 'redux';
import OtoparkReducer from './OtoparkReducer';

let reducers = combineReducers({
    OtoparkReducer: OtoparkReducer,
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};
export default rootReducer;