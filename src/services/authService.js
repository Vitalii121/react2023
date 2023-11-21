import {axiosService} from "./axiosService";
import {urls} from "../constants";

const authService = {
    register: (data) => axiosService.post(urls.auth.register, data),
    login: (data) => axiosService.post(urls.auth.login, data)
}


export {
    authService
}