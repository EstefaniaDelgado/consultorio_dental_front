import DropdownIcon from "../../../assets/dropdown.svg"
import { useState } from "react";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Elemento principal (item) */}
      <div className="flex items-center cursor-pointer p-2">
        <span className="mr-2">Opciones</span>
        <img src={DropdownIcon} alt="" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-40 text-center">
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Opción 1</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Opción 2</li>
          <li className="p-2 hover:bg-gray-200 cursor-pointer">Opción 3</li>
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
