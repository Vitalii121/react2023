import {axiosService} from "./axiosService";
import {urls} from "../constants";

const movieService ={
    getAll:()=> axiosService.get(urls.movies)
}



export {
    movieService
}