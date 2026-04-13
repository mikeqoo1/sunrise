<script setup lang="ts">
interface ShoppingItem {
  name: string;
  qty?: number;
  note?: string;
  tbd?: boolean;
}

interface ShoppingCategory {
  category: string;
  icon: string;
  items: ShoppingItem[];
}

interface PersonShopping {
  name: string;
  emoji: string;
  categories: ShoppingCategory[];
}

const shoppingData: PersonShopping[] = [
  {
    name: "快樂龍",
    emoji: "🐉",
    categories: [
      {
        category: "籃球用品",
        icon: "🏀",
        items: [
          { name: "Asics UNPRE ARS LOW 2 籃球鞋", note: "US 9.5" },
          { name: "Asics GLIDE NOVA FF 3 籃球鞋", note: "US 10，備選" },
          { name: "護膝", qty: 2 },
          { name: "籃球襪", qty: 3, note: "中筒款" },
          { name: "其他籃球配件", tbd: true },
        ],
      },
      {
        category: "泳衣/泳褲",
        icon: "🏊",
        items: [
          { name: "arena 訓練款泳褲", note: "延續上次款式 TSM1025M，確認尺寸" },
          { name: "泳鏡", note: "待補品牌", tbd: true },
        ],
      },
      {
        category: "大阪限定",
        icon: "🏯",
        items: [
          { name: "環球影城寶可夢周邊", note: "皮卡丘/沼王系列" },
          { name: "寶可夢中心 大阪DX店", note: "沼王、土王吊飾" },
          { name: "恐龍/哥吉拉周邊", tbd: true },
        ],
      },
    ],
  },
  {
    name: "大雄",
    emoji: "👟",
    categories: [
      {
        category: "潮流服飾",
        icon: "🧥",
        items: [
          { name: "Aape / 猿人頭系列", note: "心齋橋 BAPE STORE" },
          { name: "球鞋", note: "款式待挑", tbd: true },
          { name: "潮流 T-shirt", qty: 3, tbd: true },
          { name: "外套/帽T", tbd: true },
        ],
      },
      {
        category: "籃球用品",
        icon: "🏀",
        items: [
          { name: "Asics 籃球鞋", note: "款式/尺寸待補", tbd: true },
          { name: "NBA 球衣", tbd: true },
        ],
      },
      {
        category: "大阪限定",
        icon: "🏯",
        items: [
          { name: "環球影城周邊", tbd: true },
          { name: "大阪限定零食伴手禮", tbd: true },
        ],
      },
    ],
  },
  {
    name: "R庭",
    emoji: "🌸",
    categories: [
      {
        category: "藥粧美妝",
        icon: "💊",
        items: [
          { name: "Kate 唇膏", note: "延續上次購買" },
          { name: "臉部防曬", tbd: true },
          { name: "合力他命", qty: 2 },
          { name: "EVE 止痛藥", qty: 2 },
          { name: "Asahi MINTIA 薄荷糖大包裝", qty: 1 },
          { name: "其他藥品", tbd: true },
        ],
      },
      {
        category: "泳衣",
        icon: "🏊",
        items: [
          { name: "arena 女款泳衣", note: "款式待挑", tbd: true },
        ],
      },
      {
        category: "大阪限定",
        icon: "🏯",
        items: [
          { name: "寶可夢中心商品", tbd: true },
          { name: "環球影城哈利波特周邊", tbd: true },
        ],
      },
    ],
  },
  {
    name: "嘎菲",
    emoji: "🐱",
    categories: [
      {
        category: "藥粧",
        icon: "💊",
        items: [
          { name: "合力他命", qty: 2 },
          { name: "EVE 止痛藥", qty: 2 },
          { name: "EVE 經痛藥", qty: 3 },
          { name: "胃藥", qty: 2 },
          { name: "代購品項", note: "待整理清單", tbd: true },
        ],
      },
      {
        category: "泳衣",
        icon: "🏊",
        items: [
          { name: "arena 女款泳衣", note: "款式待挑", tbd: true },
        ],
      },
      {
        category: "運動鞋",
        icon: "👟",
        items: [
          { name: "Asics 休閒鞋", note: "GT-2160 / GEL-KAYANO 系列擇一" },
          { name: "Asics 拖鞋", qty: 1 },
        ],
      },
      {
        category: "大阪限定",
        icon: "🏯",
        items: [
          { name: "環球影城任天堂周邊", tbd: true },
          { name: "大阪限定伴手禮", tbd: true },
        ],
      },
    ],
  },
];

const storeRecommendations = [
  {
    icon: "👟",
    name: "ABC-MART 心齋橋店",
    desc: "日本最大連鎖鞋店，Nike/Adidas/Asics 齊全，免稅對應",
    area: "心齋橋",
  },
  {
    icon: "🏃",
    name: "Asics Store 心齋橋",
    desc: "Asics 直營旗艦店，籃球/跑步/休閒全系列，可能有日本限定色",
    area: "心齋橋",
  },
  {
    icon: "🏋️",
    name: "Sports Depo 大阪",
    desc: "大型運動用品量販店，arena 泳裝、籃球用品一站購足",
    area: "市區多店",
  },
  {
    icon: "🐵",
    name: "BAPE STORE 大阪",
    desc: "Aape / A Bathing Ape 官方店舖，大阪限定款必逛",
    area: "心齋橋/美國村",
  },
  {
    icon: "⚡",
    name: "寶可夢中心 大阪DX店",
    desc: "西日本最大寶可夢中心，大阪限定商品超多",
    area: "大丸梅田店 13F",
  },
  {
    icon: "🎢",
    name: "環球影城園區商店",
    desc: "任天堂世界、哈利波特、寶可夢遊行限定周邊",
    area: "USJ 園區內",
  },
];
</script>

