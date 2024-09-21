const dentistValidationBackend = (
  { nombre, apellido, mensaje, matricula },
  status
) => {
  let errors = {};

  
  const formatMessage = mensaje ? mensaje.substring(22) : null;

  if (nombre?.length) {
    errors.nombre = nombre;
  }
  if (apellido?.length) {
    errors.apellido = apellido;
  }
  if (matricula?.length) {
    errors.matricula = matricula;
  }
  if (mensaje?.length) {
    errors.matricula = formatMessage;
  }
  if (status) {
    errors.status = status;
  }

  return errors;
};

export default dentistValidationBackend;
