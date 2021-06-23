import "../App.css";
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
const BakeryItems = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/cakes/${props.cake.id}`}>
        <img alt={props.cake.name} src={props.cake.image} />
      </Link>
      <p>{props.cake.name}</p>
      <p>{props.cake.price} KD</p>
      <DeleteButton
        cakeDelete={props.cakeDelete}
        cakeId={props.cake.id}
        // setCake={props.setCake}
      />
    </ProductWrapper>
  );
};

export default BakeryItems;
