import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useSearch = () => {
  //estado para guardar el resultado del filtro
  const [filterOptions, setFilterOptions] = useState([]);
  //opcion seleccionada
  const [optionSelected, setOptionSelected] = useState('');

  //handle que hace la busqueda y filtra
  const handleOnSearch = (list, optionSearch, searchTerm) => {
    const lowerOptionCase = optionSearch.toLowerCase();
    const filter = list.filter((item) => {
      return item[lowerOptionCase]
        .toString()
        .toLowerCase()
        .includes(searchTerm.toString().toLowerCase());
    });
    if (filter.length === 0) {
      toast('No hay ningún resultado!', {
        position: 'top-right',
        type: 'error',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    setFilterOptions(filter);
    setOptionSelected(searchTerm);
  };

  return {
    handleOnSearch,
    filterOptions,
    optionSelected,
  };
};

export default useSearch;
