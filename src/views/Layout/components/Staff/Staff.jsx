import CardStaff from "./components/CardStaff";

const Staff = () => {
  return (
    <div className="text-center w-full my-8">
      <h2 className="text-robineggblue font-extrabold">EL STAFF</h2>
      <h2 className="text-spacecadet font-bold text-4xl mt-4 mb-8">
        Conozca a nuestros especialistas
      </h2>
      <div className="flex w-full justify-between flex-wrap gap-4  py-4">
        <CardStaff />
        <CardStaff />
        <CardStaff />
        <CardStaff />
      </div>
    </div>
  );
};

export default Staff;
