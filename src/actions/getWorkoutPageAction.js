import axios from 'axios';

export default function(token){
    var thePromise = axios({
        method: "POST",
        url: `${window.apiHost}/personalworkouts/getuserworkouts`,
        data: {
            token
        }
    });

    return{
        type: "GET_WORKOUTS",
        payload: thePromise
    }
}