import { useState } from 'react';
import Dropdown from '../../../assets/dropdown.svg'
import { Link } from 'react-router-dom';

const CustomDropdown = ({name, list, register}) => {

  const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
    
      <div
        className="flex items-center cursor-pointer p-2"
        onClick={handleClick}
      >
        <span className="mr-2 text-sm font-medium">{name}</span>
        <img src={Dropdown} alt="depliegue icono" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      
      {isOpen && (
        <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 shadow-lg rounded-lg w-40 text-center bg-aliceblue ">
          <li className="p-2 hover:bg-white cursor-pointer"><Link to={register} className='text-sm'>Registrar</Link></li>
          <li className="p-2 hover:bg-white cursor-pointer"><Link to={list}className='text-sm'>Listar</Link></li>
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
