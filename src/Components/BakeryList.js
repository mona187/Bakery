import Cakes from "../products";
import "../App.css";
import BakeryItems from "./BakeryItems";
const BakeryList = () => {
  const CakeList = Cakes.map((Cake) => (
    <BakeryItems
      name={Cake.name}
      price={Cake.price}
      image={Cake.image}
      key={Cake.id}
    />
  ));
  return CakeList;
};

export default BakeryList;
