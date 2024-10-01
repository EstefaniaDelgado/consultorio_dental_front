const backendValidationPatient = (
  { nombre, apellido, dni, fechaIngreso },
  status
) => {
  const errors = {};

  if (nombre?.length) {
    errors.nombre = nombre;
  }
  if (apellido?.length) {
    errors.apellido = apellido;
  }
  if (dni?.length) {
    errors.dni = dni;
  }
  if (fechaIngreso?.length) {
    errors.fechaIngreso = fechaIngreso;
  }
  if (status) {
    errors.status = status;
  }
  return errors;
};

export default backendValidationPatient;
