import { ErrorMessage, Field } from "formik";
import "./CustomSelect.scss";
import { InputGroup, InputLeftElement, Select } from "@chakra-ui/react";

const CustomSelect = ({ name, options, placeholder, icon }) => {
  return (
    <div className="div-select">
      <InputGroup className="select-input-group">
        <InputLeftElement pointerEvents="none" className="input-left">
          {icon}
        </InputLeftElement>
        <Field name={name}>
          {({ field, form, meta }) => (
            <Select
              id={name}
              {...field}
              isInvalid={meta.error && meta.touched}
              placeholder={placeholder}
              variant="filled"
              className="select"
              iconSize={100}
              errorBorderColor="red.400"
              aria-label={`${name}-label`}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          )}
        </Field>
      </InputGroup>
      <ErrorMessage name={name} className="error-message" component="div" />
    </div>
  );
};

export default CustomSelect;
