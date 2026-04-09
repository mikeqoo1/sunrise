<script setup lang="ts">
import { RouterLink } from "vue-router";

const tripHeader = {
  title: "2026 大阪之旅 — 詳細手冊",
  dates: "2026/10/10(六) ~ 2026/10/17(六)",
  members: "快樂龍、大雄、R庭、嘎菲",
};

const itinerary = [
  {
    date: "10/10(六)",
    title: "Day 1 — 抵達大阪",
    items: [
      "航班：TPE → KIX（班次/時間待填）",
      "交通：關西機場 → 南海電鐵特急 → 難波站",
      "住宿報到：心齋橋/難波區域（地址待填）",
      "傍晚散步：道頓堀、戎橋、心齋橋筋商店街",
      "晚餐：道頓堀周邊（章魚燒、串炸、拉麵）",
    ],
  },
  {
    date: "10/11(日)",
    title: "Day 2 — 環球影城・第一日",
    items: [
      "早上：入園，前往超級任天堂世界（預約入場時段）",
      "體驗：瑪利歐賽車、耀西冒險、能量手環互動",
      "中午：園區餐廳（奇諾比奧餐廳等）",
      "下午：哈利波特魔法世界、禁忌之旅",
      "晚上：園區夜間燈光、周邊商品採購",
    ],
  },
  {
    date: "10/12(一)",
    title: "Day 3 — 環球影城・寶可夢遊行",
    items: [
      "早上：入園搶位，確認遊行路線與時間",
      "下午：寶可夢主題大遊行，卡位觀賞",
      "限定體驗：寶可夢主題餐點、限定周邊商品",
      "如需二刷設施，利用 Express Pass 安排時段",
      "晚上：園區周邊晚餐，回到住宿休息",
    ],
  },
  {
    date: "10/13(二)",
    title: "Day 4 — 任天堂博物館（京都宇治）",
    items: [
      "交通：大阪 → JR/近鐵 → 京都宇治（約 1 小時）",
      "上午：任天堂博物館參觀（需提前抽選預約）",
      "互動展區：經典遊戲體驗、開發歷史、限定周邊",
      "午餐：宇治抹茶甜點、茶蕎麥麵",
      "下午：宇治平等院散步 / 提早回大阪逛街",
    ],
  },
  {
    date: "10/14(三)",
    title: "Day 5 — 大阪城 / 天王寺",
    items: [
      "上午：大阪城天守閣、護城河散步、西之丸庭園",
      "中午：大阪城周邊午餐",
      "下午：天王寺、四天王寺、阿倍野 HARUKAS 展望台",
      "傍晚：Q's Mall / 天王寺 MIO 購物",
      "晚餐：通天閣新世界串炸",
    ],
  },
  {
    date: "10/15(四)",
    title: "Day 6 — 奈良半日 / 京都黃昏",
    items: [
      "上午：近鐵到奈良，奈良公園餵鹿、春日大社",
      "午餐：奈良商店街（柿葉壽司、大佛布丁）",
      "下午：移動到京都，河原町/先斗町散步",
      "傍晚：京都抹茶甜點、錦市場",
      "晚上：回大阪，注意末班車時間",
    ],
  },
  {
    date: "10/16(五)",
    title: "Day 7 — 大阪自由日 & 相撲火鍋",
    items: [
      "全日自由活動：補買紀念品、藥妝採購",
      "推薦：黑門市場、難波 PARKS、美國村",
      "午餐：大阪燒/咖哩/迴轉壽司",
      "晚餐重頭戲：相撲火鍋（ちゃんこ鍋）— 需事先預約",
      "宵夜：道頓堀最後巡禮",
    ],
  },
  {
    date: "10/17(六)",
    title: "Day 8 — 返台",
    items: [
      "上午：收拾行李、退房",
      "交通：住宿 → 南海電鐵 / JR → 關西機場",
      "機場：退稅、托運確認、登機前最後購物",
      "航班：KIX → TPE（班次/時間待填）",
      "備註：注意托運重量限制，液體需托運",
    ],
  },
];

