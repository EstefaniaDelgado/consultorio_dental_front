import { useNavigate } from "react-router-dom";
import { useState } from "react";
import patientService from "@services/patientService";
import {
  isButtonDisabled,
  patientValidationFront,
} from "@utils/patientValidationFront";
import { homeValidationFront } from "@utils/patientValidationFront";
import { toast, ToastContainer } from "react-toastify";

const RegisterFormPatient = () => {
  const [patientInputs, setPatientInputs] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    genero: "",
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
    const name = e.target.name;
    const value = e.target.value;

    setPatientInputs({
      ...patientInputs,
      [name]: value,
    });
    setError(
      patientValidationFront({
        ...patientInputs,
        [name]: value,
      })
    );
  };

  const handleOnChangeHomeInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setHomeInputs({
      ...homeInputs,
      [name]: value,
    });
    setError(
      homeValidationFront({
        ...homeInputs,
        [name]: value,
      })
    );
  };

  const handleKeyDown = (event, inputValue) => {
    if (event.key === "ArrowDown" && inputValue <= 0) {
      event.preventDefault();
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    patientInputs.domicilioEntradaDto = homeInputs;

    const response = await patientService.postPatient(patientInputs);

    if (response.status) {
      setError(response);
    } else if (!response.status) {
      setPatientInputs({
        nombre: "",
        apellido: "",
        dni: "",
        genero: "",
        fechaIngreso: "",
        domicilioEntradaDto: {},
      });
      setHomeInputs({
        calle: "",
        numero: "",
        localidad: "",
        provincia: "",
      });
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
          <div className="relative">
            <label>
              DNI
              <input
                type="number"
                className="no-spin w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangePatientInputs}
                name="dni"
                value={patientInputs.dni}
                onKeyDown={(e) => handleKeyDown(e, patientInputs.dni)}
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
                type="date"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black"
                onChange={handleOnChangePatientInputs}
                name="fechaIngreso"
                value={patientInputs.fechaIngreso}
              />
            </label>
            <span className="text-red-400 text-sm absolute bottom-0 translate-y-full left-0">
              {error.fechaIngreso ? error.fechaIngreso : null}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative">
            <fieldset className="flex justify-around border border-robineggblue p-2 rounded-md">
              <legend>Selecciona el género:</legend>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="masculino"
                  name="genero"
                  value="MASCULINO"
                  onChange={handleOnChangePatientInputs}
                />
                <label htmlFor="masculino">Masculino</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="femenino"
                  name="genero"
                  value="FEMENINO"
                  onChange={handleOnChangePatientInputs}
                />
                <label htmlFor="femenino">Femenino</label>
              </div>
            </fieldset>
            <span className="text-red-400 text-sm absolute bottom-0 translate-y-full left-0">
              {error.genero ? error.genero : null}
            </span>
          </div>
        </div>

        {/* Datos de domicilio del paciente */}
        <h2 className="mt-2 text-robineggblue font-semibold text-lg">
          Datos de Domicilio
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
          <div className="relative">
            <label>
              Número
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md outline-none dark:text-black no-spin"
                onChange={handleOnChangeHomeInputs}
                name="numero"
                value={homeInputs.numero}
                placeholder="1234"
                onKeyDown={(e) => handleKeyDown(e, homeInputs.numero)}
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
          disabled={isButtonDisabled(error, patientInputs, homeInputs)}
          type="submit"
          className="bg-robineggblue p-3 rounded-lg text-white w-1/2 mx-auto mt-4 min-w-48"
        >
          Enviar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterFormPatient;
