import  FbIcon  from '../../assets/facebook.svg';
import InstaIcon from '../../assets/instagram.svg'
import Ind from '../../assets/linkedin.svg'
import Email from '../../assets/email.svg'
import Phone from '../../assets/phone.svg'
import Watch from '../../assets/watch.svg'

const Footer = () => {
  return (
    <section className="bg-blue-gray-300 w-full">
      <article>
        <h3>
          Consultorio <strong>Dental</strong>
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, optio.
        </p>
        <div className='flex gap-2' >
          <img className="bg-white" src={FbIcon} alt="facebook"  />
          <img className="bg-white" src={InstaIcon} alt="instagram" />
          <img className="bg-white" src={Ind} alt="linkedin" />
        </div>
      </article>
      <article>
        <h3>Contáctanos</h3>
        <div>
          <div className='bg-white'>
            <img src={Email} alt="email" />
            <p>info@consultoriodental.com</p>
          </div>
          <div>
            <img src={Phone} alt="teléfono" />
            <p>+51 456 890 9300</p>
          </div>
          <div>
            <img src={Watch} alt="horario" />
            <p>Lun-Sab 9:00-5:00</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
