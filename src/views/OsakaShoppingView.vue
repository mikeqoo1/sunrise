<script setup lang="ts">
import { computed } from "vue";

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

interface MetaItem {
  label: string;
  value: string;
}

const shoppingData: PersonShopping[] = [
  {
    name: "快樂龍",
    emoji: "🐉",
    categories: [
      {
        category: "籃球服飾",
        icon: "🏀",
        items: [
          { name: "AKTR 籃球服飾" },
          { name: "Spalding 籃球服飾" },
        ],
      },
      {
        category: "泳褲/泳鏡",
        icon: "🏊",
        items: [
          { name: "arena 泳褲" },
          { name: "arena 泳鏡" },
        ],
      },
    ],
  },
  {
    name: "大雄",
    emoji: "👟",
    categories: [
      {
        category: "籃球用品",
        icon: "🏀",
        items: [
          { name: "籃球襪" },
        ],
      },
    ],
  },
  {
    name: "R庭",
    emoji: "🌸",
    categories: [
      {
        category: "泳衣",
        icon: "🏊",
        items: [
          { name: "arena 女款泳衣" },
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
          { name: "藥粧", note: "品項待補", tbd: true },
        ],
      },
    ],
  },
];

const tips: string[] = [
  "運動用品（AKTR／Spalding 籃球服飾、球襪）在難波なんばパークス Sports Depo 4F 一次購足",
  "arena 泳褲/泳鏡/泳衣建議到梅田グランフロント大阪 的 arena shop 專賣店挑，款式最齊",
  "日本免稅門檻：同一店家同日消費滿 ¥5,000（未稅）即可退稅，記得帶護照",
  "嘎菲的藥粧建議在難波/心齋橋的大國、松本清、唐吉訶德比價，唐吉訶德 24 小時最彈性",
];

const metaItems: MetaItem[] = [
  { label: "出發日", value: "2026/10/10" },
  { label: "成員", value: "快樂龍、大雄、R庭、嘎菲" },
  { label: "採買日", value: "10/16 自由活動日（難波集中採買）" },
];

const hasContent = computed(
  () => shoppingData.length > 0 || tips.length > 0,
);
</script>

<template>
  <div class="osaka-shopping">
    <section class="hero-card">
      <div class="pill">🛍️ 2026 大阪・環球購物攻略</div>
      <h1>2026 大阪購物清單</h1>
      <p class="lede">
        大阪環球影城之旅，四位成員的購物需求彙整。
        運動用品集中在難波なんばパークス、藥粧在難波/心齋橋，標記「待補」的品項可隨時更新！
      </p>
      <div v-if="metaItems.length" class="meta">
        <div v-for="m in metaItems" :key="m.label" class="meta-item">
          <span class="meta-label">{{ m.label }}</span>
          <span class="meta-value">{{ m.value }}</span>
        </div>
      </div>
    </section>

    <section v-if="!hasContent" class="empty-state">
      <span class="empty-emoji">🚧</span>
      <p class="empty-title">內容調整中</p>
      <p class="empty-text">購物清單正在重新規劃，稍後再回來看看吧！</p>
    </section>

    <section v-if="shoppingData.length" class="person-grid">
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

    <RouterLink class="stores-link" to="/2026food">
      <span class="stores-link-icon">🛍️</span>
      <div class="stores-link-text">
        <span class="stores-link-title">店家位置與必逛地圖</span>
        <span class="stores-link-desc">Sports Depo・arena shop・藥粧等店家已整理到「美食 &amp; 必逛」</span>
      </div>
      <span class="stores-link-arrow">前往 →</span>
    </RouterLink>

    <section v-if="tips.length" class="tips-card">
      <h2>購物小提醒</h2>
      <ul class="tips-list">
        <li v-for="tip in tips" :key="tip">{{ tip }}</li>
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

/* Stores link */
.stores-link {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1.1rem 1.4rem;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  text-decoration: none;
  color: var(--text-primary);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.stores-link:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.stores-link-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.stores-link-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
  min-width: 0;
}

.stores-link-title {
  font-weight: 700;
  font-size: 1rem;
}

.stores-link-desc {
  color: var(--text-muted);
  font-size: 0.88rem;
}

.stores-link-arrow {
  color: var(--accent);
  font-weight: 700;
  font-size: 0.9rem;
  white-space: nowrap;
  flex-shrink: 0;
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

/* Empty state */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 3rem 1.4rem;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px dashed var(--border);
  box-shadow: var(--shadow-soft);
  text-align: center;
}

.empty-emoji {
  font-size: 2.6rem;
}

.empty-title {
  font-size: 1.2rem;
  font-weight: 700;
}

.empty-text {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0;
}

@media (max-width: 640px) {
  .person-grid {
    grid-template-columns: 1fr;
  }

  .meta {
    grid-template-columns: 1fr;
  }
}
</style>
