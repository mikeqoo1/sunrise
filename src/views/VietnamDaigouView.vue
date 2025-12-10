<script setup lang="ts">
import { computed, ref } from "vue";

const items = [
  { name: "北臉代購", price: "NT$ ???? / 件", image: "vietnam/TheNorthFace.png", note: "R庭*1 加菲*1 大熊*1 熊媽*1" },
  { name: "第一順位 UE女款綠色DRYVENT防水衝鋒衣(8E6S0QP)", price: "R庭S號 NT$ ???? / 件", image: "vietnam/8E6S0QP.png", note: "8E6S0QP" },
  { name: "第二順位 UE女款棕色DRYVENT防水衝鋒衣(8CHXEB0)", price: "R庭S號 NT$ ???? / 件", image: "vietnam/8CHXEB0.png", note: "8CHXEB0" },
  { name: "第二順位 UE女款黑色DRYVENT防水衝鋒衣(8CHXJK3)", price: "R庭S號 NT$ ???? / 件", image: "vietnam/8CHXJK3.png", note: "8CHXJK3" },
  { name: "(已購買)經典1996男款黑色DWR防潑水羽絨外套(3C8DGOE)", price: "加菲M號 NT$ 1200 / 件", image: "vietnam/3C8DGOE.jpg", note: "3C8DGOE" },
  { name: "(已購買)經典1996男款黑色DWR防潑水羽絨外套(3C8DGOE)", price: "熊媽M號 NT$ 1200 / 件", image: "vietnam/3C8DGOE.jpg", note: "3C8DGOE" },
  { name: "第一順位 M MOUNTAIN LIGHT TRICLIMATE GTX JACKET(NF0A83RRGOE)", price: "大熊3XL號 NT$ ???? / 件", image: "vietnam/NF0A83RRGOE.jpg", note: "NF0A83RRGOE" },
  { name: "第二順位 M SANGRO DRYVENT JACKET 2.0 - AP(NF0A8DX1JK3)", price: "大熊3XL號 NT$ ???? / 件", image: "vietnam/NF0A8DX1JK3.jpg", note: "NF0A8DX1JK3" },
  { name: "始祖鳥代購", price: "NT$ ???? / 件", image: "vietnam/ARCTERYX.png", note: "大熊*1" },
  { name: "Arcteryx 始祖鳥 Atom Hoody 化纖保暖外套(X00000955602)", price: "大熊2XL號 NT$ ???? / 件", image: "vietnam/X00000955602.jpg", note: "X00000955602" },
  { name: "Arcteryx 始祖鳥 Beta GORE-TEX(X000010513)", price: "振業L號 NT$ ???? / 件", image: "vietnam/X000010513.jpeg", note: "X000010513" },
];

const tabs = [
  { key: "catalog", label: "待購清單" },
  { key: "confirmed", label: "已購清單" },
] as const;

const activeTab = ref<"catalog" | "confirmed">("catalog");

const confirmedOrders = [
  { buyer: "加菲", item: "北臉700系列外套(白)-M", price: 1200, quantity: 1, image: "vietnam/北臉700米白外套.jpeg" },
  { buyer: "大熊", item: "北臉防風外套(黑)-4XL", price: 400, quantity: 1, image: "vietnam/北臉便宜外套.jpeg" },
  { buyer: "大熊", item: "北臉700系列外套(黑)-M", price: 1200, quantity: 1, image: "vietnam/北臉700黑外套.jpeg" },
  { buyer: "腦哲", item: "K-WAY薄外套(黑)", price: 600, quantity: 1, image: "vietnam/K-WAY薄外套黑色.jpeg" },
  { buyer: "腦哲", item: "北臉防風外套(黑)-L", price: 400, quantity: 1, image: "vietnam/北臉便宜外套.jpeg" },
  { buyer: "腦哲", item: "北臉防風外套(黑)-XL", price: 400, quantity: 1, image: "vietnam/北臉便宜外套.jpeg" },
  { buyer: "腦哲", item: "狼牌毛毛外套-L", price: 600, quantity: 1, image: "vietnam/腦哲毛毛外套.jpeg" },
  { buyer: "腦哲", item: "始祖鳥褲子-M", price: 400, quantity: 1, image: "vietnam/腦哲始祖鳥褲.jpeg" },
  { buyer: "帥奎", item: "K-WAY薄外套雙色", price: 600, quantity: 1, image: "vietnam/K-WAY薄外套雙色.jpeg" },
];

const totalAmount = computed(() =>
  confirmedOrders.reduce((sum, order) => sum + order.price * order.quantity, 0),
);

const formatCurrency = (value: number) =>
  value.toLocaleString("zh-TW", { style: "currency", currency: "TWD", maximumFractionDigits: 0 });
</script>

