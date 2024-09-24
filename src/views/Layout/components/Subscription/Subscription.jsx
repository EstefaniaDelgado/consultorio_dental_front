const Subscription = () => {
  return (
    <div className="w-3/4 flex flex-col items-center justify-center bg-white border border-robineggblue dark:border-spacecadetlow rounded-[3.5rem] px-4 py-8 gap-4 dark:bg-gradient-to-r from-spacecadet to-spacecadetlow my-8 absolute top-0 transform -translate-y-28 max-w-screen-xl">
      <h2 className="text-3xl font-extrabold text-spacecadet dark:text-robineggblue">
        Suscríbete a nuestro boletín
      </h2>
      <div className="w-3/4 relative">
        <form action="">
          <input
            type="text"
            placeholder="Introduce tu dirección de correo electrónico"
            className="p-6 w-full rounded-xl focus:outline-robineggblue placeholder:text-primary border border-robineggblue dark:border-spacecadetlow dark:focus:outline-none"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 py-3 px-5 bg-robineggblue dark:bg-gradient-to-r from-spacecadet to-spacecadetlow text-white font-bold rounded-xl">
            Suscribirse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
