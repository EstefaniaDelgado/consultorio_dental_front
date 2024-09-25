import { useEffect } from 'react';
import { useState } from 'react';
import dentistService from '../../../services/dentistService';
import { Typography } from '@material-tailwind/react';
import EditIcon from '../../../assets/edit-icon.svg';
import UpdateDentist from './UpdateDentist';
import DeleteDentist from './DeleteDentist';
import Asistent from '@/assets/Asistent.png';

const ListDentists = () => {
  const [dentists, setDentists] = useState([]);

  const [selectedDentist, setSelectedDentist] = useState({});

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const api = async () => {
      const response = await dentistService.getDentists();
      setDentists([...response]);
    };
    api();
  }, []);

  const handleOpen = (dentist) => {
    setSelectedDentist(dentist);
    setOpen(!open);
  };

  const renderList = () => {
    return dentists?.map((dentist) => (
      <div key={`dentist-${dentist.id}`} className="w-56 mx-auto h-full py-5">
        <article className="bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-[2rem] w-56 h-32 relative flex items-end justify-center">
          <figure className="bg-paleblue rounded-3xl w-1/3 h-20 mx-auto absolute -top-1/3  left-1/2 transform -translate-x-1/2">
            <img
              className="block mx-auto w-full h-full object-cover rounded-3xl"
              src={Asistent}
              alt="Asistente médico"
            />
          </figure>
          <div className="mt-12 mb-10 text-center">
            <h2 className="text-spacecadet font-semibold dark:text-robineggblue">
              {dentist.nombre} {dentist.apellido}
            </h2>
            <p className="text-primary dark:text-white">{dentist.matricula}</p>
          </div>
          <div className="flex items-center absolute gap-2 justify-evenly w-full mb-2">
            <div className="px-3 flex gap-3 text-2xl bg-spacecadet text-white p-1  rounded-full shadow-sm">
              <a className=" cursor-pointer">
                <img
                  onClick={() => handleOpen(dentist)}
                  src={EditIcon}
                  alt="Editar"
                />
              </a>
              <DeleteDentist id={dentist.id} />
            </div>
          </div>
        </article>
      </div>
    ));
  };

  return (
    <>
      <h2 className="text-robineggblue font-extrabold text-center">
        REGISTROS
      </h2>
      <h2 className="mt-4 mb-9 text-spacecadet text-2xl text-center font-extrabold md:text-4xl md:font-bold  ">
        NUESTROS ESPECIALISTAS
      </h2>

      <section className="w-full my-8 mb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {!dentists?.length ? (
          <p className="row-span-2 col-start-2">No hay registros aun!</p>
        ) : (
          renderList()
        )}
      </section>

      <UpdateDentist
        dentist={selectedDentist}
        open={open}
        handleOpen={handleOpen}
      />
      <DeleteDentist
        dentist={selectedDentist}
        open={open}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default ListDentists;

{
  /* <div key={`dentist-${dentist.id}`} className="w-56 mx-auto h-full">
<div className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl bg-white h-full border border-robineggblue  ">
  <div className="text-gray-500 group-hover:scale-105 transition-all  ">
    <img
      src={`https://ui-avatars.com/api/?name=${dentist.nombre}&size=100&rounded=true`}
      alt="avatar"
    />
  </div>
  <div className="group-hover:pb-10 transition-all duration-500 delay-200">
    <h1 className="font-semibold text-gray-700">
      {dentist.nombre} {dentist.apellido}
    </h1>
    <p className="text-gray-500 text-sm">{dentist.matricula}</p>
  </div>
  <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
    <div className="px-3 flex gap-3 text-2xl bg-robineggblue text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
      <a className="hover:scale-110 transition-all duration-500 delay-200 cursor-pointer">
        <img
          onClick={() => handleOpen(dentist)}
          src={EditIcon}
          alt="Editar"
        />
      </a>
      <DeleteDentist id={dentist.id} />
    </div>
  </div>
</div>
</div> */
}
