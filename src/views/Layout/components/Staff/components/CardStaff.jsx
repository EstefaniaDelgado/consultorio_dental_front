const CardStaff = ({ nombre, apellido, image}) => {
  return (
    <section className="h-44 flex items-end">
      <article className="bg-white border border-robineggblue dark:border-spacecadetlow dark:bg-gradient-to-r from-spacecadet to-spacecadetlow rounded-[2rem] w-56 h-32 relative flex items-end justify-center">
        <figure className="bg-paleblue rounded-3xl w-1/3 h-20 mx-auto absolute -top-1/3  left-1/2 transform -translate-x-1/2">
          <img
            className="block mx-auto w-full h-full object-cover rounded-3xl"
            src={image}
            alt="Asistente médico"
          />
        </figure>
        <div className="mt-8 mb-6">
          <h2 className="text-spacecadet font-semibold dark:text-robineggblue">
            {`${nombre} ${apellido}`}
          </h2>
          <p className="text-primary dark:text-white">Dentista</p>
        </div>
      </article>
    </section>
  );
};

export default CardStaff;
