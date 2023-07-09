import "./Reservations.scss";
import ReservationForm from "./reservation-form/ReservationForm";

const Reservations = () => {
  return (
    <div className="div-reservations" role="img">
      <div className="overlay"></div>
      <div className="content container">
        <div className="div-left">
          <h1 className="title-display primary2">Reservations</h1>
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};

export default Reservations;
