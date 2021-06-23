import { DeleteButtonStyle } from "../../styles";
import cakeStore from "../../stores/cakeStore";
const DeleteButton = (props) => {
  const handleDelete = () => {
    cakeStore.cakeDelete(props.cakeid);
  };
  return <DeleteButtonStyle onClick={handleDelete}>Delete</DeleteButtonStyle>;
};

export default DeleteButton;
