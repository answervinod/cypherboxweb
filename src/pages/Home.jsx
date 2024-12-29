import Hero from '../components/Hero';
import About from './About';
import Services from './Services';
import WhyChoose from '../components/WhyChoose';
import WhoWeServe from '../components/WhoWeServe';
import Technology from '../components/Technology';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <WhoWeServe />
      <Technology />
      <Pricing />
    </>
  );
};

export default Home; 