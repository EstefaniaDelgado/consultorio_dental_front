export const backendValidationPatient = (
  { nombre, apellido, dni, genero, fechaIngreso, mensaje },
  status
) => {
  const errors = {};
  const mensajeError = mensaje ? mensaje.split(":")[1] : null;

  if (nombre?.length) {
    errors.nombre = nombre;
  }
  if (apellido?.length) {
    errors.apellido = apellido;
  }
  if (dni?.length) {
    errors.dni = dni;
  }
  if (mensaje?.length) {
    errors.dni = mensajeError;
  }
  if (genero?.length) {
    errors.genero = genero;
  }
  if (fechaIngreso?.length) {
    errors.fechaIngreso = fechaIngreso;
  }
  if (status) {
    errors.status = status;
  }
  return errors;
};

export const backendValidationHome = (
  { calle, numero, localidad, provincia },
  status
) => {
  const errors = {};
  if (calle?.length) {
    errors.calle = calle;
  }
  if (numero?.length) {
    errors.numero = numero;
  }
  if (localidad?.length) {
    errors.localidad = localidad;
  }
  if (provincia?.length) {
    errors.provincia = provincia;
  }
  if (status) {
    errors.status = status;
  }
  return errors;
};
