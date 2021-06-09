import Cakes from "../products";
import "../App.css";
import BakeryItems from "./BakeryItems";
import { CakeList } from "../styles";
const BakeryList = () => {
  const cakelist = Cakes.map((Cake) => (
    <BakeryItems
      name={Cake.name}
      price={Cake.price}
      image={Cake.image}
      key={Cake.id}
    />
  ));

  return <CakeList>{cakelist}</CakeList>;
};
export default BakeryList;
