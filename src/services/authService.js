import {urls} from "../constants";
import {axiosService} from "./axiosService";

const tokenKey = 'token'

const authService = {
    register(data) {
        return axiosService.post(urls.auth.register, data);
    },

    async login(user)  {
        const {data:{access}} = await axiosService.post(urls.auth.login, user);
        this.setToken(access)
    },

    me(){
        return axiosService.get(urls.auth.me)
    },

    setToken(token) {
        localStorage.setItem(tokenKey, token)
    },
    getToken() {
        return localStorage.getItem(tokenKey)
    },
    deleteToken() {
        localStorage.removeItem(tokenKey)
    }
}


export {
    authService
}