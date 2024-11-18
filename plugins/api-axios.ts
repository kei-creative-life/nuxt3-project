import axios from "axios";
import aspida from "@aspida/axios";
import api from "../api/$api";

export default defineNuxtPlugin(() => {
  const fetchConfig: Required<Parameters<typeof aspida>>[1] = {
    baseURL: "https://jsonplaceholder.typicode.com",
  };

  const clientAxios = api(aspida(axios, fetchConfig));

  return {
    provide: {
      clientAxios,
    },
  };
});
