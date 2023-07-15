import { useState } from "react";
import "./Reservations.scss";
import ReservationForm from "./reservation-form/ReservationForm";
import SuccessModal from "./success-modal/SuccessModal";

const Reservations = () => {
  const [isShow, setIsShow] = useState(false);
  const [successForm, setSuccessForm] = useState({});

  const onSuccess = (form) => {
    setSuccessForm(form);
    setIsShow(true);
  };

  return (
    <>
      <div className="div-reservations" role="img">
        <div className="overlay"></div>
        <div className="content container">
          <div className="div-left">
            <h1 className="title-display primary2">Reservations</h1>
            <ReservationForm onSuccess={onSuccess} />
          </div>
        </div>
      </div>
      <SuccessModal isOpen={isShow} form={successForm} />
    </>
  );
};

export default Reservations;
