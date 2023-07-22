import "./about.scss";
import image1 from "../../../assets/images/Mario and Adrian b.jpg";
import image2 from "../../../assets/images/restaurant.jpg";

const About = () => {
  return (
    <div className="div-about container grid grid--2-cols">
      <div>
        <h1 className="title-display primary1">Little Lemon</h1>
        <h2 className="title-subtitle secondary1">Chicago</h2>
        <div className="div-text">
          <p className="secondary4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
      </div>
      <div className="div-collage">
        <div className="div-img">
          <img src={image1} alt="" />
        </div>
        <div className="div-img">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default About;
