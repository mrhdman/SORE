import axios from 'axios'


export default (formData)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/register`,
        method: 'POST',
        data: formData
    })
    return{
        type: "AUTH_ACTION",
        payload: axiosPromise
    }
}