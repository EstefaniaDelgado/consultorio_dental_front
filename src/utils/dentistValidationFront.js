const dentistValidationFront = ({ nombre, apellido, matricula,genero }) => {
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
  if(!genero?.length){
    errors.genero ='*Debes elegir una opción de género'
  }
 
  return errors;
};

export default dentistValidationFront;
