import shiftService from '../../../services/shiftService';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import DeleteShift from './DeleteShift';
import { useEffect, useState } from 'react';
import Spinner from '../../../components/Spinner';
import useAvatar from '../../../Hooks/useAvatar';
import defaultProfile from '../../../assets/default-profile.svg'

const TABLE_HEAD = ['Odontologo', 'Paciente', 'Fecha y Hora', 'Acciones'];

const ListShifts = () => {
  const [listShifts, setListShifts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
 
  //Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShifts = listShifts?.slice(indexOfFirstItem, indexOfLastItem);

  
  const { femaleAvatars, maleAvatars, getAvatars } = useAvatar();

  useEffect(() => {
    const fetchAvatars = async () => {
      if (!femaleAvatars.length) await getAvatars('female');
      if (!maleAvatars.length) await getAvatars('male');
    };
    fetchAvatars();
  }, [femaleAvatars.length, maleAvatars.length]);

  
  const navigate = useNavigate();

  const handleUpdateShift = (
    currentPatient,
    currentDentist,
    currentFechaHora,
    shiftId
  ) => {
    navigate(`/actualizar-turno/${shiftId}`, {
      state: { currentPatient, currentDentist, currentFechaHora },
    });
  };

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        setIsLoading(true);
        const response = await shiftService.getShifts();
        setListShifts(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchShifts();
  }, []);

  const getRandomAvatar = (gender) => {
    const avatars = gender === 'FEMENINO' ? femaleAvatars : maleAvatars;
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex] || defaultProfile;
  };

  if (error.length) {
    return <div>Ha ocurrido un error</div>;
  }

  return (
    <Card className="h-full w-full dark:bg-gradient-to-r from-spacecadet to-spacecadetlow ">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none dark:bg-gradient-to-r from-spacecadet to-spacecadetlow "
      >
        <div className="mb-8 flex items-center justify-between gap-8 ">
          <div>
            <h2 className="text-robineggblue font-extrabold">Registros</h2>
            <Typography
              variant="h5"
              color="blue-gray"
              className="text-spacecadet dark:text-white"
            >
              Lista de Registros de Turnos
            </Typography>

            <Typography
              color="gray"
              className="mt-1 font-normal dark:text-white"
            >
              Mira más información acerca de todos los turnos
            </Typography>
          </div>
          {/* <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              variant="outlined"
              size="sm"
              className="dark:text-white dark:border-white"
            >
              Ver todos
            </Button>
          </div> */}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* <form className="w-full md:w-72">
            <Input
              label="Busca fecha"
              icon={<MagnifyingGlassIcon className="h-5 w-5 " />}
              className="dark:bg-white"
            />
          </form> */}
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 md:overflow-hidden px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 dark:text-white"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="text-center py-40">
                  <Spinner />
                </td>
              </tr>
            ) : !currentShifts?.length ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-10 font-semibold text-robineggblue"
                >
                  No hay registros aún
                </td>
              </tr>
            ) : (
              currentShifts.map(
                (
                  { id, odontologoSalidaDto, pacienteSalidaDto, fechaHora },
                  index
                ) => {
                  const isLast = index === currentShifts.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3 ">
                          <Avatar
                            src={
                              /* odontologoSalidaDto.genero === 'FEMENINO'
                                ? femaleAvatars[index] || defaultProfile
                                : maleAvatars[index] || defaultProfile */
                                getRandomAvatar(odontologoSalidaDto.genero)
                            }
                            alt={id}
                            size="sm"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal dark:text-white"
                            >
                              {odontologoSalidaDto?.nombre}{' '}
                              {odontologoSalidaDto?.apellido}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70 dark:text-white"
                            >
                              {odontologoSalidaDto?.matricula}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3 ">
                          <Avatar
                            src={
                              getRandomAvatar(pacienteSalidaDto.genero)
                            }
                            alt={id}
                            size="sm"
                          />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal dark:text-white"
                            >
                              {pacienteSalidaDto?.nombre}{' '}
                              {pacienteSalidaDto?.apellido}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70 dark:text-white"
                            >
                              {pacienteSalidaDto?.dni}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={fechaHora.replace('T', ' ')}
                            color={'blue-gray'}
                            className="dark:text-white"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip
                          content="Editar"
                          className="bg-white text-black"
                        >
                          <IconButton
                            variant="text"
                            onClick={() =>
                              handleUpdateShift(
                                pacienteSalidaDto,
                                odontologoSalidaDto,
                                fechaHora.replace('T', ' '),
                                id
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.5rem"
                              height="1.5rem"
                              viewBox="0 0 48 48"
                            >
                              <g
                                fill="none"
                                stroke="#000"
                                strokeLinejoin="round"
                                strokeWidth={4}
                              >
                                <path
                                  strokeLinecap="round"
                                  d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"
                                ></path>
                                <path
                                  fill="#01CFC9"
                                  d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z"
                                ></path>
                              </g>
                            </svg>
                          </IconButton>
                        </Tooltip>
                        <DeleteShift id={id} setListShifts={setListShifts} />
                      </td>
                    </tr>
                  );
                }
              )
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal dark:text-white"
        >
          Páginas {currentPage} de{' '}
          {listShifts?.length
            ? Math.ceil(listShifts?.length / itemsPerPage)
            : 0}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            className=" dark:text-white dark:border-white"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previos
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(listShifts?.length / itemsPerPage)
            }
            className="dark:text-white dark:border-white"
          >
            Siguientes
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ListShifts;
