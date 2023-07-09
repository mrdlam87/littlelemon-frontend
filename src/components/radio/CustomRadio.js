import "./CustomRadio.scss";
import { Box, ButtonGroup, useRadio, useRadioGroup } from "@chakra-ui/react";

const Radio = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const radio = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...radio}
        cursor="pointer"
        _checked={{
          bg: "#eee",
          color: "#1a202c",
        }}
        className="radio"
      >
        {props.children}
      </Box>
    </Box>
  );
};

const CustomRadio = ({ name, options, value, onChange, onBlur }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue: value,
    onChange,
  });

  const group = getRootProps();

  return (
    <ButtonGroup
      size="sm"
      isAttached
      variant="outline"
      className="button-group"
      {...group}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <Radio key={value} {...radio}>
            {value}
          </Radio>
        );
      })}
    </ButtonGroup>
  );
};

export default CustomRadio;
