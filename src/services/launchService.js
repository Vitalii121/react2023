import {spaceXService} from "./spacexService";
import {urls} from "../constants/urls";

const launchService ={
    getAll:()=>spaceXService.get(urls.launches)
}



export {launchService};