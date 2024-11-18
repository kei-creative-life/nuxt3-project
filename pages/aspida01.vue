<template>
  <ul>
    <li v-for="(user, index) in users">{{ user.name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { useUsers } from "~/stores/user";

const { users } = useUsers();
</script>
