<script setup>
const windowWidth = ref(0);

onMounted(() => {
  // サーバーサイドではwindowオブジェクトが存在しないため、
  // クライアントとサーバーで異なる値になります
  windowWidth.value = window.innerWidth;
});
</script>

<template>
  <div>
    <p>Window Width: {{ windowWidth }}px</p>
  </div>
</template>
