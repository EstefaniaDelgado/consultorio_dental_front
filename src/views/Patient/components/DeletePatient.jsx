import Swal from "sweetalert2";
import patientService from "@/services/patientService";
import DeleteIcon from "@/assets/delete-icon.svg";

const DeletePatient = ({ id, setPatients }) => {
  const handleDeleteIcon = () => {
    try {
      Swal.fire({
        title: "Estas seguro de eliminar este paciente?",
        text: "No será posible revertirlo.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#01CFC9",
        cancelButtonColor: "#0F2650",
        confirmButtonText: "Sí, eliminar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await patientService.deletePatient(id);
          //actualizar lista de pacientes
          const getCurrentList = await patientService.getPatients();
          setPatients([...getCurrentList]);
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
    <figure className="hover:scale-110 transition-all duration-300 delay-200 cursor-pointer">
      <img src={DeleteIcon} alt="Eliminar" onClick={handleDeleteIcon} />
    </figure>
  );
};

export default DeletePatient;
