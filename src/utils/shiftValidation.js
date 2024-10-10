
const shiftValidation = ({ odontologoId, pacienteId, fechaHora }, status) => {
    const errors = {};
  
    // Check if there are error messages for odontologoId, pacienteId, or fechaHora
    if (odontologoId) {
      errors.odontologoId = 'Deben especificarse los datos del odontologo';
    }
    if (pacienteId) {
      errors.pacienteId = 'Deben especificarse los datos del paciente';
    }
    if (fechaHora) {
      errors.fechaHora = 'Debe especificarse la fecha y hora del turno';
    }
    if (status) {
      errors.status = status;
    }
  
    return errors;
  };
  
   

export default shiftValidation;
