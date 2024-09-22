import { createBrowserRouter } from "react-router-dom";
import Layout from "../views/Layout/Layout";
import Shift from "../views/Shift/Shift"
import Dentist from "../views/Dentist/Dentist";
import Patient from "../views/Patient/Patient";
import ListDentists from "../views/Dentist/components/ListDentists";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/turnos",
                element:<Shift/>
            },
            {
                path:"/odontologos",
                element:<Dentist/>,
            },
            {
                path:"listar-odontologos",
                element:<ListDentists/>
            },
            {
                path:"/pacientes",
                element:<Patient/>
            },
            {
                path:"/turnos",
                element:<Shift/>
            }
        ]
    }
]);

export default router;