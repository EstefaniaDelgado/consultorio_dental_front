import Swal from "sweetalert2";
import shiftService from "../../../services/shiftService";
import { IconButton, Tooltip } from "@material-tailwind/react";

const DeleteShift = ({ id, setListShifts }) => {
  const handleDeleteIcon = () => {
    try {
      Swal.fire({
        title: "Estas seguro de eliminar este turno?",
        text: "No será posible revertirlo.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#01CFC9",
        cancelButtonColor: "#0F2650",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await shiftService.deleteShift(id);
          //actualizar lista de pacientes
          const getCurrentList = await shiftService.getShifts();
          setListShifts([...getCurrentList]);
          Swal.fire({
            title: response,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log("Hubo un error: ", error);
    }
  };

  return (
    <Tooltip content="Eliminar" className="bg-white text-black">
      <IconButton onClick={handleDeleteIcon} variant="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 48 48"
        >
          <g fill="none" strokeLinejoin="round" strokeWidth={4}>
            <path fill="#01CFC9" stroke="#000" d="M9 10V44H39V10H9Z"></path>
            <path stroke="#fff" strokeLinecap="round" d="M20 20V33"></path>
            <path stroke="#fff" strokeLinecap="round" d="M28 20V33"></path>
            <path stroke="#000" strokeLinecap="round" d="M4 10H44"></path>
            <path
              fill="#01CFC9"
              stroke="#000"
              d="M16 10L19.289 4H28.7771L32 10H16Z"
            ></path>
          </g>
        </svg>
      </IconButton>
    </Tooltip>
  );
};

export default DeleteShift;
