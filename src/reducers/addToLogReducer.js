export default (state = [], action) => {
    if (action.type === "ADD_TO_LOG_ACTION") {
        return action.payload.data
    } else {
        return state
    }
 
 }