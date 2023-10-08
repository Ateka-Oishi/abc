import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Appointment from "../components/Appointment/Appointment";
import Feedback from "../components/Feedback/Feedback";
import Services from "../components/services/services";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            path: '/',
            element: <Home></Home>

            },
            
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path:'/services',
                element: <Services></Services>,
            },
            {
                path:'/feedback',
                element: <Feedback></Feedback>
            }
            
        ]
    }



])

export default router;