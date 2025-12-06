<script setup lang="ts">
const items = [
  { name: "北臉代購", price: "NT$ ???? / 件", image: "vietnam/TheNorthFace.png", note: "R庭*1 加菲*1 大熊*1 熊媽*1" },
  { name: "第一順位 UE女款綠色DRYVENT防水衝鋒衣(8E6S0QP)", price: "R庭S號 NT$ ???? / 件", image: "vietnam/8E6S0QP.png", note: "8E6S0QP" },
  { name: "第二順位 UE女款棕色DRYVENT防水衝鋒衣(8CHXEB0)", price: "R庭S號 NT$ ???? / 件", image: "vietnam/8CHXEB0.png", note: "8CHXEB0" },
  { name: "第二順位 UE女款黑色DRYVENT防水衝鋒衣(8CHXJK3)", price: "R庭S號 NT$ ???? / 件", image: "vietnam/8CHXJK3.png", note: "8CHXJK3" },
  { name: "經典1996男款黑色DWR防潑水羽絨外套(3C8DGOE)", price: "加菲S號 NT$ ???? / 件", image: "vietnam/3C8DGOE.jpg", note: "3C8DGOE" },
  { name: "經典1996男款黑色DWR防潑水羽絨外套(3C8DGOE)", price: "熊媽M號 NT$ ???? / 件", image: "vietnam/3C8DGOE.jpg", note: "3C8DGOE" },
  { name: "第一順位 M MOUNTAIN LIGHT TRICLIMATE GTX JACKET(NF0A83RRGOE)", price: "大熊3XL號 NT$ ???? / 件", image: "vietnam/NF0A83RRGOE.jpg", note: "NF0A83RRGOE" },
  { name: "第二順位 M SANGRO DRYVENT JACKET 2.0 - AP(NF0A8DX1JK3)", price: "大熊3XL號 NT$ ???? / 件", image: "vietnam/NF0A8DX1JK3.jpg", note: "NF0A8DX1JK3" },
  { name: "始祖鳥代購", price: "NT$ ???? / 件", image: "vietnam/ARCTERYX.png", note: "大熊*1" },
  { name: "Arcteryx 始祖鳥 Atom Hoody 化纖保暖外套(X00000955602.jpg)", price: "大熊2XL號 NT$ ???? / 件", image: "vietnam/X00000955602.jpg", note: "X00000955602" },
  { name: "瑜伽褲", price: "NT$ ??? / 件", image: "vietnam/lululemon.png", note: "瑜伽系列" },
  { name: "運動服", price: "NT$ ??? / 件", image: "vietnam/nike.png", note: "運動系列" },
];
</script>

<template>
  <div class="vietnam-page">
    <header class="hero">
      <p class="eyebrow">越南代購</p>
      <div>
        <h1>越南好物簡易清單</h1>
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
