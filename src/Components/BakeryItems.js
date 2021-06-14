import "../App.css";
import { ProductWrapper } from "../styles";
const BakeryItems = (props) => {
  return (
    <ProductWrapper>
      <img
        alt={props.cake.name}
        src={props.cake.image}
        onClick={() => props.setCake(props.cake)}
      />
      <p>{props.cake.name}</p>
      <p>{props.cake.price} KD</p>
    </ProductWrapper>
  );
};

export default BakeryItems;
