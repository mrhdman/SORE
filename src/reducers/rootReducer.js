import { combineReducers } from 'redux';

import authReducer from './authReducer';
import addToLogReducer from './addToLogReducer';
import addWorkoutReducer from './addWorkoutReducer';
import personalLogReducer from './personalLogReducer';
import personalWorkoutsReducer from './personalWorkoutsReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    addToLog: addToLogReducer,
    addWorkout: addWorkoutReducer,
    personalLog: personalLogReducer,
    personalWorkouts: personalWorkoutsReducer

})

export default rootReducer;