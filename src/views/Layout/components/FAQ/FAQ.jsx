import ButtonFAQ from "./components/ButtonFAQ";
import CardFAQ from "./components/CardFAQ";

const FAQ = () => {
  return (
    <div className="text-center w-full my-8">
      <h2 className="text-robineggblue font-extrabold">FAQ</h2>
      <h2 className="text-spacecadet dark:text-white font-bold text-4xl mt-4 mb-8">
        ¿Tiene alguna pregunta?
      </h2>
      <div className="flex w-full justify-evenly flex-wrap gap-4  py-4">
        <CardFAQ />
        <CardFAQ />
        <CardFAQ />
      </div>
      <ButtonFAQ />
    </div>
  );
};

export default FAQ;
