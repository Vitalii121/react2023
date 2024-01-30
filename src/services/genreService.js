import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const genreService ={
    getAll:()=> axiosService.get(urls.genrelist)
}

export {
    genreService
}