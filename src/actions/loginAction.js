import axios from 'axios';

export default (formData)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/login`,
        method: 'POST',
        data: formData
    })
    return{
        type: "LOGIN_ACTION",
        payload: axiosPromise
    }
}