import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, MoviesPage} from "./pages";
import {MovieDetailsPage} from "./pages/MovieDetailsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>,children:[
            {path:'/discover/movie', element:<MoviesPage/>},
            {path:'/discover/movie/:id', element:<MovieDetailsPage/>},
            {path:'/genre/movie/list', element:<GenrePage/>}
        ]
    }
])




export {
    router
}