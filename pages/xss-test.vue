<!-- MEMO: XSSのテストページです（実際のサイトでは使用しないでください） -->
<!-- payload -->
<!-- ex1: <img src="x" onerror="alert('XSS')"> -->
<!-- ex2: <div onmouseover="alert('XSS')">ホバーしてください</div> -->

<template>
  <div>
    <h1>XSS Test Page</h1>

    <!-- 危険な実装: v-htmlを使用してユーザー入力を直接レンダリング -->
    <div v-html="userInput"></div>

    <!-- ユーザー入力フォーム -->
    <div class="input-section">
      <input
        v-model="userInput"
        placeholder="XSSペイロードを入力してください"
      />
      <button @click="displayInput">表示</button>
    </div>

    <!-- 危険な実装: innerHTMLを使用 -->
    <div ref="dangerousDiv"></div>
  </div>
</template>

<script setup>
const userInput = ref("");
const dangerousDiv = ref(null);

// 危険な実装: innerHTMLを使用してユーザー入力を直接挿入
const displayInput = () => {
  if (dangerousDiv.value) {
    dangerousDiv.value.innerHTML = userInput.value;
  }
};
</script>

<style scoped>
.input-section {
  margin: 20px 0;
}

input {
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px 16px;
}
</style>
