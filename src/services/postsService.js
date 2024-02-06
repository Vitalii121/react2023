import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService={
    getByUserId:(id)=>axiosService.get(urls.posts.byUserId(id))
}



export {
    postsService
}