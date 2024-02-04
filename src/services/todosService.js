import {AxiosService} from "./AxiosService";
import {urls} from "../constants/urls";

const TodosService = {
    getAll: () => AxiosService.get(urls.todos)
}


export {
    TodosService
}