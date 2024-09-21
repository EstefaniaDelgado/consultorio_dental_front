import axios from "axios";

// const API_BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? import.meta.env.VITE_APP_API_URL
//     : import.meta.env.VITE_APP_URL_DEPLOYMENT;

// const API_BASE_URL = import.meta.env.VITE_APP_URL_DEPLOYMENT
// console.log(import.meta.env)
const API_BASE_URL = 'http://localhost:8080'


const createAxiosInstance = (baseURL) => {
  const api = axios.create({
    baseURL,
  });

  return api;
};

const apiDentist = createAxiosInstance(`${API_BASE_URL}/odontologos`);
const apiPatients = createAxiosInstance(`${API_BASE_URL}/pacientes`);
const apiShifts = createAxiosInstance(`${API_BASE_URL}/turnos`);


export { apiDentist, apiPatients, apiShifts };
