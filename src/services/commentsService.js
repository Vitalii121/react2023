import {AxiosService} from "./AxiosService";
import {urls} from "../constants/urls";

const CommentsService ={
    getAll:()=>AxiosService.get(urls.comments)
}




export {
    CommentsService
}