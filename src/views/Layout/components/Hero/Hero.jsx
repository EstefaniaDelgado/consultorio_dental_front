import { Button, Typography } from "@material-tailwind/react";
import Phone from "@/assets/phone.svg";
import Location from "@/assets/location.svg";
import Dentist from "@/assets/dentist-hero.png";

const Hero = () => {
  return (
    <section className="px-4 md:flex md:flex-row-reverse md:w-full md:justify-evenly md:items-center">
      <article className="py-3 md:w-2/5">
        <div className="m-auto w-full max-w-48 md:max-w-none md:m-0  rounded-3xl">
          <img src={Dentist} alt="odontologo" className="w-full" />
        </div>
      </article>

      <article className="max-w-80 flex flex-col gap-5 md:max-w-none md:w-2/4 md:px-8">
        <Typography
          variant="h1"
          className="text-spacecadet font-extrabold text-3xl lg:text-5xl"
        >
          Haz que tu <strong className="text-robineggblue">sonrisa</strong>{" "}
          muestre lo que hay en tu interior
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa
          consectetur optio vero ullam, iusto veniam voluptatibus, dolorem,
          officia corporis dolor. Ex quae aliquid nulla nobis omnis alias et!
          Rerum?
        </p>
        <button className="py-3 px-6 rounded-xl bg-gradient-to-r from-spacecadet to-spacecadetlow text-robineggblue md:self-start shadow-md">
          Saca tu turno!
        </button>
        <div className="pb-4 flex flex-col justify-start items-start gap-2 md:flex-row lg:gap-8">
          <div className="flex justify-center items-center gap-2">
            <img
              src={Phone}
              alt="teléfono"
              className="bg-spacecadet p-2 rounded"
            />
            <div>
              <p>Numero teléfonico</p>
              <p>01 789 290 1200</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img
              src={Location}
              alt="ubicación"
              className="bg-spacecadet p-2 rounded"
            />
            <div>
              <p>Ubicación</p>
              <p>Calle San Isidro, #58-77</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