<template>
  <div class="vietnam-page">
    <header class="hero">
      <p class="eyebrow">越南代購</p>
      <div>
        <h1>越南好物簡易清單</h1>
        <p class="lede">查看待購商品或切換到「已購清單」看誰買了什麼與總金額。</p>
      </div>
    </header>

    <div class="tab-bar">
      <button v-for="tab in tabs" :key="tab.key" :class="['tab', { active: activeTab === tab.key }]" type="button"
        @click="activeTab = tab.key">
        {{ tab.label }}
      </button>
    </div>

    <section v-if="activeTab === 'catalog'" class="grid">
      <article v-for="item in items" :key="item.name" class="product-card">
        <div class="thumb">
          <img :src="item.image" :alt="item.name" loading="lazy" />
        </div>
        <div class="info">
          <p class="name">{{ item.name }}</p>
          <p class="price">{{ item.price }}</p>
          <p v-if="item.note" class="note">{{ item.note }}</p>
        </div>
      </article>
    </section>

    <section v-else class="orders">
      <div class="orders-header">
        <div>
          <p class="eyebrow">已經下單</p>
          <h2>已購清單</h2>
        </div>
        <div class="total-pill">總價 {{ formatCurrency(totalAmount) }}</div>
      </div>

      <div class="order-list">
        <article v-for="order in confirmedOrders" :key="`${order.buyer}-${order.item}`" class="order-card">
          <div v-if="order.image" class="order-thumb">
            <img :src="order.image" :alt="order.item" loading="lazy" />
          </div>
          <div class="order-main">
            <p class="buyer">{{ order.buyer }}</p>
            <p class="order-item">{{ order.item }}</p>
          </div>
          <div class="order-meta">
            <span class="quantity">x{{ order.quantity }}</span>
            <span class="price">{{ formatCurrency(order.price) }}</span>
            <span class="subtotal">{{ formatCurrency(order.price * order.quantity) }}</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.vietnam-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero {
  padding: 1.3rem 1.4rem;
  border-radius: 18px;
  background: linear-gradient(145deg, rgba(125, 240, 255, 0.18), rgba(140, 248, 216, 0.06));
  border: 1px solid var(--border);
  display: grid;
  gap: 0.6rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  font-size: 0.82rem;
}

h1 {
  margin-bottom: 0.2rem;
}

.lede {
  color: var(--text-muted);
  max-width: 760px;
}

.tab-bar {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.04);
  padding: 0.35rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  width: fit-content;
}

.tab {
  padding: 0.55rem 0.95rem;
  border-radius: 10px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab:hover {
  color: var(--text-primary);
}

.tab.active {
  background: linear-gradient(145deg, rgba(140, 248, 216, 0.14), rgba(125, 240, 255, 0.12));
  border-color: var(--accent);
  color: var(--text-primary);
}

.tips {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 0.8rem;
  background: rgba(0, 0, 0, 0.25);
  border: 1px dashed var(--border-strong);
  border-radius: 12px;
  color: var(--text-muted);
  width: fit-content;
}

.tips span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 26px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--border);
  font-weight: 700;
  color: var(--text-primary);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.9rem;
}

.product-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
}

.thumb {
  aspect-ratio: 4 / 3;
  background: rgba(255, 255, 255, 0.04);
  display: grid;
  place-items: center;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  padding: 0.8rem 0.9rem 1rem;
  display: grid;
  gap: 0.2rem;
}

.name {
  font-weight: 700;
}

.price {
  font-weight: 600;
  color: var(--accent);
}

.note {
  color: var(--text-muted);
  font-size: 0.92rem;
}

.orders {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.orders-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.orders h2 {
  margin: 0.1rem 0 0;
}

.total-pill {
  padding: 0.55rem 0.95rem;
  border-radius: 12px;
  border: 1px solid var(--border-strong);
  background: rgba(255, 255, 255, 0.06);
  font-weight: 700;
  color: var(--accent);
  min-width: 160px;
  text-align: center;
}

.order-list {
  display: grid;
  gap: 0.6rem;
}

.order-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
  padding: 0.85rem 0.95rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow-soft);
}

.order-thumb {
  flex: 0 0 82px;
  height: 82px;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
}

.order-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.order-main {
  display: grid;
  gap: 0.2rem;
}

.buyer {
  font-weight: 700;
  letter-spacing: 0.02em;
}

.order-item {
  color: var(--text-muted);
}

.order-meta {
  display: grid;
  gap: 0.15rem;
  text-align: right;
  min-width: 140px;
}

.quantity {
  color: var(--text-muted);
}

.subtotal {
  font-weight: 700;
}

@media (max-width: 640px) {
  .hero {
    padding: 1rem 1.1rem;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .orders-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .order-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .order-meta {
    text-align: left;
    width: 100%;
    grid-template-columns: repeat(3, max-content);
  }
}
</style>
