import {axiosService} from "./axiosService";
import {urls} from "../constants";

const movieService ={
    getAll:()=> axiosService.get(urls.movies.base),
    byId:(id)=>axiosService.get(urls.movies.byId(id))
}



export {
    movieService
}