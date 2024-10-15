import { useState, useEffect } from 'react';
import shiftService from '../../../services/shiftService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const FormRegister = ({ selectedDentist, selectedPatient }) => {
  const [shiftRegister, setShiftRegister] = useState({
    pacienteId: null,
    odontologoId: null,
    fechaHora: '',
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
  }, [selectedPatient]);

  useEffect(() => {
    if (selectedDentist && selectedDentist.id) {
      setShiftRegister((prev) => ({
        ...prev,
        odontologoId: selectedDentist.id,
      }));
    }
  }, [selectedDentist]);

  const handleDateChange = (e) => {
    setShiftRegister((prev) => ({
      ...prev,
      fechaHora: e.target.value.replace('T', ' '),
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const fetch = async () => {
      try {
        const response = await shiftService.postShift(shiftRegister);
        if (response.status) {
          setErrors(response);
        } else if (!response.status) {
          toast('Turno registrado exitosamente!', {
            position: 'top-right',
            type: 'success',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setTimeout(() => {
            navigate('/listar-turnos');
          }, 2000);
        }
      } catch (error) {
        setErrors(error);
      }
    };
    fetch();
  };

  return (
    <div className="my-10 w-full flex justify-center items-center m-3 ">
      {/* Form */}
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-2 max-w-[350px] bg-white dark:bg-gradient-to-r from-spacecadet to-spacecadetlow dark:text-white  p-5 rounded-2xl relative shadow-2xl border border-robineggblue  "
      >
        <p className="text-[28px] text-robineggblue font-semibold tracking-tighter relative flex items-center pl-8">
          Registrar Turno
          <span className="absolute left-0 w-4 h-4 bg-robineggblue rounded-full"></span>
          <span className="absolute left-0 w-4 h-4 bg-robineggblue rounded-full animate-ping"></span>
        </p>
        <p className="text-gray-600 text-sm dark:text-white">
          Datos para la creacion de un turno:
        </p>

        <div className="flex flex-col  w-full">
          <label className="relative w-full">
            Datos del Paciente
            <p
              className={`${
                Object.keys(selectedPatient).length
                  ? 'border-robineggblue border-2 my-2'
                  : 'border-none'
              }`}
            >
              {Object.keys(selectedPatient).length ? (
                <>
                  {selectedPatient.nombre} {selectedPatient.apellido}{' '}
                  {selectedPatient.dni}
                </>
              ) : (
                '------------'
              )}
            </p>
          </label>
          <span className="text-red-400">
            {errors.pacienteId ? errors.pacienteId : null}
          </span>
        </div>

        <label className="relative">
          Datos del Odontologo
          <p
            className={`${
              Object.keys(selectedDentist).length
                ? 'border-robineggblue border-2 my-2'
                : 'border-none'
            }`}
          >
            {Object.keys(selectedDentist).length ? (
              <>
                {selectedDentist.nombre} {selectedDentist.apellido}{' '}
                {selectedDentist.matricula}
              </>
            ) : (
              '------------'
            )}
          </p>
          <span className="text-red-400">
            {errors.odontologoId ? errors.odontologoId : null}
          </span>
        </label>

        <label className="relative">
          Fecha y Hora
          <input
            type="datetime-local"
            className="w-full p-2 pb-4 border border-gray-300 text-black rounded-md outline-none"
            onChange={handleDateChange}
            value={shiftRegister.fechaHora}
          />
          <span className="text-red-400">
            {errors.fechaHora ? errors.fechaHora : null}
          </span>
        </label>

        <button
          //   disabled={
          //  Object.keys(errors).length
          // }
          type="submit"
          className="w-full p-2 text-white bg-robineggblue rounded-lg hover:bg-light-blue-500 transition"
        >
          Crear Turno
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormRegister;
