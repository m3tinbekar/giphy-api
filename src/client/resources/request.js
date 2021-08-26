import axios from "../config.js"

export default {
    trend : async (parameters = {}) => {
        console.log({...parameters});
        return await axios.get(axios.defaults.baseURL+"/trending?api_key=35w188mVFnTIq01VM4z2zbtBuQ2whRw9&limit=50&rating=g");
    },
    daily : async (parameters = {}) => {
        console.log({...parameters});
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        return await axios.get(axios.defaults.baseURL+"/random?api_key=35w188mVFnTIq01VM4z2zbtBuQ2whRw9&tag="+date+"&rating=g");
    },
    search : async (parameters = {}) => {
        console.log({...parameters});
        return await  axios.get(axios.defaults.baseURL+"/search?api_key=35w188mVFnTIq01VM4z2zbtBuQ2whRw9&q="+parameters+"&limit=50&offset=0&rating=g&lang=en")
    },
    slider : async (parameters = {}) => {
        console.log({...parameters});
        return await axios.get(axios.defaults.baseURL+"/trending?api_key=R8JLB8EHXG5I36zhs2VbwZ2UGcRiCUpk&limit=20&rating=g&offset=0")
    },
    select : async (parameters = {}) =>{
        console.log({...parameters});
        return await axios.get(axios.defaults.baseURL+"/"+parameters+"?api_key=35w188mVFnTIq01VM4z2zbtBuQ2whRw9")
    }

};