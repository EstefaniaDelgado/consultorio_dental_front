import { useEffect, useState } from "react";

const options = ["Nombre", "Apellido", "DNI"];

const SearchPatient = ({ setPatients, allPatients }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Nombre");

  const handleDropdownMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedOption = (e) => {
    setSelectedOption(e.target.textContent);
    setIsOpen(false);
  };

  const optionsList = options.map((option, index) => (
    <li
      key={index}
      className="px-4 py-2 text-slate-600 hover:bg-gray-50 text-sm cursor-pointer text-spacecadet font-medium"
      onClick={handleSelectedOption}
    >
      {option}
    </li>
  ));

  const handleSearch = (e) => {
    let searchTerm = e.target.value.trim().toLowerCase();

    if (searchTerm === "") {
      return setPatients(allPatients);
    } else {
      const filteredPatients = allPatients.filter((patient) =>
        patient[selectedOption.toLowerCase()]
          .toString()
          .toLowerCase()
          .includes(searchTerm)
      );
      filteredPatients.sort((a, b) =>
        a.fechaIngreso.localeCompare(b.fechaIngreso)
      );
      setPatients(filteredPatients);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#dropdownButton")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <>
      <div className="w-full max-w-sm min-w-[200px] flex-1">
        <div className="relative mt-2 border border-robineggblue dark:border-transparent rounded-md">
          <div className="absolute top-1 left-1 flex items-center">
            <button
              id="dropdownButton"
              className="rounded border border-transparent py-1 px-1.5 text-center flex items-center justify-center text-sm transition-all text-slate-600 min-w-[90px]"
              onClick={handleDropdownMenu}
            >
              <span
                id="dropdownSpan"
                className="text-ellipsis overflow-hidden dark:text-white text-spacecadet font-medium"
              >
                {selectedOption}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 ml-1 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div className="h-6 border-l border-robineggblue dark:border-gray-200 ml-1"></div>
            <div
              id="dropdownMenu"
              className={`min-w-[150px] overflow-hidden absolute left-0 top-0 mt-9 ${
                isOpen ? "block" : "hidden"
              } w-full bg-white border border-slate-200 rounded-md shadow-lg z-10`}
            >
              <ul>{optionsList}</ul>
            </div>
          </div>
          <input
            type="text"
            className="w-full bg-transparent  text-slate-700 text-sm border rounded-md pl-28 pr-1 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:text-white dark:placeholder:text-gray-200"
            placeholder="Buscar..."
            onChange={handleSearch}
          />
        </div>
      </div>
    </>
  );
};

export default SearchPatient;
