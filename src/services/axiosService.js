import axios from "axios";

import {baseURL} from "../constants/urls";


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTE4NjhjNjFkZmE3OWNlMDIwYmIyZjhhNjE4NTRkZSIsInN1YiI6IjY1NDdkOTZkZDhjYzRhMDEwMDViNDhhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EjGbe8NrWhfqIw9Obh1cJLVy_u8iDi_ao9XYVLkv3dE'
    }
};
const axiosService = axios.create({baseURL});


axiosService.interceptors.request.use(request => {
    request.headers.Authorization = options.headers.Authorization
    return request
})


export {
    axiosService
}