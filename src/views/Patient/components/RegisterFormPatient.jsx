import { useState } from "react";
const RegisterFormPatient = () => {
  const [patientInputs, setPatientInputs] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fechaIngreso: "",
  });
  const [homeInputs, setHomeInputs] = useState({
    calle: "",
    numero: "",
    localidad: "",
    provincia: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

  const handleOnChangePatientInputs = (e) => {
    setPatientInputs({
      ...patientInputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeHomeInputs = (e) => {
    setHomeInputs({
      ...homeInputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
        className="flex flex-col gap-4 shadow-xl p-8 rounded-2xl bg-white dark:bg-gradient-to-r from-spacecadet to-spacecadetlow dark:text-white border border-robineggblue dark:border-none"
        onSubmit={handleSubmitForm}
      >
        <div className="flex justify-center items-center gap-2">
          <div className="relative w-8 h-8">
            <span className="absolute left-2 top-2 w-4 h-4 bg-robineggblue rounded-full"></span>
            <span className="absolute left-2 top-2 w-4 h-4 bg-robineggblue rounded-full animate-ping"></span>
          </div>
          <h1 className="relative text-center text-robineggblue text-3xl font-semibold">
            Registrar Paciente
          </h1>
        </div>

        {/* Datos personales */}
        <h2 className="text-robineggblue font-semibold text-lg">
          Datos Personales
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div>
            <label>
              Nombre
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                onChange={handleOnChangePatientInputs}
                name="nombre"
                value={patientInputs.nombre}
                placeholder="Juan"
              />
            </label>
          </div>
          <div>
            <label>
              Apellido
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                onChange={handleOnChangePatientInputs}
                name="apellido"
                value={patientInputs.apellido}
                placeholder="Perez"
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div>
            <label>
              DNI
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                onChange={handleOnChangePatientInputs}
                name="dni"
                value={patientInputs.dni}
                placeholder="12345678"
              />
            </label>
          </div>
          <div>
            <label>
              Fecha de ingreso
              <input
                type="datetime-local"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangePatientInputs}
                name="fechaIngreso"
                value={patientInputs.fechaIngreso}
              />
            </label>
          </div>
        </div>

        {/* Datos de domicilio del paciente */}
        <h2 className="mt-2 text-robineggblue font-semibold text-lg">
          Datos de Domicilio
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div>
            <label>
              Calle
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                onChange={handleOnChangeHomeInputs}
                name="calle"
                value={homeInputs.calle}
                placeholder="Calle Nueva"
              />
            </label>
          </div>
          <div>
            <label>
              Localidad
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                onChange={handleOnChangeHomeInputs}
                name="localidad"
                value={homeInputs.localidad}
                placeholder="Central"
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div>
            <label>
              Número
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                onChange={handleOnChangeHomeInputs}
                name="numero"
                value={homeInputs.numero}
                placeholder="1234"
              />
            </label>
          </div>
          <div>
            <label>
              Provincia
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none"
                onChange={handleOnChangeHomeInputs}
                name="provincia"
                value={homeInputs.provincia}
                placeholder="Bogotá"
              />
            </label>
          </div>
        </div>
        <button className="bg-robineggblue p-3 rounded-lg text-white w-1/2 mx-auto m-2 min-w-48">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default RegisterFormPatient;
