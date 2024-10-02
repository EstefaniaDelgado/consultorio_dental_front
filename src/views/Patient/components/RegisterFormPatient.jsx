import { useNavigate } from "react-router-dom";
import { useState } from "react";
import patientService from "@services/patientService";
import { patientValidationFront } from "@utils/patientValidationFront";
import { homeValidationFront } from "@utils/patientValidationFront";
import { toast, ToastContainer } from "react-toastify";
const RegisterFormPatient = () => {
  const [patientInputs, setPatientInputs] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fechaIngreso: "",
    domicilioEntradaDto: {},
  });
  const [homeInputs, setHomeInputs] = useState({
    calle: "",
    numero: "",
    localidad: "",
    provincia: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleOnChangePatientInputs = (e) => {
    setPatientInputs({
      ...patientInputs,
      [e.target.name]: e.target.value,
    });
    setError(
      patientValidationFront({
        ...patientInputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleOnChangeHomeInputs = (e) => {
    setHomeInputs({
      ...homeInputs,
      [e.target.name]: e.target.value,
    });
    setError(
      homeValidationFront({
        ...homeInputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const response = await patientService.postPatient(patientInputs);

    if (response.status) {
      setError(response);
    } else if (!response.status) {
      setPatientInputs({
        nombre: "",
        apellido: "",
        dni: "",
        fechaIngreso: "",
        domicilioEntradaDto: {},
      });
      setError({});
      toast("Paciente registrado exitosamente!", {
        position: "top-right",
        type: "success",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/listar-pacientes");
      }, 2000);
    }
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-2">
          <div className="relative">
            <label>
              Nombre
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangePatientInputs}
                name="nombre"
                value={patientInputs.nombre}
                placeholder="Juan"
              />
            </label>
            <span className="text-red-400 text-sm absolute bottom-0 translate-y-full left-0">
              {error.nombre ? error.nombre : null}
            </span>
          </div>
          <div className="relative">
            <label>
              Apellido
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangePatientInputs}
                name="apellido"
                value={patientInputs.apellido}
                placeholder="Perez"
              />
            </label>
            <span className="text-red-400 text-sm absolute bottom-0 translate-y-full left-0">
              {error.apellido ? error.apellido : null}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="relative">
            <label>
              DNI
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangePatientInputs}
                name="dni"
                value={patientInputs.dni}
                placeholder="12345678"
              />
            </label>
            <span className="text-red-400 text-sm absolute bottom-0 translate-y-full left-0">
              {error.dni ? error.dni : null}
            </span>
          </div>
          <div className="relative">
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
          <div className="relative">
            <label>
              Calle
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangeHomeInputs}
                name="calle"
                value={homeInputs.calle}
                placeholder="Calle Nueva"
              />
            </label>
            <span className="text-red-400 text-sm absolute bottom-0 translate-y-full left-0">
              {error.calle ? error.calle : null}
            </span>
          </div>
          <div className="relative">
            <label>
              Localidad
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangeHomeInputs}
                name="localidad"
                value={homeInputs.localidad}
                placeholder="Central"
              />
            </label>
            <span className="text-red-400 text-sm absolute bottom-0 translate-y-full left-0">
              {error.localidad ? error.localidad : null}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="relative">
            <label>
              Número
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangeHomeInputs}
                name="numero"
                value={homeInputs.numero}
                placeholder="1234"
              />
            </label>
            <span className="text-red-400 text-sm absolute bottom-0 translate-y-full left-0">
              {error.numero ? error.numero : null}
            </span>
          </div>
          <div className="relative">
            <label>
              Provincia
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangeHomeInputs}
                name="provincia"
                value={homeInputs.provincia}
                placeholder="Bogotá"
              />
            </label>
            <span className="text-red-400 text-sm absolute bottom-0 translate-y-full left-0">
              {error.provincia ? error.provincia : null}
            </span>
          </div>
        </div>
        <button
          disabled={
            error.nombre ||
            error.apellido ||
            error.dni ||
            error.calle ||
            error.localidad ||
            error.numero ||
            error.provincia
          }
          type="submit"
          className="bg-robineggblue p-3 rounded-lg text-white w-1/2 mx-auto m-2 min-w-48"
        >
          Enviar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterFormPatient;
