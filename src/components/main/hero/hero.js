import "./hero.scss";
import Button from "../../button/button";
import heroImage from "../../../assets/images/restauranfood.jpg";

const Hero = () => {
  return (
    <div className="div-hero background-primary1">
      <div className="container grid grid--2-cols">
        <div className="div-left">
          <h1 className="title-display primary2">Little Lemon</h1>
          <h2 className="title-subtitle secondary3 text-subtitle">Chicago</h2>
          <p className="text-lead secondary3 text-summary">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button className="btn-reserve">Reserve a Table</Button>
        </div>
        <div className="div-right">
          <div className="div-img">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
