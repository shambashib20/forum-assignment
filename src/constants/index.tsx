import { RouteProps } from "react-router-dom";

import { HomePage } from "../pages/home-page";


export const applicationRoutes: RouteProps[] = [
    {
        index: true,
        path: "/",
        element: <HomePage />,        
    }
]