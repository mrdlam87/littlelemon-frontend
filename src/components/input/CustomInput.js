import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import "./CustomInput.scss";
import { ErrorMessage, Field } from "formik";

export const CustomInput = ({ name, type, placeholder, icon, onChange }) => {
  return (
    <div className="div-input">
      <InputGroup className="input-group">
        <InputLeftElement pointerEvents="none" className="input-left">
          {icon}
        </InputLeftElement>
        <Field name={name}>
          {({ field, form, meta }) => (
            <Input
              id={name}
              type={type}
              {...field}
              isInvalid={meta.error && meta.touched}
              placeholder={placeholder}
              className="input"
              variant="filled"
              errorBorderColor="red.400"
              onChange={onChange || field.onChange}
              aria-label={`${name}-label`}
            />
          )}
        </Field>
      </InputGroup>
      <ErrorMessage name={name} className="error-message" component="div" />
    </div>
  );
};
