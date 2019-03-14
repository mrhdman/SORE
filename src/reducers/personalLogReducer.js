export default function(state = [], action){
    switch(action.type){
        case 'GET_LOG':
            return action.payload.data;
        default:
            return state;            
    }
}