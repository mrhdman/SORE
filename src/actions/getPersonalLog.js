import axios from 'axios';

export default function(token){
    var thePromise = axios({
        method: "POST",
        url: `${window.apiHost}/personallog/getuserlog`,
        data: {
            token
        }
    });

    return{
        type: "GET_LOG",
        payload: thePromise
    }
}