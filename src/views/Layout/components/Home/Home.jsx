import FAQ from '../FAQ/FAQ';
import Hero from '../Hero/Hero';
import Review from '../Review/Review';
import Staff from '../Staff/Staff';
import AboutUs from '../AboutUs/AboutUs';
import Treatment from '../Treatment/Treatment';

const Home = () => {
  return (
    <>
      <Hero />
      <Treatment />
      <AboutUs />
      <Staff />
      <FAQ />
      <Review />
    </>
  );
};

export default Home;
