import { apiShifts } from '.';
import shiftValidation from '../utils/shiftValidation';

const shiftService = {
  postShift: async (data) => {
    try {
      const response = await apiShifts.post('/registrar', data);

      return response.data;
    } catch (error) {
      if (error.status >= 400 || error.status < 500) {
        return shiftValidation(error.response.data, error.status);
      }
      console.log('Hubo un error: ', error);
    }
  },

  getShifts: async () => {
    try {
      const response = await apiShifts.get('/listar');
      return response.data;
    } catch (error) {
      console.log('Hubo un error: ', error);
    }
  },
  updateShift: async (id, data) => {
    try {
      const response = await apiShifts.put(`/actualizar/${id}`, data);
      return response.data;
    } catch (error) {
      if (error.status >= 400 || error.status < 500) {
        return shiftValidation(error.response.data, error.status);
      }
      console.log('Hubo un error: ', error);
    }
  },
  deleteShift: async (id) => {
    try {
      const response = await apiShifts.delete(`/eliminar/${id}`);
      return response.data;
    } catch (error) {
      console.log('Hubo un error: ', error);
    }
  },
};

export default shiftService;
