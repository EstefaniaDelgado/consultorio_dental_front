export const patientValidationFront = ({ nombre, apellido, dni }) => {
  const errors = {};

  if (!nombre) errors.nombre = "El nombre es requerido";
  if (!apellido) errors.apellido = "El apellido es requerido";
  if (!dni) errors.dni = "El dni es requerido";

  return errors;
};

export const homeValidationFront = ({ calle, numero, localidad, provincia }) => {
  const errors = {};

  if (!calle) errors.calle = "La calle es requerida";
  if (!numero) errors.numero = "El numero es requerido";
  if (!localidad) errors.localidad = "La localidad es requerida";
  if (!provincia) errors.provincia = "La provincia es requerida";

  return errors;
};
