import FbIcon from "@/assets/facebook.svg";
import InstaIcon from "@/assets/instagram.svg";
import Email from "@/assets/email.svg";
import Phone from "@/assets/phone.svg";
import Watch from "@/assets/watch.svg";
import X from "@/assets/x.svg";
import Location from "@/assets/location.svg";
import data from "@/utils/footerData.json";
import Column from "./components/Column";
import FooterIcon from "./components/FooterIcon";
import Subscription from "@/views/Layout/components/Subscription/Subscription";

const Footer = () => {
  const footerColumns = data.data.map((column) => (
    <Column key={column.title} title={column.title} links={column.links} />
  ));

  return (
    <footer className="bg-paleblue w-full flex justify-evenly gap-8 lg:gap-0 px-4 flex-wrap pb-16 md:pb-20 pt-56 md:pt-44 relative mt-24">
      <Subscription />
      <article className="w-2/12 flex flex-col gap-3 basis-56">
        <h3 className="text-spacecadet font-black text-lg pb-2">
          DENTAL<span className="text-robineggblue">CARE</span>
        </h3>
        <p className="text-primary">
          Ofrecemos servicios de calidad con personal calificado con más de 5
          años de experiencia.
        </p>
        <div className="flex gap-2 py-1.5">
          <FooterIcon img={X} link="https://www.x.com" altText={"twitter"} />
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="bg-white dark:bg-spacecadet py-2 px-3 rounded-lg w-8 h-8"
              src={FbIcon}
              alt="facebook"
            />
          </a>
          <FooterIcon
            img={InstaIcon}
            link="https://www.instagram.com"
            altText={"instagram"}
          />
        </div>
      </article>
      {footerColumns}
      <article className="flex flex-col gap-3 basis-56">
        <h3 className="font-extrabold text-spacecadet text-lg pb-2">
          Contáctanos
        </h3>
        <div className="flex gap-2">
          <img src={Email} alt="email" />
          <p>info@consultoriodental.com</p>
        </div>
        <div className="flex gap-2">
          <img src={Phone} alt="teléfono" />
          <p>+51 456 890 9300</p>
        </div>
        <div className="flex gap-2">
          <img src={Watch} alt="horario" />
          <p>Lun-Sab 9:00-5:00</p>
        </div>
        <div className="flex gap-2">
          <img src={Location} alt="ubicación" />
          <p>Ibagué, Colombia</p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
