import "./testimonials-section.scss";
import testimonials from "../../../data/testimonials.json";
import TestimonialCard from "./testimonial-card/testimonial-card";

const Testimonials = () => {
  return (
    <div className="div-testimonials background-secondary2">
      <div className="container">
        <h1 className="title-display primary1">Testimonials</h1>
        <h3 className="text-lead secondary4">
          Your favourite local authentic Greek restaurant
        </h3>
        <div className="testimonials grid grid--4-cols">
          {testimonials.map((testimonial) => {
            const { id } = testimonial;
            return <TestimonialCard key={id} testimonial={testimonial} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
