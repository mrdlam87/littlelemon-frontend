import "./SuccessModal.scss";
import {
  Box,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import CustomButton from "../../../components/button/CustomButton";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ isOpen, form }) => {
  const { name, date, time, guests, seating } = form;
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} isCentered size="xl">
      <ModalOverlay backdropFilter="blur(5px)" bg="blackAlpha.700" />
      <ModalContent className="success-modal">
        <Box className="outside-modal">
          <IoCheckmarkCircle className="icon" />
          <h2>Your reservation was successful!</h2>
        </Box>
        <ModalBody className="content">
          <h2>Reservation Details</h2>
          <Divider />
          <p>{name}</p>
          <p>
            {new Date(date).toDateString()} @ {time}
          </p>
          <p>
            {guests} {seating && seating.toLowerCase()} seating
          </p>
          <div>
            <CustomButton className="modal-btn" onClick={() => navigate("/")}>
              Return home
            </CustomButton>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
