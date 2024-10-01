import { Card, CardBody, Typography } from '@material-tailwind/react';
import ProtesisDental from '@/assets/protesis-dental.svg';
import DientesLimpios from '@/assets/dientes-lindos.svg';
import Ortodoncia from '@/assets/ortodoncia.svg';
import Diente from '@/assets/diente.png';

const treatments = [
  {
    name: 'Protesis Dental',
    description: ' Tecnología avanzada con resultados sorprendentes',
    img: ProtesisDental,
  },
  {
    name: 'Ortodoncia',
    description: 'Sellado del canal limpio y desinfectado.',
    img: Ortodoncia,
  },
  {
    name: 'Blanqueamiento',
    description: 'Limpieza profesional con herramientas manuales.',
    img: Diente,
  },
  {
    name: 'Higiene Dental',
    description: 'Tratamientos profesionales de higiene bucal.',
    img: DientesLimpios,
  },
];

const renderCardsTreatments = () => {
  return treatments.map((treat) => (
    <Card key={`item-treat-${treat.name}`} className="w-56 border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow border-2 flex flex-col justify-center items-center p-2 rounded-3xl">
      <div className="bg-aliceblue mt-3 rounded p-2">
        <img src={treat.img} alt="diente" className="w-14 h-14 " />
      </div>
      <CardBody>
        {' '}
        <Typography variant="h5" className="text-robineggblue mb-3">
          {treat.name}
        </Typography>
        <Typography
          variant="paragraph"
          className="leading-tight dark:text-white"
        >
          {treat.description}
        </Typography>
      </CardBody>
    </Card>
  ));
};

const Treatment = () => {
  return (
    <div className="text-center w-full my-16">
      <h2 className="text-robineggblue font-extrabold">TRATAMIENTOS</h2>
      <h2 className="mt-4 mb-9 text-spacecadet text-2xl text-center font-extrabold md:text-4xl md:font-bold ">
        Conoce nuestros diferentes servicios
      </h2>

      <section className=" w-full my-8 grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">
        {renderCardsTreatments()}
      </section>
      <button className="flex items-center gap-2 p-3 rounded-xl border border-robineggblue bg-white text-spacecadet dark:text-robineggblue dark:border-spacecadet dark:bg-gradient-to-r from-spacecadet to-spacecadetlow overflow-hidden mx-auto my-4">
        <p className="transform translate-x-4 text-lg font-bold transition-transform duration-300">
          Descubre más
        </p>
        <p className="transform translate-y-9 transition-transform duration-300">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </p>
        <style>{`
        button:hover .transform {
          transform: translateX(0px);
        }
        button:hover .transform:last-child {
          transform: translateY(0px);
        }
      `}</style>
      </button>
    </div>
  );
};

export default Treatment;
