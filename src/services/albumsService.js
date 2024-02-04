import {AxiosService} from "./AxiosService";
import {urls} from "../constants/urls";

const AlbumsService={
    getAll:()=>AxiosService.get(urls.albums)
}


export {
    AlbumsService
}