const essentialInfo = [
  { label: "航班", value: "TPE → KIX / KIX → TPE（班次待填）" },
  { label: "住宿", value: "心齋橋/難波區域（地址待填）" },
  { label: "票券", value: "USJ 門票、Express Pass、任天堂世界預約、任天堂博物館抽選、ICOCA" },
  { label: "APP", value: "USJ 官方、Google Maps、NAVITIME、Klook/KKday 票券檔" },
  { label: "行李提醒", value: "行動電源、藥品、雨具、舒適步行鞋" },
];

const ticketLinks = [
  { label: "USJ 官方門票", url: "https://www.usj.co.jp/ticket/" },
  { label: "Express Pass 購買", url: "https://www.usj.co.jp/ticket/" },
  { label: "任天堂博物館預約", url: "https://museum.nintendo.com/" },
  { label: "關西機場交通", url: "https://www.kansai-airport.or.jp/access/" },
];
</script>

<template>
  <div class="detail">
    <section class="hero-card">
      <RouterLink class="back-link" to="/2026travel">← 回到總覽</RouterLink>
      <div class="pill">2026 大阪・詳細手冊</div>
      <h1>{{ tripHeader.title }}</h1>
      <div class="meta">
        <div class="meta-item">
          <span class="meta-label">日期</span>
          <span class="meta-value">{{ tripHeader.dates }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">成員</span>
          <span class="meta-value">{{ tripHeader.members }}</span>
        </div>
      </div>
    </section>

    <section class="info-section">
      <h2 class="section-title">行前資訊</h2>
      <div class="info-grid">
        <div v-for="info in essentialInfo" :key="info.label" class="info-item">
          <span class="info-label">{{ info.label }}</span>
          <span class="info-value">{{ info.value }}</span>
        </div>
      </div>
    </section>

    <section class="info-section">
      <h2 class="section-title">票券 / 交通連結</h2>
      <div class="link-grid">
        <a
          v-for="link in ticketLinks"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="ticket-link"
        >
          <span class="ticket-label">{{ link.label }}</span>
          <span class="ticket-arrow">→</span>
        </a>
      </div>
    </section>

    <section class="itinerary">
      <h2 class="section-title">每日行程</h2>
      <article v-for="day in itinerary" :key="day.date" class="day-card">
        <header class="day-header">
          <span class="day-date">{{ day.date }}</span>
          <h3>{{ day.title }}</h3>
        </header>
        <ul class="day-items">
          <li v-for="(item, idx) in day.items" :key="idx">
            <div class="dot" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
    </section>

    <div class="bottom-nav">
      <RouterLink class="btn ghost" to="/2026travel">← 回到總覽</RouterLink>
      <RouterLink class="btn ghost" to="/travellist">行前打包清單</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 860px;
  margin: 0 auto;
}

.hero-card {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(255, 153, 102, 0.16), rgba(125, 240, 255, 0.14));
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow-soft);
}

.back-link {
  display: inline-block;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
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
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  margin: 0.4rem 0 0;
}

.meta {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

/* Info section */
.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.info-section {
  padding: 1.2rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.info-item {
  padding: 0.7rem 0.9rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.info-label {
  color: var(--text-muted);
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.info-value {
  font-weight: 600;
}

/* Ticket links */
.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.6rem;
}

.ticket-link {
  padding: 0.8rem 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: var(--text-primary);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.ticket-link:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.ticket-label {
  font-weight: 600;
}

.ticket-arrow {
  color: var(--accent);
  font-weight: 700;
}

/* Itinerary */
.itinerary {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.day-card {
  padding: 1.2rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.day-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--border);
}

.day-date {
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  background: linear-gradient(145deg, #ff9966, #7df0ff);
  color: #0a0a0a;
  font-weight: 700;
  font-size: 0.85rem;
  white-space: nowrap;
}

.day-header h3 {
  font-weight: 700;
  font-size: 1.1rem;
}

.day-items {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.day-items li {
  display: grid;
  grid-template-columns: 16px 1fr;
  align-items: start;
  gap: 0.6rem;
}

.day-items li span {
  color: var(--text-muted);
  line-height: 1.5;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff9966, #7df0ff);
  margin-top: 7px;
}

/* Bottom navigation */
.bottom-nav {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  padding: 0.8rem 0;
}

.btn {
  padding: 0.7rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, border-color 0.2s ease;
  color: var(--text-primary);
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.04);
}

.btn:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

@media (max-width: 640px) {
  .day-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
}
</style>
