import axios from "axios";
import { backendUrl } from "src/constants/backend";

export const backend = axios.create({
    withCredentials: false,
    baseURL: backendUrl,
    headers: {
       'Access-Control-Allow-Origin': '*',
       'Content-Type': 'application/json',
    },
})

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.error(error);
    return Promise.reject(error);
});