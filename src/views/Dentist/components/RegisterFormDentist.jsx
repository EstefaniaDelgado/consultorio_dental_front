import { useState } from 'react';
import dentistService from '../../../services/dentistService';
import dentistValidationFront from '../../../utils/dentistValidationFront';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterFormDentist = () => {
  const [inputs, setInputs] = useState({
    nombre: '',
    apellido: '',
    matricula: '',
  });

  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleOnChangeInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setError(
      dentistValidationFront({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
   
    const response = await dentistService.postDentist(inputs);

    if (response.status) {
      setError(response);
    } else if (!response.status) {
      setInputs({
        nombre: '',
        apellido: '',
        matricula: '',
      });
      toast('Odontologo registrado exitosamente!', {
        position: "top-right",
        type:'success',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setTimeout(() => {
        navigate('/listar-odontologos');
      }, 2000);
    }
  };

  return (
    <div className="my-10 w-full flex justify-center items-center m-3 ">
      {/* Form */}
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-2 max-w-[350px] bg-white p-5 rounded-2xl relative shadow-2xl border border-lightgray "
      >
        <p className="text-[28px] text-royalblue font-semibold tracking-tighter relative flex items-center pl-8">
          Registrar Odontologo
          <span className="absolute left-0 w-4 h-4 bg-royalblue rounded-full"></span>
          <span className="absolute left-0 w-4 h-4 bg-royalblue rounded-full animate-ping"></span>
        </p>
        <p className="text-gray-600 text-sm">Ingresa los siguientes datos:</p>

        <div className="flex flex-col  w-full">
          <label className="relative w-full">
            Nombre
            <input
              placeholder="Marlón Daniel"
              type="text"
              className="w-full p-2 pb-4 border border-gray-300 rounded-md outline-none"
              value={inputs.nombre}
              name="nombre"
              onChange={handleOnChangeInputs}
            />
          </label>
          <span className="text-red-400">
            {error.nombre ? error.nombre : null}
          </span>
        </div>

        <label className="relative">
          Apellido
          <input
            placeholder="Peréz Sanchez"
            type="text"
            className="w-full p-2 pb-4 border border-gray-300 rounded-md outline-none"
            onChange={handleOnChangeInputs}
            name="apellido"
            value={inputs.apellido}
          />
          <span className="text-red-400">
            {error.apellido ? error.apellido : null}
          </span>
        </label>

        <label className="relative">
          Matricula
          <input
            placeholder="1234"
            type="number"
            className="w-full p-2 pb-4 border border-gray-300 rounded-md outline-none"
            onChange={handleOnChangeInputs}
            name="matricula"
            value={inputs.matricula}
          />
          <span className="text-red-400">
            {error.matricula ? error.matricula : null}
          </span>
        </label>

        <button
          disabled={
            !inputs.nombre ||
            !inputs.apellido ||
            !inputs.matricula ||
            error.matricula ||
            error.nombre ||
            error.apellido
          }
          type="submit"
          className="w-full p-2 text-white bg-royalblue rounded-lg hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterFormDentist;
