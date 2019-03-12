import { combineReducers } from 'redux';

import authReducer from './authReducer';
import addToLogReducer from './addToLogReducer';
import addWorkoutReducer from './addWorkoutReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    addToLog: addToLogReducer,
    addWorkout: addWorkoutReducer
})

export default rootReducer;