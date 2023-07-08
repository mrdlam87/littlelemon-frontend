import {
  IoCalendar,
  IoCall,
  IoDocumentText,
  IoMail,
  IoPeople,
  IoPerson,
  IoTime,
} from "react-icons/io5";
import "./Reservations.scss";
import { CustomInput } from "../../components/input/CustomInput";
import { Divider } from "@chakra-ui/react";
import CustomButton from "../../components/button/CustomButton";
import CustomRadio from "../../components/radio/CustomRadio";
import CustomSelect from "../../components/select/CustomSelect";

const Reservations = () => {
  const seatingOptions = ["Indoor", "Outdoor"];
  const timeOptions = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const handleChange = (option) => console.log(option);

  return (
    <div className="div-reservations" role="img">
      <div className="overlay"></div>
      <div className="content container">
        <div className="div-left">
          <h1 className="title-display primary2">Reservations</h1>
          <div className="div-form">
            <div className="div-input-group">
              <CustomInput
                icon={<IoCalendar className="icon primary1" />}
                type="date"
              />
              {/* <CustomInput
                icon={<IoTime className="icon primary1" />}
                type="time"
              /> */}
              <CustomSelect
                options={timeOptions}
                icon={<IoTime className="icon primary1" />}
              />
            </div>
            <div className="div-input-group">
              <CustomRadio
                name="seating"
                options={seatingOptions}
                value="Indoor"
                onChange={handleChange}
              />
              <CustomInput
                icon={<IoPeople className="icon primary1" />}
                type="number"
                placeholder="No. of guests"
              />
            </div>
            <Divider />
            <CustomInput
              icon={<IoPerson className="icon primary1" />}
              type="text"
              placeholder="Full name"
            />
            <CustomInput
              icon={<IoMail className="icon primary1" />}
              type="text"
              placeholder="Email address"
            />
            <CustomInput
              icon={<IoCall className="icon primary1" />}
              type="text"
              placeholder="Phone number"
            />
            <CustomInput
              icon={<IoDocumentText className="icon primary1" />}
              type="text"
              placeholder="Occasion (optional)"
            />
            <div>
              <CustomButton>Reserve a Table</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
