import { apiPatients } from "./index";
import {
  backendValidationHome,
  backendValidationPatient,
} from "../utils/patientValidationBackend";

const patientService = {
  postPatient: async (data) => {
    try {
      const response = await apiPatients.post("/registrar", data);
      console.log("RESPONSE BACKEND: ", response);
      return response.data;
    } catch (error) {
      console.log("ERROR RESPONSE: ", error.response)
      if (error.status >= 400 && error.status < 500) {
        let errors = backendValidationPatient(
          error.response.data,
          error.status
        );
        errors = {
          ...errors,
          ...backendValidationHome(error.response.data, error.status),
        };
        return errors;
      }
      console.log("Error al registrar paciente", error);
    }
  },

  getPatients: async () => {
    try {
      const response = await apiPatients.get("/listar");
      return response.data;
    } catch (error) {
      console.log("Error al obtener pacientes", error);
    }
  },

  getPatient: async (id) => {
    try {
      const response = await apiPatients.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error al obtener paciente", error);
    }
  },

  updatePatient: async (id, data) => {
    try {
      const response = await apiPatients.put(`/actualizar/${id}`, data);
      return response.data;
    } catch (error) {
      if (error.status >= 400 && error.status < 500) {
        const errors = backendValidationPatient(
          error.response.data,
          error.status
        );
        return errors;
      }
      console.log("Error al actualizar paciente", error);
    }
  },

  deletePatient: async (id) => {
    try {
      const response = await apiPatients.delete(`/eliminar/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error al eliminar paciente", error);
    }
  },
};

export default patientService;
