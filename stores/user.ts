import type { User } from "~/api/types/user";

export const changeUsersState = (args: User[] | null) => {
  const u = useState("users");

  if (args) {
    u.value = [...args];
  }
};

export const useUsers = () => {
  const users = useState<User[]>("users", () => {
    return [];
  });

  return { users, changeUsersState };
};
