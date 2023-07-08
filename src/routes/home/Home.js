import "./Home.scss";
import About from "./about/About";
import Hero from "./hero/Hero";
import Meals from "./meals/Meals";
import Testimonials from "./testimonials/Testimonials";

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
