import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import "./CustomInput.scss";

export const CustomInput = ({ name, type, placeholder, icon }) => {
  return (
    <InputGroup className="input-group">
      <InputLeftElement pointerEvents="none" className="input-left">
        {icon}
      </InputLeftElement>
      <Input
        id={name}
        name={name}
        className="input"
        variant="filled"
        type={type}
        placeholder={placeholder}
      />
    </InputGroup>
  );
};
