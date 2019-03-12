export default (state = [], action) => {
    if (action.type === "CREATE_WORKOUT_ACTION") {
        return action.payload.data
    } else {
        return state
    }
 
 }