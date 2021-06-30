import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";
class CakeStore {
  cakes = [];

  constructor() {
    makeObservable(this, {
      cakes: observable,
      cakeDelete: action,
    });
  }
  fetchCakes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cakes");
      this.cakes = response.data;
    } catch (error) {
      console.error("fetchCakes:", error);
    }
  };
  cakeDelete = async (cakeId) => {
    try {
      await axios.delete(`http://localhost:8000/cakes/${cakeId}`);
      const updatedCakes = this.cakes.filter((cake) => cake.id !== +cakeId);
      this.cakes = updatedCakes;
    } catch (error) {
      console.error(error);
    }
  };
  // cakeDelete = (cakeId) => {
  //   const updatedCakes = this.cakes.filter((cake) => cake.id !== cakeId);
  //   this.cakes = updatedCakes;
  // };

  // cakeCreate = async (newCake) => {
  //   try{
  //     const response = await
  //   newCake.id = this.cakes.length + 1;
  //   newCake.slug = slugify(newCake.name);
  //   this.cakes.push(newCake);
  // };
  cakeUpdate = (updateCake) => {
    const cake = this.cakes.find((cake) => cake.id === updateCake.id);
    cake.name = updateCake.name;
    cake.price = updateCake.price;
    cake.description = updateCake.description;
    cake.image = updateCake.image;

    cake.slug = slugify(updateCake.name);
  };
}
// const updatedCakes=this.cakes.filter((cake)=> cake.id==cakeId)
// this.cakes=updatesCakes

const cakeStore = new CakeStore();
cakeStore.fetchCakes();

export default cakeStore;
