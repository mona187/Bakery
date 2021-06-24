import cakes from "../products";
import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

class CakeStore {
  cakes = cakes;

  constructor() {
    makeObservable(this, {
      cakes: observable,
      cakeDelete: action,
    });
  }
  cakeDelete = (cakeId) => {
    this.cakes = this.cakes.filter((cake) => cake.id !== cakeId);
  };
  cakeCreate = (newCake) => {
    newCake.id = this.cakes.length + 1;
    newCake.slug = slugify(newCake.name);
    this.cakes.push(newCake);
  };
}

const cakeStore = new CakeStore();

export default cakeStore;
