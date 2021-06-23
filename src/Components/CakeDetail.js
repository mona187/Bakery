import { useState } from "react/cjs/react.development";
import { DetailWrapper } from "../styles";
import CakeList from "./BakeryList";
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";
import cakeStore from "../stores/cakeStore";
import { observer } from "mobx-react";
const CakeDetail = () => {
  const cakeSlug = useParams().cakeSlug;
  const cake = cakeStore.cakes.find((cake) => cake.slug === cakeSlug);
  if (!cake) return <Redirect to="/cakes" />;
  return (
    <DetailWrapper>
      <img src={cake.image} alt={cake.name} />
      <p>{cake.name}</p>
      <p>{cake.description}</p>
      <p>{cake.price}KD</p>
      <DeleteButton
        // cakeDelete={props.cakeDelete}
        cakeId={cake.id}
        // setCake={props.setCake}
      />
      <button onClick={() => props.setCake(null)}>Back</button>
    </DetailWrapper>
  );
};

export default observer(CakeDetail);
