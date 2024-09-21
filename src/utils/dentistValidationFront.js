const dentistValidationFront = ({ nombre, apellido, matricula }) => {
  let errors = {};

  if (!nombre.length) {
    errors.nombre = '*El nombre es requerido';
  }
  if (!apellido.length) {
    errors.apellido = '*El apellido es requerido';
  }
  if (!matricula.toString().length) {
    errors.matricula = '*La matricula es requerida';
  }

  return errors;
};

export default dentistValidationFront;
