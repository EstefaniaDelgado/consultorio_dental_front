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

const ATTRIBUTES = ['Nombre', 'Apellido', 'Matricula'];
const OPTIONS = ['Nombre', 'Apellido', 'Matricula'];

const SearchDentist = ({ onSearch, listDentists }) => {
  const [itemSearch, setItemSearch] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const TYPE = 'dentist';

  //handle que setee la busqueda y la envie
  const handleOnClickSearch = (e) => {
    e.preventDefault();
    onSearch(listDentists, OPTIONS[itemSearch], searchTerm, TYPE);
    setSearchTerm('');
  };

  return (
    <div>
      <Typography variant="small" className="mb-1 text-spacecadet font-bold font-poppins dark:text-white">
        OPCIONES DE BÚSQUEDA
      </Typography>
      <form className="relative flex w-full">
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
                  className='font-poppins'
                >
                  {itemSearch}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Input
          type="text"
          maxLength={12}
          placeholder="Buscar Odontologo"
          value={searchTerm}
          className="appearance-none rounded-l-none bg-white !border-robineggblue placeholder:text-gray-400 placeholder:opacity-100 focus:!border-gray-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none font-poppins"
          labelProps={{
            className: 'before:content-none after:content-none',
          }}
          containerProps={{
            className: 'min-w-0',
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          icon={
            <img
              src={SearchIcon}
              alt="Busqueda"
              onClick={handleOnClickSearch}
              className="cursor-pointer"
            />
          }
        />
      </form>
    </div>
  );
};

export default SearchDentist;
