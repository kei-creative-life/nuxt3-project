<script setup>
import { ref, onMounted } from "vue";

const { cart, count, addToCart, increment } = useSharedCart();
const currentRequestId = ref(Math.random().toString(36).substring(7));
const requestTime = ref(new Date().toISOString());

// サーバーサイドで実行される処理
const isServer = process.server;
if (isServer) {
  console.log(`[Server] Cart state at ${requestTime.value}:`, cart.value);
  console.log(`[Server] Request ID: ${currentRequestId.value}`);
}

// クライアントサイドで実行される処理
onMounted(() => {
  console.log(`[Client] Cart state at ${requestTime.value}:`, cart.value);
  console.log(`[Client] Request ID: ${currentRequestId.value}`);
});

const products = [
  { id: 1, name: "MacBook Pro", price: 200000 },
  { id: 2, name: "AirPods Pro", price: 30000 },
  { id: 3, name: "iPhone 15", price: 120000 },
];

const addProduct = (product) => {
  addToCart(product);
  console.log(`[Client] Added product. New cart state:`, cart.value);
};

increment();
console.log(`count: ${count.value}`);
</script>

<template>
  <div class="p-4">
    count: {{ count }}

    <div class="mb-4 p-4 bg-yellow-100 rounded">
      <h2 class="text-lg font-bold">デバッグ情報</h2>
      <div class="text-sm">
        <p>現在のリクエストID: {{ currentRequestId }}</p>
        <p>リクエスト時刻: {{ requestTime }}</p>
        <p>カート最終更新: {{ cart.lastUpdated }}</p>
        <p>カート更新したリクエストID: {{ cart.requestId }}</p>
      </div>
    </div>

    <div class="mb-4">
      <h2 class="text-xl font-bold">商品一覧</h2>
      <div class="grid grid-cols-1 gap-4 mt-4">
        <div
          v-for="product in products"
          :key="product.id"
          class="p-4 border rounded"
        >
          <h3>{{ product.name }}</h3>
          <p>¥{{ product.price.toLocaleString() }}</p>
          <button
            @click="addProduct(product)"
            class="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2 class="text-xl font-bold">現在のカート</h2>
      <div class="mt-2">
        <div v-if="cart.items.length === 0" class="text-gray-500">
          カートは空です
        </div>
        <div v-else>
          <div v-for="item in cart.items" :key="item.id" class="p-2 border-b">
            {{ item.name }} - ¥{{ item.price.toLocaleString() }}
          </div>
          <div class="mt-2 font-bold">
            合計: ¥{{ cart.total.toLocaleString() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
