import { useState } from "react";
import "./Reservations.scss";
import ReservationForm from "./reservation-form/ReservationForm";
import SuccessModal from "./success-modal/SuccessModal";

const Reservations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [successForm, setSuccessForm] = useState({});

  const onSuccess = (form) => {
    setSuccessForm(form);
    setIsOpen(true);
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
      <SuccessModal isOpen={isOpen} form={successForm} />
    </>
  );
};

export default Reservations;