<template>
  <div class="osaka-shopping">
    <section class="hero-card">
      <div class="pill">🛍️ 2026 大阪・購物攻略</div>
      <h1>2026 大阪購物清單</h1>
      <p class="lede">
        大阪之旅 10/10~10/17，四位成員的購物需求彙整。
        標記「待補」的品項可以隨時更新！
      </p>
      <div class="meta">
        <div class="meta-item">
          <span class="meta-label">出發日</span>
          <span class="meta-value">2026/10/10</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">成員</span>
          <span class="meta-value">快樂龍、大雄、R庭、嘎菲</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">採買日</span>
          <span class="meta-value">10/16 自由活動日</span>
        </div>
      </div>
    </section>

    <section class="person-grid">
      <article
        v-for="person in shoppingData"
        :key="person.name"
        class="person-card"
      >
        <header class="person-header">
          <span class="person-emoji">{{ person.emoji }}</span>
          <h2>{{ person.name }}</h2>
        </header>

        <div
          v-for="cat in person.categories"
          :key="cat.category"
          class="category-block"
        >
          <h3 class="category-title">
            <span class="category-icon">{{ cat.icon }}</span>
            {{ cat.category }}
          </h3>
          <ul class="item-list">
            <li v-for="item in cat.items" :key="item.name" class="item-row">
              <span class="item-dot" :class="{ tbd: item.tbd }" />
              <div class="item-info">
                <span class="item-name">{{ item.name }}</span>
                <span v-if="item.qty" class="item-qty">x{{ item.qty }}</span>
                <span v-if="item.tbd" class="tbd-badge">待補</span>
                <p v-if="item.note" class="item-note">{{ item.note }}</p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>

    <section class="stores-section">
      <h2 class="section-title">推薦店家</h2>
      <p class="section-desc">大阪運動用品 &amp; 限定商品推薦購買地點</p>
      <div class="store-grid">
        <div v-for="store in storeRecommendations" :key="store.name" class="store-card">
          <span class="store-icon">{{ store.icon }}</span>
          <div class="store-info">
            <h3>{{ store.name }}</h3>
            <p class="store-desc">{{ store.desc }}</p>
            <span class="store-area">📍 {{ store.area }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="tips-card">
      <h2>購物小提醒</h2>
      <ul class="tips-list">
        <li>日本免稅門檻：同一店家同日消費滿 ¥5,000（未稅）即可退稅</li>
        <li>心齋橋筋商店街有大量運動用品店，建議安排半天集中採買</li>
        <li>環球影城周邊建議入園當天買，園外商店選擇較少</li>
        <li>寶可夢中心熱門商品容易缺貨，建議開店就去</li>
        <li>arena 泳裝在 Sports Depo 通常比專櫃便宜</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.osaka-shopping {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Hero */
.hero-card {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(255, 153, 102, 0.16), rgba(125, 240, 255, 0.14));
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow-soft);
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.32rem 0.8rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.12);
  letter-spacing: 0.08em;
  font-size: 0.82rem;
  color: var(--text-muted);
}

.hero-card h1 {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin: 0.4rem 0;
}

.lede {
  color: var(--text-muted);
  max-width: 720px;
}

.meta {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
}

.meta-item {
  padding: 0.8rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.meta-label {
  display: block;
  color: var(--text-muted);
  font-size: 0.85rem;
  letter-spacing: 0.03em;
}

.meta-value {
  font-weight: 600;
}

/* Person grid */
.person-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.person-card {
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.person-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.person-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--border);
}

.person-emoji {
  font-size: 1.8rem;
}

.person-header h2 {
  font-size: 1.3rem;
  font-weight: 700;
}

/* Category */
.category-block {
  margin-bottom: 0.9rem;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.5rem;
  letter-spacing: 0.03em;
}

.category-icon {
  font-size: 1.1rem;
}

/* Item list */
.item-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.item-row {
  display: grid;
  grid-template-columns: 12px 1fr;
  align-items: start;
  gap: 0.6rem;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  transition: background 0.15s ease;
}

.item-row:hover {
  background: rgba(255, 255, 255, 0.05);
}

.item-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 7px;
  flex-shrink: 0;
}

.item-dot.tbd {
  background: rgba(255, 193, 7, 0.7);
  box-shadow: 0 0 6px rgba(255, 193, 7, 0.3);
}

.item-info {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem;
}

.item-name {
  font-weight: 500;
}

.item-qty {
  font-size: 0.85rem;
  color: var(--accent-strong);
  font-weight: 600;
}

.tbd-badge {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  background: rgba(255, 193, 7, 0.18);
  border: 1px solid rgba(255, 193, 7, 0.35);
  color: #ffc107;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.item-note {
  width: 100%;
  color: var(--text-muted);
  font-size: 0.85rem;
  margin: 0;
}

/* Stores section */
.stores-section {
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.section-desc {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-bottom: 1rem;
}

.store-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0.8rem;
}

.store-card {
  display: flex;
  gap: 0.8rem;
  padding: 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.store-card:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.store-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.store-info h3 {
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
}

.store-desc {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
}

.store-area {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
}

/* Tips */
.tips-card {
  padding: 1.4rem;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.tips-card h2 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.tips-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tips-list li {
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-muted);
  font-size: 0.92rem;
  border-left: 3px solid var(--accent);
}

@media (max-width: 640px) {
  .person-grid {
    grid-template-columns: 1fr;
  }

  .store-grid {
    grid-template-columns: 1fr;
  }

  .meta {
    grid-template-columns: 1fr;
  }
}
</style>
