import About from "./about/about";
import Hero from "./hero/hero";
import Meals from "./meals/meals";
import Testimonials from "./testimonials/testimonials";

const Main = () => {
  return (
    <main>
      <Hero />
      <Meals />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;
