import {axiosService} from "./axiosService";
import {urls} from "../constants";

const genresService ={

getAll:()=>axiosService.get(urls.genre.base)
}


export {
    genresService
}