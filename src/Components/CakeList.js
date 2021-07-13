import "../App.css";
// styles
import { Cakestyle, AiFillPlusCircleStyled } from "../styles";
// useState
import { useState } from "react";
// components
import CakeItems from "./CakeItems";
import SearchBar from "./SearchBar";
import CakeModal from "./modals/CakeModal";
// store
import cakeStore from "../stores/cakeStore";
import authStore from "../stores/authStore";
// mobx
import { observer } from "mobx-react-lite";

const CakeList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const cakelist = cakeStore.cakes
    .filter(
      (cake) =>
        cake.name.toLowerCase().includes(query.toLowerCase()) ||
        cake.price.toString().includes(query)
    )
    .map((cake) => <CakeItems cake={cake} key={cake.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {authStore.user && (
        <AiFillPlusCircleStyled size="2em" onClick={openModal} />
      )}
      <CakeModal isOpen={isOpen} closeModal={closeModal} />
      <Cakestyle>{cakelist}</Cakestyle>;
    </div>
  );
};
export default observer(CakeList);
