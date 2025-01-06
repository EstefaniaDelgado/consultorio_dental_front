import { useEffect, useState } from "react";
import CardStaff from "./components/CardStaff";
import dentistService from "@/services/dentistService";
import Spinner from "@/components/Spinner";
import defaultProfile from "@/assets/default-profile.svg";
import useAvatar from "../../../../Hooks/useAvatar";

const Staff = () => {
  const [dentists, setDentists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { femaleAvatars, maleAvatars, getAvatars } = useAvatar();

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

  useEffect(() => {
    const fetchAvatars = async () => {
      if (!femaleAvatars.length) await getAvatars("female");
      if (!maleAvatars.length) await getAvatars("male");
    };
    fetchAvatars();
  }, [femaleAvatars.length, maleAvatars.length, getAvatars]);

  const staff = () => {
    const dentistsSlice = dentists.slice(0, 4);
    return dentistsSlice.map((dentist, index) => {
      const imageSrc =
        dentist.genero === "FEMENINO"
          ? femaleAvatars[index] || defaultProfile
          : maleAvatars[index] || defaultProfile;

      return (
        <CardStaff
          key={dentist.matricula}
          nombre={dentist.nombre}
          apellido={dentist.apellido}
          image={imageSrc}
        />
      );
    });
  };

  return (
    <div className="text-center w-full my-8">
      <h2 className="text-robineggblue font-extrabold">STAFF</h2>
      <h2 className="text-spacecadet dark:text-white font-bold text-4xl mt-4 mb-8">
        Conozca a nuestros especialistas
      </h2>
      <div className="flex relative w-full justify-evenly items-center flex-wrap gap-4  py-4">
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
