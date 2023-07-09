import "./ReservationForm.scss";
import {
  IoCalendar,
  IoCall,
  IoDocumentText,
  IoMail,
  IoPeople,
  IoPerson,
  IoTime,
} from "react-icons/io5";
import { Divider } from "@chakra-ui/react";
import { CustomInput } from "../../../components/input/CustomInput";
import CustomButton from "../../../components/button/CustomButton";
import CustomRadio from "../../../components/radio/CustomRadio";
import CustomSelect from "../../../components/select/CustomSelect";
import { Formik } from "formik";

const ReservationForm = () => {
  const seatingOptions = ["Indoor", "Outdoor"];
  const timeOptions = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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

  const validate = (values) => {
    const errors = {};

    if (!values.date) {
      errors.date = "Required";
    } else if (new Date(values.date).getDate() < new Date().getDate()) {
      errors.date = "Invalid date";
    }

    if (!values.time) {
      errors.time = "Required";
    } else if (new Date(values.date).getDate() < new Date().getDate()) {
      errors.time = "Invalid time";
    }

    if (!values.guests) {
      errors.guests = "Required";
    }

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^[0-9]{10}$/i.test(values.phone)) {
      errors.phone = "Invalid phone number (10 digits required)";
    }

    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
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
              placeholder="Select time"
            />
            <CustomSelect
              name="time"
              options={timeOptions}
              icon={<IoTime className="icon primary1" />}
              placeholder="Select time"
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
            <CustomButton type="submit">Reserve a Table</CustomButton>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ReservationForm;
