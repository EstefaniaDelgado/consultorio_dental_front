import { useEffect } from 'react';
import { useState } from 'react';
import dentistService from '../../../services/dentistService';
import { Typography } from '@material-tailwind/react';
import EditIcon from '../../../assets/edit-icon.svg';
import UpdateDentist from './UpdateDentist';
import DeleteDentist from './DeleteDentist';

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
      <div key={`dentist-${dentist.id}`} className="w-56 mx-auto h-full">
        <div className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl bg-white h-full border border-lightgray ">
          <div className="text-gray-500 group-hover:scale-105 transition-all ">
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
            <div className="px-3 flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
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
      </div>
    ));
  };

  return (
    <div>
      <Typography className="mx-3 my-10 text-[28px] text-royalblue text-center font-semibold ">
        Lista de Odontologos Registrados
      </Typography>

      <section className="my-4 mb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {!dentists?.length ? (
          <p className="row-span-2">No hay registros aun!</p>
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
    </div>
  );
};

export default ListDentists;
