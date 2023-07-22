import { Spinner } from "@chakra-ui/react";
import "./custom-button.scss";

const CustomButton = ({
  children,
  type,
  onClick,
  className,
  disabled,
  isLoading,
}) => {
  return (
    <button
      type={type || "button"}
      className={`btn secondary4 ${className} ${isLoading && "loading"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#ee9972"
          size="xl"
          className="spinner"
        />
      )}
    </button>
  );
};

export default CustomButton;
