import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useSearch from "@/Hooks/useSearch";
import patientService from "@/services/patientService";
import dentistService from "@/services/dentistService";
import SearchPatient from "../components/SearchPatient";
import FilterListPatient from "../components/FilterListPatient";
import SearchDentist from "../components/SearchDentist";
import FilterListDentist from "../components/FilterListDentist";
import FormUpdate from "./components/FormUpdate";

const UpdateShift = () => {
  const location = useLocation();
  const {
    currentPatient = {},
    currentDentist = {},
    currentFechaHora = null,
  } = location.state || {};

  const { id } = useParams();

  const [listPatients, setListPatients] = useState([]);
  const [listDentists, setListDentists] = useState([]);

  const [selectedDentist, setSelectedDentist] = useState({});
  const [selectedPatient, setSelectedPatient] = useState({});
  const [selectedFechaHora, setSelectedFechaHora] = useState({});

  //usando el hook creado
  const {
    handleOnSearch,
    filterDentists,
    filterPatients,
    searchDentist,
    searchPatient,
  } = useSearch();

  const refContainerPatient = useRef();
  const refContainerDentist = useRef();

  //llama a los respectivos endpoints y trae las listas
  useEffect(() => {
    const apiListPatients = async () => {
      try {
        const response = await patientService.getPatients();
        setListPatients(response);
      } catch (error) {
        console.log("Ha ocurrido un error: ", error);
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

  //controla desde el padre la limpieza del estado que contien el objeto que se selecciono para que ante una nueva busqueda muestre de nuevo la lista
  useEffect(() => {
    refContainerPatient.current.setSelectedPatient({});
  }, [searchPatient]);

  useEffect(() => {
    refContainerDentist.current.setSelectedDentist({});
  }, [searchDentist]);

  useEffect(() => {
    if (currentPatient) {
      setSelectedPatient(currentPatient);
    }
    if (currentDentist) {
      setSelectedDentist(currentDentist);
    }
    if (currentFechaHora) {
      setSelectedFechaHora(currentFechaHora);
    }
  }, [currentPatient, currentDentist, currentFechaHora]);

  return (
    <>
      <div className="w-full p-4 flex flex-col justify-center  items-center gap-20 md:flex-row md:justify-center md:items-center md:gap-0 ">
        <div className="relative flex flex-col flex-1  items-center justify-center gap-3">
          <SearchPatient
            onSearch={handleOnSearch}
            listPatients={listPatients}
          />
          <div className="absolute top-[70px] h-custom z-50">
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
          <div className="absolute top-[70px] h-custom z-50">
            <FilterListDentist
              filterOptions={filterDentists}
              ref={refContainerDentist}
              selectedDentist={selectedDentist}
              setSelectedDentist={setSelectedDentist}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
      <FormUpdate
        selectedDentist={selectedDentist}
        selectedPatient={selectedPatient}
        selectedFechaHora={selectedFechaHora}
        shiftId={id}
      />
    </>
  );
};

export default UpdateShift;
