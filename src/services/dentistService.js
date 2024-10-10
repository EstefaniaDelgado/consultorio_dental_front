import { apiDentist } from './index';
import dentistValidationBackend from '../utils/dentistValidationBackend';

const dentistService = {
  postDentist: async (data) => {
    try {
      const response = await apiDentist.post('/registrar', data);
      return response.data;
      
    } catch (error) {
      if (error.status >= 400 && error.status < 500) {
        const errors = dentistValidationBackend(
          error.response.data,
          error.status
        );
        return errors;
      }
      console.log('Hubo un error: ', error);
    }
  },

  getDentists: async () => {
    try {
      const response = await apiDentist.get('/listar');
      return response.data;
    } catch (error) {
      console.log('Hubo un error: ', error);
    }
  },

  updateDentist: async (data, id) => {
    try {
      const response = await apiDentist.put(`/actualizar/${id}`, data);
      return response.data;
    } catch (error) {
      if (error.status >= 400 && error.status < 500) {
        const errors = dentistValidationBackend(
          error.response.data,
          error.status
        );
        return errors;
      }
      console.log('Hubo un error: ', error);
    }
  },

  deleteDentist: async (id) => {
    try {
      const response = await apiDentist.delete(`/eliminar?id=${id}`);
      return response.data;
    } catch (error) {
      console.log('Hubo un error: ', error);
    }
  },
};

export default dentistService;
