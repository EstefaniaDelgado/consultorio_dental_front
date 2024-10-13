import { useEffect, useState } from "react";
import {
  homeValidationFront,
  isButtonDisabled,
  patientValidationFront,
} from "@/utils/patientValidationFront";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import patientService from "@services/patientService";
import { Button, Dialog } from "@material-tailwind/react";

const UpdatePatient = ({ isOpen, handleOpen, patient, setPatients }) => {
  const [patientInputs, setPatientInputs] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    genero: "",
    fechaIngreso: "",
  });
  const [homeInputs, setHomeInputs] = useState({
    calle: "",
    numero: "",
    localidad: "",
    provincia: "",
  });
  const [error, setError] = useState({});

  useEffect(() => {
    if (patient) {
      setPatientInputs({
        nombre: patient.nombre || "",
        apellido: patient.apellido || "",
        dni: patient.dni || "",
        genero: patient.genero || "",
        fechaIngreso: patient.fechaIngreso || "",
      });
      setHomeInputs({
        calle: patient.domicilioSalidaDto?.calle || "",
        numero: patient.domicilioSalidaDto?.numero || "",
        localidad: patient.domicilioSalidaDto?.localidad || "",
        provincia: patient.domicilioSalidaDto?.provincia || "",
      });
    }
  }, [patient]);

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

    try {
      const response = await patientService.updatePatient(
        patient.id,
        patientInputs
      );

      if (response.status) {
        setError(response);
      } else {
        //actualizar lista de pacientes
        const getCurrentList = await patientService.getPatients();
        toast("Paciente actualizado exitosamente!", {
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
        setPatients([...getCurrentList]);
        setTimeout(() => {
          handleOpen();
        }, 2000);
      }
    } catch (error) {
      console.log("Error al actualizar paciente", error);
    }
  };

  const handleCancelClick = () => {
    setError({});
    handleOpen();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.type === "keydown" && e.key === "Escape") {
        setError({});
      }
    };

    const handleClickOutside = (e) => {
      if (!e.target.classList.contains("form-container")) {
        setError({});
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Dialog
      open={isOpen}
      handler={handleOpen}
      className="rounded-2xl overflow-y-scroll h-4/5 lg:h-auto form-container max-h-[95%] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100"
    >
      <form
        className="relative flex flex-col gap-4 shadow-xl p-8 rounded-2xl bg-white dark:bg-gradient-to-r from-spacecadet to-spacecadetlow dark:text-white border border-robineggblue dark:border-none w-full"
        onSubmit={handleSubmitForm}
      >
        <div className="flex justify-center items-center gap-2">
          <div className="relative w-8 h-8">
            <span className="absolute left-2 top-2 w-4 h-4 bg-robineggblue rounded-full"></span>
            <span className="absolute left-2 top-2 w-4 h-4 bg-robineggblue rounded-full animate-ping"></span>
          </div>
          <h1 className="relative text-center text-robineggblue text-3xl font-semibold">
            Actualizar Paciente
          </h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="right-4 top-4 h-5 w-5 absolute cursor-pointer transform hover:scale-110 duration-300"
          onClick={handleCancelClick}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>

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
                className="w-full p-3 border border-robineggblue rounded-md outline-none dark:text-black"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  checked={patientInputs.genero === "MASCULINO"}
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
                  checked={patientInputs.genero === "FEMENINO"}
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
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <Button
            className="bg-gradient-to-r from-spacecadetlow to-spacecadet py-4 rounded-lg text-white w-full mt-3"
            onClick={() => handleCancelClick()}
          >
            Cancelar
          </Button>
          <Button
            disabled={isButtonDisabled(error, patientInputs, homeInputs)}
            type="submit"
            className={`bg-robineggblue py-4 rounded-lg text-white w-full mt-3 ${
              isButtonDisabled(error, patientInputs, homeInputs)
                ? "cursor-default"
                : "cursor-pointer"
            }`}
          >
            Enviar
          </Button>
        </div>
      </form>
      <ToastContainer />
    </Dialog>
  );
};

export default UpdatePatient;
