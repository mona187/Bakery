import Cakes from "../products";
import "../App.css";
import BakeryItems from "./BakeryItems";
import { Cakestyle } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
const CakeList = () => {
  const [query, setQuery] = useState("");

  const cakelist = Cakes.filter(
    (cake) =>
      cake.name.toLowerCase().includes(query) ||
      cake.name.toUpperCase().includes(query) ||
      cake.price.toString().includes(query)
  ).map((cake) => (
    <BakeryItems
      name={cake.name}
      price={cake.price}
      image={cake.image}
      key={cake.id}
    />
  ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Cakestyle>{cakelist}</Cakestyle>;
    </div>
  );
};
export default CakeList;
