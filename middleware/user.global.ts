// // 1. aspida/fetchパターン
// export default defineNuxtRouteMiddleware(async (to) => {
//   const { $client } = useNuxtApp();

//   const { data, status, error, refresh, clear } = await useAsyncData(
//     "aspida01",
//     () => $client.users.$get()
//   );

//   console.log(data.value);
// });

// 2. aspida/axiosパターン
import { useUsers } from "~/stores/user";

export default defineNuxtRouteMiddleware(async (to) => {
  const { $clientAxios } = useNuxtApp();
  const { changeUsersState } = useUsers();

  const { data, status, error, refresh, clear } = await useAsyncData(
    "aspida02",
    () => $clientAxios.users.$get()
  );

  if (import.meta.server) {
    changeUsersState(data.value);
    console.log("SSR!!!!");
  }
});
