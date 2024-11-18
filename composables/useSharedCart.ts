// 危険なコード例：ミュータブルな状態を共有する Composable
// composables/useSharedCart.ts

const count = ref(0);

export const useSharedCart = () => {
  // 問題なし！
  const cart = ref({
    items: [],
    total: 0,
    lastUpdated: "", // 最終更新時刻を追加
    requestId: "", // リクエストIDを追加
  });

  const addToCart = (item) => {
    cart.value.items.push(item);
    cart.value.total += item.price;
    cart.value.lastUpdated = new Date().toISOString();
    // ユニークなリクエストIDを生成w
    cart.value.requestId = Math.random().toString(36).substring(7);
  };

  const increment = () => {
    count.value++;
  };

  return {
    count,
    cart,
    increment,
    addToCart,
  };
};
