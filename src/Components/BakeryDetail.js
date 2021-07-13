import { useParams } from "react-router";
import bakeryStore from "../stores/bakeryStore";
import cakeStore from "../stores/cakeStore";
import { DetailWrapper } from "../styles";
import CakeList from "./CakeList";
import { observer } from "mobx-react";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();
  const bakery = bakeryStore.bakeries.find(
    (bakery) => bakery.slug === bakerySlug
  );
  const cakes = bakery.cakes.map((cake) => cakeStore.getCakeById(cake.id));
  return (
    <>
      <DetailWrapper>
        <h4>{bakery.name}</h4>
        <img src={bakery.image} alt={bakery.name} />
      </DetailWrapper>
      <CakeList cakes={cakes} bakery={bakery} />
    </>
  );
};

export default observer(BakeryDetail);
