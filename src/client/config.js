import axios from "axios";

const http = axios.create({
    baseURL:"https://api.giphy.com/v1/gifs",
    headers:{
        "Content-Type":"application/json",
    },
    
    
});

http.interceptors.request.use(
    (config) => {
        config.headers["accept"] = 'application/json';
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }  
);
export default http;