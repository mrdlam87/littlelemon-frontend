import "./custom-toast.scss";
import { Box } from "@chakra-ui/react";
import {
  IoCheckmarkCircle,
  IoCloseCircleOutline,
  IoAlertCircle,
  IoInformationCircle,
} from "react-icons/io5";

const CustomToast = ({ title, description, status, onClose }) => {
  const renderIcon = (status) => {
    switch (status) {
      case "info":
        return <IoInformationCircle className="icon" />;
      case "warning":
      case "error":
        return <IoAlertCircle className="icon" />;
      default:
        return <IoCheckmarkCircle className="icon" />;
    }
  };

  return (
    <Box className={`toast ${status}`}>
      {renderIcon(status)}
      <Box className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </Box>
      <IoCloseCircleOutline className="icon close" onClick={onClose} />
    </Box>
  );
};

export default CustomToast;
