// styles
import { DetailWrapper } from "../styles";
// components
import DeleteButton from "./buttons/DeleteButton";
// libraries
import { useParams, Redirect, Link } from "react-router-dom";

// mobx
import cakeStore from "../stores/cakeStore";
import { observer } from "mobx-react";
const CakeDetail = () => {
  const cakeSlug = useParams().cakeSlug;
  const cake = cakeStore.cakes.find((cake) => cake.slug === cakeSlug);
  // console.log(cakeStore.cakes);
  if (!cake) return <Redirect to="/cakes" />;
  return (
    <DetailWrapper>
      <img src={cake.image} alt={cake.name} />
      <p>{cake.name}</p>
      <p>{cake.description}</p>
      <p>{cake.price}KD</p>
      <DeleteButton cakeId={cake.id} />
      <Link to="/cakes">
        <button>Back</button>
      </Link>
    </DetailWrapper>
  );
};

export default observer(CakeDetail);
