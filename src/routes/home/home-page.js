import "./home-page.scss";
import About from "./about/about-section";
import Hero from "./hero/hero-section";
import Meals from "./meals/meals-section";
import Testimonials from "./testimonials/testimonials-section";

const Home = () => {
  return (
    <main>
      <Hero />
      <Meals />
      <Testimonials />
      <About />
    </main>
  );
};

export default Home;
