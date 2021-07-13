import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CakeStore {
  cakes = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCakes = async () => {
    try {
      const response = await instance.get("/cakes");
      this.cakes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchCakes: ", error);
    }
  };

  cakeDelete = async (cakeId) => {
    try {
      await instance.delete(`/cakes/${cakeId}`);
      const updatedCakes = this.cakes.filter((cake) => cake.id !== cakeId);
      this.cakes = updatedCakes;
    } catch (error) {
      console.error(error);
    }
  };

  cakeCreate = async (newCake, bakery) => {
    try {
      const formData = new FormData();
      for (const key in newCake) formData.append(key, newCake[key]);

      const response = await instance.post(
        `/bakeries/${bakery.id}/cakes`,
        formData
      );
      this.cakes.push(response.data);
      bakery.cakes.push({ id: response.data.id });
    } catch (error) {
      console.error(error);
    }
  };

  cakeUpdate = async (updateCake) => {
    try {
      const formData = new FormData();
      for (const key in updateCake) formData.append(key, updateCake[key]);
      const response = await instance.put(`/cakes/${updateCake.id}`, formData);
      const cake = this.cakes.find((cake) => cake.id === response.data.id);
      for (const key in cake) cake[key] = response.data[key];
    } catch (error) {
      console.error(error);
    }
  };

  getCakeById = (cakeId) => this.cakes.find((cake) => cake.id === cakeId);
}

const cakeStore = new CakeStore();
cakeStore.fetchCakes();

export default cakeStore;
