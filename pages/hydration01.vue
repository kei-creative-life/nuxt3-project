<script setup lang="ts">
// 🚨 Hydration エラーが起きる
// そもそもHydrationエラーとは？
// サーバーでレンダリングされたHTMLとクライアントでレンダリングされたものが違うことで起きる

// 1. SSR時: users.value = [] の状態でレンダリング -->
// 2. 最初のマウント時: users.value = []
// 3. onMountedが実行され、APIからデータを取得
// users.value = ref([
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//   },{...}
// ]);

import type { User } from "~/types/user";

const users = ref<User[]>([]); // サーバー&クライアント両方で実行される
const isLoading = ref(true); // サーバー&クライアント両方で実行される

// クライアントのみで実行される
onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  users.value = await res.json();
  isLoading.value = false;
});
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
