import { DeleteButtonStyle } from "../../styles";
import cakeStore from "../../stores/cakeStore";
const DeleteButton = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    cakeStore.cakeDelete(props.cakeId);
  };
  return <DeleteButtonStyle onClick={handleDelete}>Delete</DeleteButtonStyle>;
};

export default DeleteButton;
