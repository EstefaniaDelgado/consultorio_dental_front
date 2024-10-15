import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import dentistValidationFront from '../../../utils/dentistValidationFront';
import dentistService from '../../../services/dentistService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateDentist = ({ open, handleOpen, dentist, setDentists }) => {
  console.log('dentista', dentist);
  const [inputs, setInputs] = useState({
    nombre: '',
    apellido: '',
    matricula: '',
    genero: '',
  });

  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (dentist) {
      setInputs({
        nombre: dentist.nombre || '',
        apellido: dentist.apellido || '',
        matricula: dentist.matricula || '',
        genero: dentist.genero || '',
      });
    }
  }, [dentist]);

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
    setIsLoading(true);
    try {
      const response = await dentistService.updateDentist(inputs, dentist.id);
      if (response.status) {
        setError(response);
      } else {
        handleOpen();
        //actualizar lista
        const getCurrentList = await dentistService.getDentists();
        setDentists([...getCurrentList]);
      }
    } catch (error) {
      console.log('Error al actualizar el dentista:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    setError({});
    handleOpen();
  };

  return (
    <>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <form onSubmit={handleSubmitForm}>
          <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start justify-center">
              <p className="text-[28px] text-robineggblue font-semibold tracking-tighter relative flex items-center pl-8">
                Actualizar Datos
                <span className="absolute left-0 w-4 h-4 bg-robineggblue rounded-full"></span>
                <span className="absolute left-0 w-4 h-4 bg-robineggblue rounded-full animate-ping"></span>
              </p>
            </DialogHeader>
            {/* Close Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <DialogBody>
            <div className="flex flex-col  w-full">
              <label className="relative w-full">
                Nombre
                <input
                  type="text"
                  className="w-full text-black p-2 pb-2 border border-robineggblue rounded-md outline-none"
                  value={inputs.nombre}
                  name="nombre"
                  onChange={handleOnChangeInputs}
                />
              </label>
              <span className="text-red-400">
                {error.nombre ? error.nombre : null}
              </span>

              <label className="relative">
                Apellido
                <input
                  type="text"
                  className="w-full p-2 pb-2 border border-robineggblue text-black rounded-md outline-none"
                  onChange={handleOnChangeInputs}
                  name="apellido"
                  value={inputs.apellido}
                />
                <span className="text-red-400 mb-2">
                  {error.apellido ? error.apellido : null}
                </span>
              </label>

              <label className="relative ">
                Matricula
                <input
                  type="number"
                  className="w-full p-2 pb-2 border border-robineggblue text-black rounded-md outline-none"
                  onChange={handleOnChangeInputs}
                  name="matricula"
                  value={inputs.matricula}
                />
                <span className="text-red-400">
                  {error.matricula ? error.matricula : null}
                </span>
              </label>
              <div className="grid grid-cols-1  gap-6 w-full">
                <div className="relative w-full">
                  <fieldset className="flex justify-around border border-robineggblue p-2 rounded-md">
                    <legend>Selecciona el género:</legend>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="masculino"
                        name="genero"
                        checked={inputs.genero === 'MASCULINO'}
                        value="MASCULINO"
                        onChange={handleOnChangeInputs}
                      />
                      <label htmlFor="masculino">Masculino</label>
                    </div>
                    <div className="flex items-center  gap-2">
                      <input
                        type="radio"
                        id="femenino"
                        name="genero"
                        checked={inputs.genero === 'FEMENINO'}
                        value="FEMENINO"
                        onChange={handleOnChangeInputs}
                      />
                      <label htmlFor="femenino">Femenino</label>
                    </div>
                  </fieldset>
                  <span className="text-red-400">
                    {error.genero ? error.genero : null}
                  </span>
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2 ">
            <Button className="bg-spacecadet" onClick={handleCancelClick}>
              Cancelar
            </Button>
            <Button
              type="submit"
              loading={isLoading}
              disabled={
                !inputs.nombre ||
                !inputs.apellido ||
                !inputs.matricula ||
                error.nombre ||
                error.apellido ||
                error.matricula
              }
              className="bg-robineggblue"
            >
              Actualizar
            </Button>
          </DialogFooter>
        </form>
        <ToastContainer />
      </Dialog>
    </>
  );
};

export default UpdateDentist;
