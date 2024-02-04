import {AxiosService} from "./AxiosService";
import {urls} from "../constants/urls";

const postsService={
    getById:(id)=>AxiosService.get(urls.posts.byId(id))
}


export {
    postsService
}