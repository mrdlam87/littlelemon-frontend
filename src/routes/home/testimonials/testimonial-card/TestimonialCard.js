import "./TestimonialCard.scss";
import star from "../../../../assets/images/star.png";

const TestimonialCard = ({ testimonial }) => {
  const { fullname, username, review, imageUrl } = testimonial;
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="div-img">
          <img src={imageUrl} alt="" />
        </div>
        <div className="div-names">
          <p className="secondary4">{fullname}</p>
          <p className="secondary4">{username}</p>
        </div>
      </div>
      <div className="div-stars">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <p className="secondary4">{review}</p>
    </div>
  );
};

export default TestimonialCard;
