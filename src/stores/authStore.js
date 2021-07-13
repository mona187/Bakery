import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      const res = await instance.post("/signup", newUser);
      this.user = decode(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.userData = decode(res.data.token);
      console.log(this.user);
    } catch (error) {
      console.error(error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
