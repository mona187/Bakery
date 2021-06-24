import { UpdateButtonStyle } from "../../styles";
import CakeModal from "../modals/CakeModal";
import { useState } from "react";
// import
const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <UpdateButtonStyle onClick={openModal}>Update</UpdateButtonStyle>;
      <CakeModal isOpen={isOpen} closeModal={closeModal} oldCake={props.cake} />
    </div>
  );
};

export default UpdateButton;
