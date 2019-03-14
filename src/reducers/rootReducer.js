import { combineReducers } from 'redux';

import authReducer from './authReducer';
import addToLogReducer from './addToLogReducer';
import addWorkoutReducer from './addWorkoutReducer';
import personalLogReducer from './personalLogReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    addToLog: addToLogReducer,
    addWorkout: addWorkoutReducer,
    personalLog: personalLogReducer

})

export default rootReducer;