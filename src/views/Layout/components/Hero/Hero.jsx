import { Button, Typography } from "@material-tailwind/react";
import Phone from "@/assets/phone.svg";
import Location from "@/assets/location.svg";
import Dentist from "@/assets/dentist-hero.png";

const Hero = () => {
  return (
    <section className="px-4 mt-5 md:flex md:flex-row-reverse md:w-full md:justify-evenly md:items-center">
      <article className="py-3 md:w-2/5">
        <div className="relative bg-robineggblue m-auto w-80 h-[200px] max-w-48 rounded-[50px] md:max-w-none md:m-0 md:h-[310px] ">
          <img src={Dentist} alt="odontologo" className="absolute w-full bottom-0" />
        </div>
      </article>

      <article className="max-w-80 flex flex-col gap-5 md:max-w-none md:w-2/4 md:px-8">
        <Typography
          variant="h1"
          className="text-spacecadet font-extrabold text-3xl lg:text-5xl dark:text-white"
        >
          Haz que tu <strong className="text-robineggblue">sonrisa</strong>{" "}
          muestre lo que hay en tu interior
        </Typography>
        <p className="dark:text-white">
        Ofrecemos servicios odontológicos de alta calidad, respaldados por un equipo de expertos en una amplia gama de tratamientos, comprometidos con satisfacer las necesidades individuales de cada paciente.
        </p>
        <button className="py-3 px-6 rounded-xl bg-white text-robineggblue md:self-start shadow-md font-bold dark:bg-gradient-to-r dark:from-spacecadet dark:to-spacecadetlow">
          Saca tu turno!
        </button>
        <div className="pb-4 flex flex-col justify-start items-start gap-2 md:flex-row lg:gap-8">
          <div className="flex justify-center items-center gap-2">
            <img
              src={Phone}
              alt="teléfono"
              className="bg-white border border-robineggblue dark:bg-spacecadet p-2 rounded "
            />
            <div className="dark:text-white">
              <p>Numero teléfonico</p>
              <p>01 789 290 1200</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img
              src={Location}
              alt="ubicación"
              className="bg-white border border-robineggblue lg:self-start lg:mt-1 dark:bg-spacecadet p-2 rounded"
            />
            <div className="dark:text-white">
              <p>Ubicación</p>
              <p>Calle San Isidro,#58-77</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
