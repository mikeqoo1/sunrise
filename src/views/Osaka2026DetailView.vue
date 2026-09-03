<script setup lang="ts">
import { RouterLink } from "vue-router";

const tripHeader = {
  title: "2026 大阪之旅 — 詳細手冊",
  dates: "2026/10/10(六) ~ 2026/10/19(一)",
  members: "快樂龍、大雄、R庭、嘎菲",
};

const itinerary = [
  {
    date: "10/10(六)",
    title: "Day 1 — 抵達大阪＋臨空城 Outlet",
    items: [
      "航班：台灣虎航 IT710，07:45 TPE → 11:30 KIX",
      "抵達後：前往臨空城 Outlet 採買",
      "採買結束後：前往住宿、辦理入住",
    ],
  },
  {
    date: "10/11(日)",
    title: "Day 2 — 梅田旗艦店＋哥吉拉御守",
    items: [
      "11:00：阪神梅田 B2 epais 吃午餐",
      "12:15：Grand Front Osaka 南館 4F arena shop（快樂龍、R庭泳裝）",
      "13:30：Alpen OSAKA 旗艦店，預留 2～3 小時",
      "註記：Alpen OSAKA 與難波 Sports Depo 同屬 Alpen Group，但不是同一間店；旗艦店品類更完整",
      "16:30 後：阪急／HEP FIVE 一帶逛街，順路安排哥吉拉御守",
    ],
  },
  {
    date: "10/12(一)",
    title: "Day 3 — 任天堂博物館",
    items: [
      "前往京都宇治的任天堂博物館（需提前抽選預約）",
      "看當天時間與體力，決定是否順遊宇治",
    ],
  },
  {
    date: "10/13(二)",
    title: "Day 4 — 勝尾寺＋阿嚕燒肉聚餐",
    items: [
      "白天：前往勝尾寺",
      "晚上：跟阿嚕一起吃燒肉",
    ],
  },
  {
    date: "10/14(三)",
    title: "Day 5 — 京都嵐山",
    items: [
      "京都嵐山一日行程",
      "竹林、渡月橋與周邊街區可依當天狀況安排",
    ],
  },
  {
    date: "10/15(四)",
    title: "Day 6 — 環球影城",
    items: [
      "日本環球影城一日行程",
      "確認寶可夢遊行、超級任天堂世界與 Express Pass 時段",
    ],
  },
  {
    date: "10/16(五)",
    title: "Day 7 — 難波・心齋橋集中採買",
    items: [
      "10:00：AKTR Sports Supply＋SPORTY COFFEE（美國村）",
      "11:15：沿心齋橋筋往南，途中比較藥粧價格",
      "12:30：道頓堀或難波午餐",
      "13:30：なんばパークス 4F Sports Depo，補齊籃球服飾、球襪與泳裝",
      "15:30：なんばCITY 南館 2F WORKMAN Colors（R庭、嘎菲工裝風機能衣服）",
      "17:00 後：難波補買、吃晚餐；搭千日前線回玉川",
    ],
  },
  {
    date: "10/17(六)",
    title: "Day 8 — 梅田＋淀川花火大會 🎆",
    items: [
      "白天：梅田逛街、補伴手禮與藥妝",
      "15:00 前：回住處放東西休息 — 花火日下午開始人潮與交通管制，早點回來",
      "16:00：先到阪急 OASIS 玉川店或 Lawson 買好食物飲料，會場周邊一定大排長龍",
      "17:00：左岸「梅田會場」開場，從住處步行 15～18 分過去（從梅田走要 25 分，我們近很多）",
      "19:00～20:00：第 38 回なにわ淀川花火大会施放",
      "20:00 後：步行 15 分回住處，或轉去福島橫丁・地獄谷喝一杯（週六最熱鬧）",
      "🎫 票券：左岸梅田會場只有「パイプ椅子席（自由席）」，前售 大人 ¥4,500／兒童 ¥2,500（3 歲～小學），附廁所與賣店，入場後自由選位。當日不販售",
      "⚠️ 今年左岸因高速公路施工，免費觀覽區大幅縮小，強烈建議買付費席，不要賭免費區",
      "🚇 動線備註：三十萬人散場不用擠電車，走回玉川就好 — 這是改住福島區最大的好處。會場無停車場",
    ],
  },
  {
    date: "10/18(日)",
    title: "Day 9 — 待排（彈性日）",
    items: ["保留彈性，之後再補行程"],
  },
  {
    date: "10/19(一)",
    title: "Day 10 — 返台",
    items: [
      "上午：收拾行李、退房",
      "交通：住宿 → 南海電鐵 / JR → 關西機場",
      "機場：退稅、托運確認、登機前最後購物",
      "航班：星宇航空 JX821 KIX T1 13:25 → TPE T1 15:20",
      "備註：注意托運重量限制，液體需托運",
    ],
  },
];

const essentialInfo = [
  { label: "航班（去程）", value: "2026/10/10（六）台灣虎航 IT710 07:45 TPE → 11:30 KIX" },
  { label: "航班（回程）", value: "2026/10/19（一）星宇航空 JX821 KIX T1 13:25 → TPE T1 15:20" },
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
