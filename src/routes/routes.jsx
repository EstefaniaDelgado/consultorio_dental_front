import { createBrowserRouter } from "react-router-dom";
import Layout from "../views/Layout/Layout";
import Shift from "../views/Shift/Shift";
import Dentist from "../views/Dentist/Dentist";
import Patient from "../views/Patient/Patient";
import ListDentists from "../views/Dentist/components/ListDentists";
import Home from "../views/Layout/components/Home/Home";
import ListPatients from "../views/Patient/components/ListPatient";
import ListShifts from "../views/Shift/components/ListShifts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "turnos",
        element: <Shift />,
      },
      {
        path: "odontologos",
        element: <Dentist />,
      },
      {
        path: "listar-odontologos",
        element: <ListDentists />,
      },
      {
        path: "pacientes",
        element: <Patient />,
      },
      {
        path: "listar-pacientes",
        element: <ListPatients />,
      },
      {
        path: "turnos",
        element: <Shift />,
      },
      {
        path:"listar-turnos",
        element:<ListShifts/>
      }
    ],
  },
]);

export default router;
