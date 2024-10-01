import { useEffect } from "react";
import { useState } from "react";
import dentistService from "../../../services/dentistService";
import { Typography } from "@material-tailwind/react";
import EditIcon from "../../../assets/edit-icon.svg";
import UpdateDentist from "./UpdateDentist";
import DeleteDentist from "./DeleteDentist";
import Asistent from "@/assets/Asistent.png";

const ListDentists = () => {
  const [dentists, setDentists] = useState([]);

  const [selectedDentist, setSelectedDentist] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const api = async () => {
      try {
        const response = await dentistService.getDentists();
        setDentists([...response]);
      } catch (error) {
        console.error("Error fetching dentists:", error);
      } finally {
        setIsLoading(false);
      }
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
              <DeleteDentist id={dentist.id} setDentists={setDentists} />
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

      <section className="relative w-full my-8 mb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {isLoading ? (
          /* From Uiverse.io by devAaus */
          <div class="absolute inset-0 flex-col gap-4 w-full flex items-center justify-center">
            <div class="w-14 h-14 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div class="w-12 h-12 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-spacecadet rounded-full"></div>
            </div>
          </div>
        ) : !dentists.length ? (
          <p className="absolute inset-0 flex items-center justify-center text-center text-spacecadet text-xl lg:text-2xl">
            No hay registros aún!
          </p>
        ) : (
          renderList()
        )}
      </section>

      <UpdateDentist
        dentist={selectedDentist}
        open={open}
        handleOpen={handleOpen}
        setDentists={setDentists}
      />
    </>
  );
};

export default ListDentists;
