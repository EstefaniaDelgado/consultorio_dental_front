import { useState, useEffect } from "react";
import shiftService from "@/services/shiftService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FormUpdate = ({
  selectedDentist,
  selectedPatient,
  selectedFechaHora,
  shiftId,
}) => {
  const [shiftRegister, setShiftRegister] = useState({
    pacienteId: null,
    odontologoId: null,
    fechaHora: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Actualiza el estado cada vez que se selecciona un paciente o dentista
  useEffect(() => {
    if (selectedPatient && selectedPatient.id) {
      setShiftRegister((prev) => ({
        ...prev,
        pacienteId: selectedPatient.id,
      }));
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      pacienteId: null,
    }));
  }, [selectedPatient]);

  useEffect(() => {
    if (selectedDentist && selectedDentist.id) {
      setShiftRegister((prev) => ({
        ...prev,
        odontologoId: selectedDentist.id,
      }));
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      odontologoId: null,
    }));
  }, [selectedDentist]);

  useEffect(() => {
    if (selectedFechaHora.length) {
      const currentFechaHora = selectedFechaHora.slice(0, 16);

      setShiftRegister((prev) => ({
        ...prev,
        fechaHora: currentFechaHora,
      }));
    }
  }, [selectedFechaHora]);

  const handleCancelClick = () => {
    navigate("/listar-turnos");
  };

  const handleDateChange = (e) => {
    setShiftRegister((prev) => ({
      ...prev,
      fechaHora: e.target.value.replace("T", " "),
    }));
    if (shiftRegister.fechaHora) {
      setErrors({ ...errors, fechaHora: null });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const fetch = async () => {
      try {
        const response = await shiftService.updateShift(shiftId, shiftRegister);
        if (response.status) {
          setErrors(response);
        } else if (!response.status) {
          toast("Turno registrado exitosamente!", {
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
            navigate("/listar-turnos");
          }, 2000);
        }
      } catch (error) {
        setErrors(error);
      }
    };
    fetch();
  };

  return (
    <div className="my-10 w-full flex justify-center items-center mt-16 mb-3">
      {/* Form */}
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-2 max-w-[350px] bg-white dark:bg-gradient-to-r from-spacecadet to-spacecadetlow p-5 rounded-2xl relative shadow-2xl border border-robineggblue dark:border-none"
      >
        <p className="text-[28px] text-robineggblue font-semibold tracking-tighter relative flex items-center pl-8 mx-auto">
          Actualizar Turno
          <span className="absolute left-0 w-4 h-4 bg-robineggblue rounded-full"></span>
          <span className="absolute left-0 w-4 h-4 bg-robineggblue rounded-full animate-ping"></span>
        </p>
        <p className="text-gray-600 dark:text-white text-sm">
          Datos para actualizar el turno:
        </p>

        <div className="flex flex-col  w-full">
          <label className="relative w-full dark:text-white">
            Datos del Paciente
            <input
              disabled={true}
              type="text"
              className="w-full p-2 border border-robineggblue rounded-md outline-none dark:text-black dark:bg-white"
              value={
                selectedPatient
                  ? `${selectedPatient.nombre || ""} ${
                      selectedPatient.apellido || ""
                    } ${selectedPatient.dni || ""}`
                  : ""
              }
            />
          </label>
          <span className="text-red-400">
            {errors.pacienteId ? errors.pacienteId : null}
          </span>
        </div>

        <label className="relative dark:text-white">
          Datos del Odontologo
          <input
            disabled={true}
            type="text"
            className="w-full p-2 border border-robineggblue rounded-md outline-none dark:text-black dark:bg-white"
            value={
              selectedDentist
                ? `${selectedDentist.nombre || ""} ${
                    selectedDentist.apellido || ""
                  } ${selectedDentist.matricula || ""}`
                : ""
            }
          />
          <span className="text-red-400">
            {errors.odontologoId ? errors.odontologoId : null}
          </span>
        </label>

        <label className="relative dark:text-white">
          Fecha y Hora
          <input
            type="datetime-local"
            className="w-full p-2 border border-robineggblue rounded-md outline-none text-black"
            onChange={handleDateChange}
            value={shiftRegister.fechaHora}
          />
          <span className="text-red-400">
            {errors.fechaHora ? errors.fechaHora : null}
          </span>
        </label>
        <div>
          <button
            className="w-full p-2 text-white bg-spacecadetlow rounded-lg transition my-2"
            onClick={handleCancelClick}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="w-full p-2 text-white bg-robineggblue rounded-lg hover:bg-light-blue-500 transition"
          >
            Actualizar Turno
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormUpdate;
