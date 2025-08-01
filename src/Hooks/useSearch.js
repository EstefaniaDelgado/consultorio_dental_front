import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useSearch = (handleError) => {
  //estados para guardar el resultado del filtro
  const [filterPatients, setFilterPatients] = useState([]);
  const [filterDentists, setFilterDentists] = useState([]);

  //estados que corresponden a cada busqueda ya sea paciente u odontologo
  const [searchPatient, setSearchPatient] = useState('');
  const [searchDentist, setSearchDentist] = useState('');

  //handle que hace la busqueda y filtra
  const handleOnSearch = (list, optionSearch, searchTerm, type) => {
    const lowerOptionCase = optionSearch.toLowerCase();
    const filter = list.filter((item) => {
      return item[lowerOptionCase]
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase());
    });

    if (filter.length === 0) {
      handleError();
    }
    if (type === 'dentist') {
      setFilterDentists(filter);
      setSearchDentist(searchTerm);
    } else {
      setFilterPatients(filter);
      setSearchPatient(searchTerm);
    }
  };

  return {
    handleOnSearch,
    filterPatients,
    filterDentists,
    searchPatient,
    searchDentist,
  };
};

export default useSearch;
