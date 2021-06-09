import "../App.css";
import { ProductWrapper } from "../styles";
const BakeryItems = (props) => {
  return (
    <ProductWrapper>
      <img alt={props.name} src={props.image} />
      <p>{props.name}</p>
      <p>{props.price} KD</p>
    </ProductWrapper>
  );
};

export default BakeryItems;
