import type { AspidaClient } from "aspida";
import type { Methods as Methods_1xhiioa } from "./users";

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? "" : baseURL).replace(/\/$/, "");
  const PATH0 = "/users";
  const GET = "GET";

  return {
    users: {
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa["get"]["resBody"]>(
          prefix,
          PATH0,
          GET,
          option
        ).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1xhiioa["get"]["resBody"]>(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
