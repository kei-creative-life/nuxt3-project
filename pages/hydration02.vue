<script setup lang="ts">
import type { User } from "~/types/user";

const { data: users } = await useAsyncData("users", () =>
  $fetch("https://jsonplaceholder.typicode.com/users")
);
</script>

<template>
  <div>
    {{ users.length === 0 ? "Loading..." : "" }}
    <div v-if="users.length > 0">
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
