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
import SearchIcon from '@/assets/search.svg'


const ATTRIBUTES = ['Nombre', 'Apellido', 'Matricula'];
const OPTIONS = ['Nombre', 'Apellido', 'Matricula'];

const SearchDentist = () => {
  const [itemSearch, setItemSearch] = useState(0);
  
  //handle que envie el paciente y el criterio de busqueda
  const handleOnClickSearch=()=>{
  console.log("funciona")
  }
  

  return (
    <div className="w-full max-w-[24rem]">
      <Typography variant="small" className="mb-1 text-spacecadet font-bold">
        OPCIONES DE BÚSQUEDA
      </Typography>
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              className="h-10 w-26 shrink-0 rounded-r-none border border-r-0 border-blue-gray-200 bg-white px-3 text-spacecadet font-extrabold "
            >
              {OPTIONS[itemSearch]}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem] text-spacecadet font-bold">
            {ATTRIBUTES.map((itemSearch, index) => {
              return (
                <MenuItem
                  key={itemSearch}
                  value={itemSearch}
                  onClick={() => setItemSearch(index)}
                >
                  {itemSearch}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Input
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={12}
          placeholder="Buscar Odontologo"
          className="appearance-none rounded-l-none bg-white !border-t-blue-gray-200 placeholder:text-gray-400 placeholder:opacity-100 focus:!border-robineggblue [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          labelProps={{
            className: 'before:content-none after:content-none',
          }}
          containerProps={{
            className: 'min-w-0',
          }}
          onChange={(e)=>setSearchPatient(e.target.value)}
          icon={
            <img
              src={SearchIcon}
              alt="Busqueda"
               onClick={() => handleOnClickSearch()}
            />
          }
        />
      </div>
    </div>
  );
}

export default SearchDentist
