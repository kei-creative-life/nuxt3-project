import type { DefineMethods } from "aspida";
import type { User } from "~/types/user";

export type Methods = DefineMethods<{
  get: {
    resBody: User[];
  };
}>;
