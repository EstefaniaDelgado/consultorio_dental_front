
const shiftValidation = ({ odontologoId, pacienteId, fechaHora }, status) => {
    const errors = {};
  
    if (odontologoId?.length) {
      errors.odontologoId = 'Deben especificarse los datos del odontologo';
    }
    if (pacienteId?.length) {
      errors.pacienteId = 'Deben especificarse los datos del paciente';
    }
    if (fechaHora?.length) {
      errors.fechaHora = 'Debe especificarse la fecha y hora del turno';
    }
    if (status) {
      errors.status = status;
    }
  
    return errors;
  };
  
   

export default shiftValidation;
