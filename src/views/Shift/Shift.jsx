import { useEffect, useRef, useState } from 'react';
import SearchPatient from './components/SearchPatient';
import SearchDentist from './components/SearchDentist';
import patientService from '../../services/patientService';
import dentistService from '../../services/dentistService';
import FilterListPatient from './components/FilterListPatient';
import FilterListDentist from './components/FilterListDentist';
import FormRegister from './components/FormRegister';
import useSearch from '../../Hooks/useSearch';
import { ToastContainer, toast } from 'react-toastify';
import ErrorNotification from '../../components/ErrorNotification';

const Shift = () => {
  const [listPatients, setListPatients] = useState([]);

  const [listDentists, setListDentists] = useState([]);

  const [selectedDentist, setSelectedDentist] = useState({});
  const [selectedPatient, setSelectedPatient] = useState({});
  const[error, setError]=useState('');

  const [errorVisible, setErrorVisible] = useState(false);

  const handleError = () => {
    setErrorVisible(true);
  };

   //usando el hook creado
  const {
    handleOnSearch,
    filterDentists,
    filterPatients,
    searchDentist,
    searchPatient,
  } = useSearch(handleError);

  const refContainerPatient = useRef();
  const refContainerDentist = useRef();

  //llama a los respectivos endpoints y trae las listas
  useEffect(() => {
    const apiListPatients = async () => {
      try {
        const response = await patientService.getPatients();
        setListPatients(response);
      } catch (error) {
        setError(error);
      }
    };
    apiListPatients();
  }, []);

  useEffect(() => {
    const apiListDentists = async () => {
      try {
        const response = await dentistService.getDentists();
      setListDentists(response);
      } catch (error) {
        setError(error)
      }
    };
    apiListDentists();
  }, []);

  //controla desde el padre la limpieza del estado que contien el objeto que se selecciono pra que ante una nueva busqueda muestre de nuevo la lista
  useEffect(() => {
    refContainerPatient.current.setSelectedPatient({});
  }, [searchPatient]);

  useEffect(() => {
    refContainerDentist.current.setSelectedDentist({});
  }, [searchDentist]);

  if(error){
    return <div>Ha ocurrido un error</div>
  }

 

  return (
    <>
      <div className="w-full p-4 flex flex-col justify-center  mb-5 items-center gap-20 md:flex-row md:justify-center md:items-center md:gap-0 ">
        <div className="relative flex flex-col flex-1  items-center justify-center gap-3">
          <SearchPatient
            onSearch={handleOnSearch}
            listPatients={listPatients}
          />
          <div className="absolute top-[70px] h-custom z-30">
            <FilterListPatient
              filterOptions={filterPatients}
              ref={refContainerPatient}
              selectedPatient={selectedPatient}
              setSelectedPatient={setSelectedPatient}
            />
          </div>
        </div>
        <div className="relative flex flex-col flex-1 items-center justify-center">
          <SearchDentist
            onSearch={handleOnSearch}
            listDentists={listDentists}
          />
          <div className="absolute top-[70px] h-custom z-30">
            <FilterListDentist
              filterOptions={filterDentists}
              ref={refContainerDentist}
              selectedDentist={selectedDentist}
              setSelectedDentist={setSelectedDentist}
            />
          </div>
        </div>
        <ErrorNotification
        message="No hay ningún resultado!"
        visible={errorVisible}
        onClose={() => setErrorVisible(false)}
      />
      </div>
      <FormRegister
        selectedDentist={selectedDentist}
        selectedPatient={selectedPatient}
      />
    </>
  );
};

export default Shift;
