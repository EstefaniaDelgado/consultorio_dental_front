import { useEffect, useRef, useState } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import SearchPatient from './components/SearchPatient/SearchPatient';
import SearchDentist from './components/SearchDentist/SearchDentist';
import patientService from '../../services/patientService';
import FilterListPatient from './components/FilterListPatient/FilterListPatient';
import useSearch from '../../Hooks/useSearch';
import { ToastContainer} from 'react-toastify';

const Shift = () => {
  const [listPatients, setListPatients] = useState([]);
  //usando el hook creado
  const { handleOnSearch, filterOptions, optionSelected } = useSearch();

  const refContainer = useRef();

  useEffect(() => {
    const apiListPatients = async () => {
      try {
        const response = await patientService.getPatients();
        setListPatients(response);
      } catch (error) {
        console.log('Ha ocurrido un error: ', error);
      }
    };
    apiListPatients();
  }, []);

  useEffect(() => {
    refContainer.current.setSelectedPatient('');
  }, [optionSelected]);

  return (
    <div className="w-full p-4 flex flex-col justify-center  items-center md:flex-row md:justify-center md:items-start gap-20">
      <div className="relative w-full flex flex-col  items-center justify-center gap-3">
        <SearchPatient onSearch={handleOnSearch} listPatients={listPatients} />
        <div className="absolute top-[70px] h-custom z-50">
          <FilterListPatient filterOptions={filterOptions} ref={refContainer} />
        </div>
      </div>
      <div className=" w-full flex flex-col items-end justify-center">
        <SearchDentist />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Shift;
