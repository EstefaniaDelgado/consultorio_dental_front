import Dentist from '@/assets/dentist-woman.png';
import Watch from '@/assets/watch.png';
import CheckBook from '@/assets/check-book.png';
import { Card, Typography } from '@material-tailwind/react';

const content = [
  {
    number: ' 1783+',
    text: 'Pacientes felices',
  },
  {
    number: ' 730+',
    text: 'Citas en línea',
  },
  {
    number: ' 7+',
    text: 'Premios Obtenidos',
  },
  {
    number: ' 10+',
    text: 'Años de Experiencia',
  },
];

const AboutUs = () => {
  const renderAmounts = () => {
    return content.map((amount) => (
      <Card key={`amount-item-${amount.text}`} className="border-robineggblue bg-white border-2 p-2 text-center w-28 sm:w-40 lg:w-48 dark:bg-gradient-to-r dark:from-spacecadet dark:to-spacecadetlow">
        <h4 className=" text-spacecadet bg-white font-extrabold text-2xl md:font-bold lg:text-3xl dark:bg-gradient-to-r dark:from-spacecadet dark:to-spacecadetlow dark:text-robineggblue">
          {amount.number}
        </h4>
        <Typography className="text-sm lg:text-lg dark:text-white">{amount.text}</Typography>
      </Card>
    ));
  };

  return (
    <div className='mb-16'>
      {' '}
      <section className="px-4 mb-4 md:flex md:flex-row-reverse md:w-full md:justify-evenly md:items-start">
        <article className="py-3 md:w-2/5 self-center lg:self-end">
          <div className="relative mt-10 bg-robineggblue m-auto w-80 h-[175px] max-w-48 rounded-[45px] md:max-w-none md:m-0 md:h-[290px]">
            <img src={Dentist} alt="odontologo" className="absolute w-full bottom-0 m-auto" />
          </div>
        </article>

        <article className="max-w-80 flex flex-col gap-5 p-3 md:max-w-none md:w-2/4 md:px-8 ">
          <h2 className="text-robineggblue font-extrabold">NUESTRO ESTUDIO</h2>
          <h2 className=" text-spacecadet text-2xl font-extrabold md:text-4xl md:font-bold dark:text-white">
            Quienes somos!
          </h2>
          <p className='dark:text-white'>
            DentalCare es la primera empresa sanitaria privada con 3
            Certificaciones ISO en Calidad, Medio Ambiente y Seguridad: la
            calidad de los servicios ofrecidos a los pacientes está certificada
            por organismos terceros y la innovación y la formación desempeñan un
            papel fundamental en el desarrollo de la profesión.
          </p>
          <article className="flex flex-col gap-5 md:gap-2">
            <div className="flex items-center gap-4">
              <img src={Watch} alt="reloj" className="w-12 rounded" />
              <div>
                <h4 className=" text-spacecadet font-extrabold text-lg md:font-bold dark:text-robineggblue ">
                  Horarios completos
                </h4>
                <p className='dark:text-white'>Los Centros DentalPro están abiertos de 9 am a 8 pm.</p>
              </div>
            </div>
            <div className="flex items-center gap-[0.7rem]">
              <img src={CheckBook} alt="pagos" className="w-[50px] rounded" />
              <div className="flex flex-col">
                {' '}
                <h4 className=" text-spacecadet font-extrabold text-lg md:font-bold dark:text-robineggblue ">
                  Condiciones de pago
                </h4>
                <p className='dark:text-white'>
                  DentalCare ofrece un plan de pago personalizado. La salud del
                  paciente es nuestro primer objetivo.
                </p>
              </div>
            </div>
          </article>
        </article>
      </section>
      <article className="grid grid-cols-2 justify-items-center gap-2 md:grid-cols-4  w-full p-4">
        {renderAmounts()}
      </article>
    </div>
  );
};

export default AboutUs;
