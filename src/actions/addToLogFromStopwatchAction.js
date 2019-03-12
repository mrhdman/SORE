import axios from 'axios'


export default (formData)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/timer/stopwatch`,
        method: 'POST',
        data: formData
    })
    return{
        type: "ADD_TO_LOG_ACTION",
        payload: axiosPromise
    }
}