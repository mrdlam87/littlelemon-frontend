import "./CustomButton.scss";

const CustomButton = ({ children, type, onClick, className }) => {
  return (
    <button
      type={type || "button"}
      className={`btn secondary4 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
