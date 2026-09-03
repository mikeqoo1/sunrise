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

interface ShoppingRoute {
  date: string;
  area: string;
  summary: string;
  stops: string[];
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
      {
        category: "工裝衣服",
        icon: "🧥",
        items: [
          {
            name: "WORKMAN Colors 工裝風機能衣服",
            note: "Namba CITY 南館 2F，可和 Sports Depo 排同一天",
          },
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
      {
        category: "工裝衣服",
        icon: "🧥",
        items: [
          {
            name: "WORKMAN Colors 工裝風機能衣服",
            note: "Namba CITY 南館 2F，參考 LINE TODAY 那篇",
          },
        ],
      },
    ],
  },
];

const tips: string[] = [
  "Alpen OSAKA 與 Sports Depo 同屬 Alpen Group，但不是同一間店；旗艦店品類與規模更完整，Sports Depo 適合難波日順路補貨",
  "運動用品以梅田 Alpen OSAKA 為主逛，AKTR／Spalding 籃球服飾與球襪可再到難波 Sports Depo 4F 比價補齊",
  "R庭、嘎菲的工裝風機能衣服到 Namba CITY 南館 2F 的 WORKMAN Colors 看，可和 Sports Depo 排同一段難波採買",
  "arena 泳褲/泳鏡/泳衣建議到梅田グランフロント大阪 的 arena shop 專賣店挑，款式最齊",
  "日本免稅門檻：同一店家同日消費滿 ¥5,000（未稅）即可退稅，記得帶護照",
  "嘎菲的藥粧建議在難波/心齋橋的大國、松本清、唐吉訶德比價，唐吉訶德 24 小時最彈性",
];

const metaItems: MetaItem[] = [
  { label: "出發日", value: "2026/10/10" },
  { label: "成員", value: "快樂龍、大雄、R庭、嘎菲" },
  { label: "採買日", value: "10/11 梅田旗艦店＋10/16 難波集中採買" },
];

const shoppingRoutes: ShoppingRoute[] = [
  {
    date: "10/11（日）",
    area: "梅田旗艦店路線",
    summary: "由西往東走，不必在大阪站兩側來回；Alpen OSAKA 是當天主站。",
    stops: [
      "11:00｜阪神梅田 B2 epais 吃午餐",
      "12:15｜Grand Front Osaka 南館 4F arena shop（約 45～60 分）",
      "13:30｜穿過大阪站前往 Alpen OSAKA（預留 2～3 小時）",
      "16:30 後｜阪急／HEP FIVE 一帶＋哥吉拉御守行程",
    ],
  },
  {
    date: "10/16（五）",
    area: "難波一方向採買路線",
    summary: "從美國村一路往南走到難波，買完可直接搭千日前線回玉川。",
    stops: [
      "10:00｜AKTR Sports Supply＋SPORTY COFFEE（美國村）",
      "11:15｜心齋橋筋／道頓堀藥粧比價",
      "12:30｜道頓堀或難波午餐",
      "13:30｜なんばパークス 4F Sports Depo（約 1.5～2 小時）",
      "15:30｜なんばCITY 南館 2F WORKMAN Colors",
      "17:00 後｜難波補買、吃晚餐後回住宿",
    ],
  },
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
        運動用品以梅田 Alpen OSAKA 旗艦店為主、難波 Sports Depo 為補充，
        R庭與嘎菲的工裝風機能衣服在 Namba CITY，
        藥粧在難波/心齋橋，標記「待補」的品項可隨時更新！
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
        <span class="stores-link-desc">Alpen OSAKA・Sports Depo・WORKMAN Colors・arena shop 等店家已整理到「美食 &amp; 必逛」</span>
      </div>
      <span class="stores-link-arrow">前往 →</span>
    </RouterLink>

    <section class="routes-section">
      <div class="section-heading">
        <p class="section-kicker">SHOPPING ROUTES</p>
        <h2>建議逛街路線</h2>
      </div>
      <div class="route-grid">
        <article v-for="route in shoppingRoutes" :key="route.date" class="route-card">
          <div class="route-header">
            <span class="route-date">{{ route.date }}</span>
            <h3>{{ route.area }}</h3>
          </div>
          <p class="route-summary">{{ route.summary }}</p>
          <ol class="route-stops">
            <li v-for="stop in route.stops" :key="stop">{{ stop }}</li>
          </ol>
        </article>
      </div>
    </section>

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

/* Shopping routes */
.routes-section {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.section-heading h2 {
  margin: 0;
  font-size: 1.3rem;
}

.section-kicker {
  margin: 0 0 0.2rem;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.route-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.route-card {
  padding: 1.2rem;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.route-header {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  margin-bottom: 0.55rem;
}

.route-header h3 {
  margin: 0;
  font-size: 1.05rem;
}

.route-date {
  color: var(--accent);
  font-weight: 700;
  white-space: nowrap;
}

.route-summary {
  margin: 0 0 0.8rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.route-stops {
  margin: 0;
  padding-left: 1.3rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.route-stops li + li {
  margin-top: 0.45rem;
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

  .route-grid {
    grid-template-columns: 1fr;
  }

  .route-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.2rem;
  }
}
</style>
