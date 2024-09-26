import DeleteIcon from '../../../assets/delete-icon.svg';
import dentistService from '../../../services/dentistService';
import Swal from 'sweetalert2';

const DeleteDentist = ({ id }) => {
  const handleDeteleIcon = async () => {
    try {
      Swal.fire({
        title: 'Estas seguro de eliminar este registro?',
        text: 'No será posible revertirlo.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#01CFC9',
        cancelButtonColor: '#0F2650',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await dentistService.deleteDentist(id);
          Swal.fire({
            title: response,
            icon: 'success',
          });
        }
      });
    } catch (error) {
      console.log('Hubo un error: ', error);
    }
  };

  return (
    <a className="hover:scale-110 transition-all duration-500 delay-200 cursor-pointer">
      <img src={DeleteIcon} alt="Eliminar" onClick={handleDeteleIcon} />
    </a>
  );
};

export default DeleteDentist;
