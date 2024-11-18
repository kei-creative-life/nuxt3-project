<script setup lang="ts">
// 問題なし
// ✅ 利点1: SSRでデータ取得が完了するまでレンダリングを待機
// ✅ 利点2: データがHTMLに含まれた状態でクライアントに送信される
// ✅ 利点3: クライアント側で再度フェッチする必要がない
// const users = ref([]);

// const {
//   data: users,
//   status, // 'idle' | 'loading' | 'error' | 'success'
//   error,
// } = await useAsyncData("users", () =>
//   $fetch("https://jsonplaceholder.typicode.com/users")
// );

// // 型安全な状態判定
// const isLoading = computed(() => status.value === "pending");

// ########################################## //

// 問題あり1: Hydration
// 1. SSR時: users.value = [] の状態でレンダリング -->
// 2. 最初のマウント時: users.value = []
// 3. onMountedが実行され、APIからデータを取得
// users.value = ref([
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//   },...
// ]);

// const users = ref([]);

// // 🚨 問題点1: SSRとクライアントでデータフェッチのタイミングが異なる
// onMounted(async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   users.value = await res.json();
// });

// ########################################## //

// 問題あり2: Hydration
const isLoading = ref(true);
const users = ref([]);

// // 🚨 問題点2: fetchの完了を待たずにレンダリングが始まる
const fetchProducts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  users.value = await res.json();
  isLoading.value = false;
};

// // SSRのレスポンスが返される時点で
// // まだデータが入っていない可能性がある
fetchProducts();

// ########################################## //
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <!-- SSRとクライアントで同じデータが表示される -->
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
