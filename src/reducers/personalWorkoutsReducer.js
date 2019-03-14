export default function(state = [], action){
    switch(action.type){
        case 'GET_WORKOUTS':
            return action.payload.data;
        default:
            return state;            
    }
}