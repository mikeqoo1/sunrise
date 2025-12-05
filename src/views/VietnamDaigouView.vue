<script setup lang="ts">
const items = [
  { name: "G7 三合一咖啡", price: "NT$ 220 / 袋", image: "/vietnam/g7-3in1.jpg", note: "22 包入，熱水即可沖" },
  { name: "滴漏黑咖啡組", price: "NT$ 320 / 盒", image: "/vietnam/drip-coffee.jpg", note: "小巧濾掛包，隨行好帶" },
  { name: "腰果 / 果乾禮盒", price: "NT$ 260 / 盒", image: "/vietnam/nuts-gift.jpg", note: "香脆腰果＋果乾混合" },
  { name: "越南米紙", price: "NT$ 90 / 包", image: "/vietnam/rice-paper.jpg", note: "生春捲專用，直徑 22cm" },
  { name: "椰子花蜜", price: "NT$ 180 / 罐", image: "/vietnam/coconut-syrup.jpg", note: "甜度低，適合沖茶或抹吐司" },
  { name: "順化牛肉河粉調理包", price: "NT$ 130 / 包", image: "/vietnam/beef-pho.jpg", note: "附香料包，回家也能複刻" },
  { name: "越南滴漏壺套裝", price: "NT$ 220 / 套", image: "/vietnam/drip-set.jpg", note: "含鋁杯濾網與玻璃杯" },
  { name: "蓮花茶", price: "NT$ 150 / 盒", image: "/vietnam/lotus-tea.jpg", note: "淡淡花香，不苦澀" },
];
</script>

<template>
  <div class="vietnam-page">
    <header class="hero">
      <p class="eyebrow">越南代購</p>
      <div>
        <h1>越南好物簡易清單</h1>
        <p class="lede">
          圖片放在 <code>public/vietnam</code>，每張卡片就是商品名稱、照片、價格，方便直接傳給大家確認。
        </p>
      </div>
      <div class="tips">
        <span>TIP</span>
        <p>價格可直接改這個頁面的陣列，圖片檔名對應 <code>/vietnam</code> 資料夾。</p>
      </div>
    </header>

    <section class="grid">
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

@media (max-width: 640px) {
  .hero {
    padding: 1rem 1.1rem;
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}
</style>
