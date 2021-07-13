import "../App.css";
// styles
import { ProductWrapper } from "../styles";
// button
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
// libraries
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
// stores
import authStore from "../stores/authStore";
const CakeItems = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/cakes/${props.cake.slug}`}>
        <img alt={props.cake.name} src={props.cake.image} />
      </Link>
      <p>{props.cake.name}</p>
      <p>{props.cake.price} KD</p>
      {authStore.user && (
        <>
          <UpdateButton cake={props.cake} />
          <DeleteButton cakeId={props.cake.id} />
        </>
      )}
    </ProductWrapper>
  );
};

export default observer(CakeItems);
