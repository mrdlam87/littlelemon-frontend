import "./CustomButton.scss";

const CustomButton = ({ children, onClick, className }) => {
  return (
    <button className={`btn secondary4 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
