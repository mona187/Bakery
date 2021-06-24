import "../App.css";
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import UpdateButton from "./buttons/UpdateButton";
const BakeryItems = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/cakes/${props.cake.slug}`}>
        <img alt={props.cake.name} src={props.cake.image} />
      </Link>
      <p>{props.cake.name}</p>
      <p>{props.cake.price} KD</p>
      <UpdateButton cake={props.cake} />
      <DeleteButton
        cakeId={props.cake.id}
        // setCake={props.setCake}
      />
    </ProductWrapper>
  );
};

export default observer(BakeryItems);
