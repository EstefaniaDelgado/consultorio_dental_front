import { useEffect, useState } from "react";
import { CardBody, Typography, Avatar } from "@material-tailwind/react";
import patientService from "@services/patientService";
import EditIcon from "@/assets/edit-icon.svg";
import DeleteIcon from "@/assets/delete-icon.svg";
import Spinner from "@/components/Spinner";
console.log(Spinner);

const customers = [
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
];

const ListPatients = () => {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const api = async () => {
      try {
        const response = await patientService.getPatients();
        setPatients(response);
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setIsLoading(false);
      }
    };
    api();
  }, []);

  return (
    <div className=" w-3/4 md:w-1/2 max-w-screen-2xl flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <CardBody className="flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" className="text-spacecadet">
            Nuestros Pacientes
          </Typography>
          {/* <Typography
            as="a"
            href="#"
            variant="small"
            className="font-bold text-robineggblue"
          >
            Ver Todos
          </Typography> */}
        </div>
        <div className="divide-y divide-gray-200">
          {isLoading ? (
            <div className="relative p-8">
              <Spinner />
            </div>
          ) : !patients.length ? (
            <p className="text-center text-spacecadet text-xl lg:text-2xl">
              No hay registros aún!
            </p>
          ) : (
            patients.map(
              ({ nombre, apellido, dni, domicilioSalidaDto }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between pb-3 pt-3 last:pb-0"
                >
                  <div className="flex items-center gap-x-3">
                    <Avatar size="sm" src={customers[index]} alt={nombre} />
                    <div>
                      <Typography className="text-spacecadet" variant="h6">
                        {`${nombre} ${apellido}`}
                      </Typography>
                      <Typography variant="small" color="gray">
                        {`${domicilioSalidaDto.calle}, ${domicilioSalidaDto.localidad}, ${domicilioSalidaDto.numero}, ${domicilioSalidaDto.provincia}`}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <Typography color="blue-gray" variant="h6">
                      {dni}
                    </Typography>
                    <div className="flex justify-center items-center gap-2">
                      <figure>
                        <img
                          className="cursor-pointer"
                          src={EditIcon}
                          alt="Editar"
                        />
                      </figure>
                      <figure>
                        <img
                          className="cursor-pointer"
                          src={DeleteIcon}
                          alt="Eliminar"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </CardBody>
    </div>
  );
};

export default ListPatients;
