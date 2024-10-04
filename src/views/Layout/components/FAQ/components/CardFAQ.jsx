import LessCircle from "@/assets/less-circle.svg";
import MoreCircle from "@/assets/more-circle.svg";
import {
  Accordion,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

const CardFAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Accordion
      open={open === 1}
      className="bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-3xl w-full relative py-2 px-12 text-start"
    >
      <div className="border-b-0 transition-colors text-spacecadet cursor-default hover:dark:text-robineggblue dark:text-robineggblue py-4 font-semibold text-xl">
        ¿Cuándo debes cepillarte los dientes durante el día?
      </div>
      <figure
        className={`absolute cursor-pointer ${
          open ? `right-4 top-3` : `right-4 top-1/2 transform -translate-y-1/2`
        }`}
        onClick={() => handleOpen(1)}
      >
        <img src={open? LessCircle : MoreCircle} alt="Close" />
      </figure>
      <AccordionBody className="pt-0 text-base font-normal dark:text-white">
        Pasados 20 o 30 minutos después de las comidas principales, para
        permitir que la saliva neutralice la acidez de algunos alimentos, como
        los cítricos, el café y las bebidas carbonatadas. Se deben cepillar los
        dientes durante al menos dos minutos. Aquellos que sufren de inflamación
        de las encías deberían llegar a 4-5.
      </AccordionBody>
    </Accordion>
  );
};

export default CardFAQ;
