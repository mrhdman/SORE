import axios from 'axios'


export default (formData)=>{
    const axiosPromise = axios({
        url: `${window.apiHost}/workout/create`,
        method: 'POST',
        data: formData
    })
    return{
        type: "CREATE_WORKOUT_ACTION",
        payload: axiosPromise
    }
}