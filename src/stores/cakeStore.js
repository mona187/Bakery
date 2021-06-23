import cakes from "../products";
import { makeAutoObservable } from "mobx";
class CakeStore {
  cakes = cakes;

  constructor() {
    makeAutoObservable(this);
  }
  cakeDelete = (cakeid) => {
    const updatedCakes = this.cakes.filter((cake) => cake.id !== cakeid);
    this.cakes = updatedCakes;
  };
}

const cakeStore = new CakeStore();

export default cakeStore;
