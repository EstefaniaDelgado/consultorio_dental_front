import React, { useEffect, useState } from 'react';
import shiftService from '../../../services/shiftService';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import Edit from '../../../assets/edit.svg';


const TABLE_HEAD = ['Odontologo', 'Paciente', 'Fecha y Hora', 'Acciones'];


const ListShifts = () => {
  const [listShifts, setListShifts] = useState([]);
  const [error, setError] = useState('');

const [currentPage, setCurrentPage] = useState(1); 
const [itemsPerPage] = useState(5); 
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentShifts = listShifts.slice(indexOfFirstItem, indexOfLastItem);


  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const response = await shiftService.getShifts();
        setListShifts(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchShifts();
  }, []);

  if (error.length) {
    return <div>Ha ocurrido un error</div>;
  }

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
          <h2 className="text-robineggblue font-extrabold">Registros</h2>
            <Typography variant="h5" color="blue-gray" className='text-spacecadet' >
            Lista de Registros de Turnos
            </Typography>
           
            <Typography color="gray" className="mt-1 font-normal">
              Mira más información acerca de todos los turnos
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              Ver todos
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              label="Busca fecha"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll lg:overflow-hidden px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
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
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentShifts.map(
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
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={
                            'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg'
                          }
                          alt={id}
                          size="sm"
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {odontologoSalidaDto?.nombre}{' '}
                            {odontologoSalidaDto?.apellido}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {odontologoSalidaDto?.matricula}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {pacienteSalidaDto?.nombre}{' '}
                          {pacienteSalidaDto?.apellido}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {pacienteSalidaDto?.dni}
                        </Typography>
                      </div>
                    </td>
                    {/* <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? 'online' : 'offline'}
                          color={online ? 'green' : 'blue-gray'}
                        />
                      </div>
                    </td> */}
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={fechaHora.replace('T', ' ')}
                          color={'blue-gray'}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Editar" className="bg-white text-black">
                        <IconButton variant="text">
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
                      <Tooltip content="Eliminar" className="bg-white text-black">
                        <IconButton variant="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 48 48"><g fill="none" strokeLinejoin="round" strokeWidth={4}><path fill="#01CFC9" stroke="#000" d="M9 10V44H39V10H9Z"></path><path stroke="#fff" strokeLinecap="round" d="M20 20V33"></path><path stroke="#fff" strokeLinecap="round" d="M28 20V33"></path><path stroke="#000" strokeLinecap="round" d="M4 10H44"></path><path fill="#01CFC9" stroke="#000" d="M16 10L19.289 4H28.7771L32 10H16Z"></path></g></svg>
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
  <Typography variant="small" color="blue-gray" className="font-normal">
    Páginas {currentPage} de {Math.ceil(listShifts.length / itemsPerPage)}
  </Typography>
  <div className="flex gap-2">
    <Button
      variant="outlined"
      size="sm"
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previos
    </Button>
    <Button
      variant="outlined"
      size="sm"
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage === Math.ceil(listShifts.length / itemsPerPage)}
    >
      Siguientes
    </Button>
  </div>
</CardFooter>

    </Card>
  );
};

export default ListShifts;
