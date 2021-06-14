import { useState } from "react/cjs/react.development";
import { DetailWrapper } from "../styles";
import CakeList from "./BakeryList";

const CakeDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.cake.image} alt={props.cake.name} />
      <p>{props.cake.name}</p>
      <p>{props.cake.description}</p>
      <p>{props.cake.price}</p>
    </DetailWrapper>
  );
};

export default CakeDetail;
