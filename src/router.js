import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";


let router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element:<Navigate to={'users'}/>},

            {
                path: 'users', element: <UsersPage/>, children:[
                    {
                        path:'posts', element:<PostsPage/>
                    }
                ]
            },
            {
                path: 'comments', element: <CommentsPage/>
            }
        ]
    },
]);


export {
    router
}