import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from '@material-tailwind/react';
import { useState } from 'react';
import SearchIcon from '@/assets/search.svg';

const ATTRIBUTES = ['Nombre', 'Apellido', 'Dni'];
const OPTIONS = ['Nombre', 'Apellido', 'Dni'];

const SearchPatient = ({ onSearch, listPatients }) => {
  const [itemSearch, setItemSearch] = useState(0);
  //guardar lo que busco el usuario
  const [searchPatient, setSearchPatient] = useState('');

  const handleOnClickSearch = () => {
    onSearch(listPatients, OPTIONS[itemSearch], searchPatient);
    setSearchPatient('');
  };

  return (
    <div>
      <Typography
        variant="small"
        className="mb-1 text-spacecadet font-bold font-poppins dark:text-white"
      >
        OPCIONES DE BÚSQUEDA
      </Typography>
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              className="h-10 w-24 shrink-0 rounded-r-none border border-r-0 !border-robineggblue bg-white px-3 text-spacecadet font-extrabold font-poppins"
            >
              {OPTIONS[itemSearch]}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem] text-spacecadet font-bold font-poppins">
            {ATTRIBUTES.map((itemSearch, index) => {
              return (
                <MenuItem
                  key={itemSearch}
                  value={itemSearch}
                  onClick={() => setItemSearch(index)}
                  className="font-poppins"
                >
                  {itemSearch}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Input
          type="text"
          value={searchPatient}
          placeholder="Buscar Paciente"
          className="appearance-none rounded-l-none bg-white !border-robineggblue placeholder:text-gray-400 placeholder:opacity-100 focus:!border-gray-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none font-poppins"
          labelProps={{
            className: 'before:content-none after:content-none',
          }}
          containerProps={{
            className: 'min-w-0',
          }}
          onChange={(e) => setSearchPatient(e.target.value)}
          icon={
            <button>
              <img
                src={SearchIcon}
                alt="Busqueda"
                onClick={() => handleOnClickSearch()}
                className="cursor-pointer"
              />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default SearchPatient;
