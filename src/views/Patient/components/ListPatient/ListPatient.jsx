import { useEffect, useState } from "react";
import { CardBody, Typography, Avatar } from "@material-tailwind/react";
import patientService from "@services/patientService";
import EditIcon from "@/assets/edit-icon.svg";
import Spinner from "@/components/Spinner";
import UpdatePatient from "../UpdatePatient";
import DeletePatient from "../DeletePatient";
import getImagesFromAPI from "@/services/getProfileImages";
import SearchPatient from "./components/SearchPatient";
import useAvatar from "../../../../Hooks/useAvatar";
import defaultProfile from "@/assets/default-profile.svg"

const ListPatients = () => {
  const [allPatients, setAllPatients] = useState();
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
 

  const {femaleAvatars, maleAvatars, getAvatars}=useAvatar();

  useEffect(()=>{
    const fetchAvatars = async () => {
      if (!femaleAvatars.length) await getAvatars('female');
      if (!maleAvatars.length) await getAvatars('male');
    };
    fetchAvatars();
  },[femaleAvatars.length, maleAvatars.length])

  

  useEffect(() => {
    const api = async () => {
      try {
        const response = await patientService.getPatients();
        response.sort((a, b) => a.fechaIngreso.localeCompare(b.fechaIngreso));
        setPatients(response);
        setAllPatients(response);
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setIsLoading(false);
      }
    };
    api();
  }, []);

  const handleOpen = (patient) => {
    setSelectedPatient(patient);
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-11/12 sm:w-3/4 md:w-1/2 max-w-screen-2xl flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-robineggblue dark:border-none dark:bg-gradient-to-r from-spacecadet to-spacecadetlow font-poppins">
      <CardBody className="flex flex-col">
        <div className="mb-4 flex flex-col lg:flex-row items-center justify-between">
          <Typography
            variant="h5"
            className="text-spacecadet dark:text-robineggblue font-poppins flex-1"
          >
            Nuestros Pacientes
          </Typography>
          <SearchPatient setPatients={setPatients} allPatients={allPatients} />
          {/* <Typography
            as="a"
            href="#"
            variant="small"
            className="font-bold text-robineggblue"
          >
            Ver Todos
          </Typography> */}
        </div>
        <div className="divide-y divide-gray-300 dark:divide-paleblue min-h-24 max-h-[41rem] overflow-auto scrollbar-thin scrollbar-thumb-gray-500 pr-3 flex flex-col justify-center">
          {isLoading ? (
            <div className="relative p-8">
              <Spinner />
            </div>
          ) : !patients || patients.length === 0 ? (
            <p className="text-center text-spacecadet text-lg lg:text-xl font-poppins dark:text-white">
              No hay registros aún!
            </p>
          ) : (
            patients.map((patient, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-3 pt-3 last:pb-0"
              >
                <div className="flex items-center gap-x-3">
                  <Avatar
                    size="sm"
                    src={`${
                      patient.genero === "FEMENINO"
                        ? femaleAvatars[index] || defaultProfile
                        : maleAvatars[index] || defaultProfile
                    }`}
                    alt={patient.nombre}
                  />
                  <div>
                    <Typography
                      className="text-spacecadet dark:text-robineggblue font-poppins"
                      variant="h6"
                    >
                      {`${patient.nombre} ${patient.apellido}`}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="dark:text-white font-poppins"
                    >
                      {`${patient.domicilioSalidaDto.calle}, ${patient.domicilioSalidaDto.numero}, ${patient.domicilioSalidaDto.localidad}, ${patient.domicilioSalidaDto.provincia}`}
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end min-w-20">
                  <Typography
                    color="blue-gray"
                    className="dark:text-white font-poppins"
                  >
                    {patient.dni}
                  </Typography>
                  <div className="flex gap-2">
                    <figure>
                      <img
                        className="cursor-pointer w-5 h-5 hover:scale-110 transition-all duration-300 delay-200"
                        onClick={() => handleOpen(patient)}
                        src={EditIcon}
                        alt="Editar"
                      />
                    </figure>
                    <DeletePatient id={patient.id} setPatients={setPatients} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardBody>
      <UpdatePatient
        patient={selectedPatient}
        isOpen={isOpen}
        handleOpen={handleOpen}
        setPatients={setPatients}
      />
    </div>
  );
};

export default ListPatients;
