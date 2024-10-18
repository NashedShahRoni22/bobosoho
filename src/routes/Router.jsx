import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import PrivateEmail from "../pages/PrivateEmail";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path :"/about",
                element:<About/>
            },{
                path :"/private",
                element:<PrivateEmail/>
            },
        ]
    }
])