import aspida from "@aspida/fetch";
import api from "../api/$api";

export default defineNuxtPlugin(() => {
  const fetchConfig: Required<Parameters<typeof aspida>>[1] = {
    baseURL: "https://jsonplaceholder.typicode.com",
    throwHttpErrors: true,
  };

  const client = api(aspida(fetch, fetchConfig));

  return {
    provide: {
      client,
    },
  };
});
