import { defineStore } from "pinia";
import { Store } from "../StoreEnums";
import ApiService from "@/utils/ApiService";

ApiService.init();

export const useAuthStore = defineStore(Store.AUTH, {
  state: () => ({
    token: "",
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    async authLogin(phone: string, password: string): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        /* ----------------------------- Testing purpose ---------------------------- */
        if (password == "admin") {
          ApiService.get("/")
            .then((val) => console.log("store", val))
            .catch((err) => console.log("storeErr", err));
          resolve();
        } else {
          reject("err");
        }
      });
    },
    async doRegister(phone: string, password: string): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        ApiService.post("/register", {
          phone,
          password,
        } as any)
          .then((val) => resolve())
          .catch((err) => reject(err));
      });
    },
  },
});
