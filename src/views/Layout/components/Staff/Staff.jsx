import { useEffect, useState } from "react";
import CardStaff from "./components/CardStaff";
import dentistService from "@/services/dentistService";
import Spinner from "@/components/Spinner";

const Staff = () => {
  const [dentists, setDentists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const staff = () => {
    const dentistsSlice = dentists.slice(0, 4);
    return dentistsSlice.map(({ nombre, apellido, matricula }) => (
      <CardStaff key={matricula} nombre={nombre} apellido={apellido} />
    ));
  };

  return (
    <div className="text-center w-full my-8">
      <h2 className="text-robineggblue font-extrabold">STAFF</h2>
      <h2 className="text-spacecadet dark:text-white font-bold text-4xl mt-4 mb-8">
        Conozca a nuestros especialistas
      </h2>
      <div className="flex relative w-full justify-evenly items-center lg:justify-between flex-wrap gap-4  py-4">
        {isLoading ? (
          <Spinner />
        ) : !dentists.length ? (
          <p className="absolute inset-0 flex items-center justify-center text-center text-spacecadet dark:text-white text-xl lg:text-2xl">
            Proximamente!
          </p>
        ) : (
          staff()
        )}
      </div>
    </div>
  );
};

export default Staff;
