import { useEffect, useRef, useState } from 'react';
import SearchPatient from './components/SearchPatient/SearchPatient';
import SearchDentist from './components/SearchDentist/SearchDentist';
import patientService from '../../services/patientService';
import dentistService from '../../services/dentistService';
import FilterListPatient from './components/FilterListPatient/FilterListPatient';
import FilterListDentist from "./components/FilterListDentist/FilterListDentist"
import useSearch from '../../Hooks/useSearch';
import { ToastContainer } from 'react-toastify';

const Shift = () => {
  const [listPatients, setListPatients] = useState([]);
 
  const [listDentists, setListDentists] = useState([]);
 
  //usando el hook creado
  const { handleOnSearch, filterDentists, filterPatients, searchDentist, searchPatient} = useSearch();

  const refContainerPatient = useRef();
  const refContainerDentist = useRef();
 

  //llama a los respectivos endpoints y trae las listas
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
    const apiListDentists = async () => {
      const response = await dentistService.getDentists();
      setListDentists(response);
    };
    apiListDentists();
  }, []);

  //controla desde el padre la limpieza del estado que contien el objeto que se selecciono pra que ante una nueva busqueda muestre de nuevo la lista
  useEffect(() => {
    refContainerPatient.current.setSelectedPatient({});
  }, [searchPatient]);

  useEffect(()=>{
    refContainerDentist.current.setSelectedDentist({})
  },[searchDentist])



  return (
    <div className="w-full p-4 flex flex-col justify-center  items-center gap-20 md:flex-row md:justify-center md:items-center md:gap-0 ">
      <div className="relative flex flex-col flex-1  items-center justify-center gap-3">
        <SearchPatient onSearch={handleOnSearch} listPatients={listPatients} />
        <div className="absolute top-[70px] h-custom z-50">
          <FilterListPatient filterOptions={filterPatients} ref={refContainerPatient} />
        </div>
      </div>
      <div className="relative flex flex-col flex-1 items-center justify-center">
        <SearchDentist onSearch={handleOnSearch} listDentists={listDentists} />
        <div className="absolute top-[70px] h-custom z-50">
          <FilterListDentist filterOptions={filterDentists} ref={refContainerDentist}/>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Shift;
