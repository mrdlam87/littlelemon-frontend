import "./CustomSelect.scss";
import { InputGroup, InputLeftElement, Select } from "@chakra-ui/react";

const CustomSelect = ({ name, options, placeholder, icon }) => {
  return (
    <InputGroup className="select-input-group">
      <InputLeftElement pointerEvents="none" className="input-left">
        {icon}
      </InputLeftElement>
      <Select
        id={name}
        name={name}
        placeholder={placeholder}
        variant="filled"
        className="select"
        iconSize={100}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </InputGroup>
  );
};

export default CustomSelect;
