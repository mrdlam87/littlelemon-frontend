import "./ReservationForm.scss";
import { useContext } from "react";
import { ReservationContext } from "../../../contexts/reservation.context";
import { Formik } from "formik";
import {
  IoCalendar,
  IoCall,
  IoDocumentText,
  IoMail,
  IoPeople,
  IoPerson,
  IoTime,
} from "react-icons/io5";
import { Divider, useToast } from "@chakra-ui/react";
import { CustomInput } from "../../../components/input/CustomInput";
import CustomButton from "../../../components/button/CustomButton";
import CustomRadio from "../../../components/radio/CustomRadio";
import CustomSelect from "../../../components/select/CustomSelect";
import CustomToast from "../../../components/toast/CustomToast";
import { validate } from "../../../utils/validation";

const ReservationForm = ({ onSuccess }) => {
  const seatingOptions = ["Indoor", "Outdoor"];
  const guestsOptions = Array.from({ length: 10 }, (_, i) => i + 1).map(
    (n) => `${n} pax`
  );
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    seating: "Indoor",
    guests: "",
    occasion: "",
  };
  const {
    availableTimes,
    fetchAvailableTimes,
    submitReservation,
    isSubmitting,
  } = useContext(ReservationContext);

  const toast = useToast();

  const failToast = () => {
    toast({
      position: "top",
      duration: 5000,
      isClosable: true,
      render: ({ onClose }) => (
        <CustomToast
          title="Reservation incomplete!"
          description="We could not make your reseveration."
          status="error"
          onClose={onClose}
        />
      ),
    });
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      const result = await submitReservation(values);
      await resetForm();
      onSuccess(values);

      !result && failToast();
    } catch (error) {
      failToast();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="div-input-group">
            <CustomInput
              name="date"
              type="date"
              icon={<IoCalendar className="icon primary1" />}
              placeholder="Select date"
              onChange={(e) => {
                handleChange(e);
                fetchAvailableTimes(new Date(e.target.value));
              }}
            />
            <CustomSelect
              name="time"
              options={availableTimes}
              icon={<IoTime className="icon primary1" />}
              placeholder={
                availableTimes.length > 0 ? "Select time" : "Select date first"
              }
            />
          </div>
          <div className="div-input-group">
            <CustomRadio
              name="seating"
              options={seatingOptions}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.seating}
            />
            <CustomSelect
              name="guests"
              options={guestsOptions}
              icon={<IoPeople className="icon primary1" />}
              placeholder="No. of guests"
            />
          </div>
          <Divider />
          <CustomInput
            name="name"
            type="text"
            icon={<IoPerson className="icon primary1" />}
            placeholder="Full name"
          />
          <CustomInput
            name="email"
            type="email"
            icon={<IoMail className="icon primary1" />}
            placeholder="Email address"
          />
          <CustomInput
            type="text"
            name="phone"
            icon={<IoCall className="icon primary1" />}
            placeholder="Phone number"
          />
          <CustomInput
            name="occasion"
            type="text"
            icon={<IoDocumentText className="icon primary1" />}
            placeholder="Occasion (optional)"
          />
          <div>
            <CustomButton
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Reserve a Table
            </CustomButton>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ReservationForm;
