import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const movieService={
    getAll:()=>axiosService.get(urls.movielist)

}



export {
    movieService
}