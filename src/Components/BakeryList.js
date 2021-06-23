// import Cakes from "../products";
import "../App.css";
import BakeryItems from "./BakeryItems";
import { Cakestyle } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import cakeStore from "../stores/cakeStore";
import { observer } from "mobx-react-lite";
const CakeList = (props) => {
  const [query, setQuery] = useState("");

  const cakelist = cakeStore.cakes
    .filter(
      (cake) =>
        cake.name.toLowerCase().includes(query) ||
        cake.name.toUpperCase().includes(query) ||
        cake.price.toString().includes(query)
    )
    .map((cake) => (
      <BakeryItems
        cake={cake}
        key={cake.id}
        // setCake={props.setCake}
        // cakeDelete={props.cakeDelete}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Cakestyle>{cakelist}</Cakestyle>;
    </div>
  );
};
export default observer(CakeList);
