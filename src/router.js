import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, MoviesPage} from "./pages";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>,children:[
            {path:'/discover/movie', element:<MoviesPage/>},
            {path:'/genre/movie/list', element:<GenrePage/>}
        ]
    }
])




export {
    router
}