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
  cakeUpdate = (updateCake) => {
    const cake = this.cakes.find((cake) => cake.id === updateCake.id);
    cake.name = updateCake.name;
    cake.price = updateCake.price;
    cake.description = updateCake.description;
    cake.image = updateCake.image;

    cake.slug = slugify(updateCake.name);
  };
}

const cakeStore = new CakeStore();

export default cakeStore;
