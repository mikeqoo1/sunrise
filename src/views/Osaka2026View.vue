<script setup lang="ts">
import { RouterLink } from "vue-router";

const travelDays = [
  { date: "10/29(三)", title: "抵達大阪", detail: "關西機場 → 住宿報到 → 心齋橋/道頓堀踩點" },
  { date: "10/30(四)", title: "環球影城 | 萬聖節白天場", detail: "超級任天堂世界、哈利波特區、哈利波特/咒語隊列" },
  { date: "10/31(五)", title: "環球影城 | 寶可夢萬聖節", detail: "寶可夢主題大遊行、夜間變裝、園區限定餐點/周邊" },
  { date: "11/01(六)", title: "大阪城 / 天王寺", detail: "天守閣散步、四天王寺、阿倍野展望台" },
  { date: "11/02(日)", title: "奈良半日 / 京都黃昏", detail: "奈良公園餵鹿、京都河原町逛街" },
  { date: "11/03(一)", title: "大阪自由活動", detail: "空出購物/美食日，補買紀念品" },
  { date: "11/04(二)", title: "返台", detail: "收拾行李、關西機場回程" },
];

const prepTasks = [
  { title: "環球門票與快速通關", detail: "鎖定寶可夢萬聖節檔期，預購 Express / 任天堂世界入場預約" },
  { title: "交通票券", detail: "關西周遊券 vs ICOCA 2.0；關空到市區南海/JR 搭乘路線" },
  { title: "住宿選擇", detail: "環球影城周邊一晚 + 難波/心齋橋市區住宿，方便夜生活" },
  { title: "造型與道具", detail: "寶可夢/萬聖節變裝、可折疊斗篷、透明雨衣以應對小雨" },
  { title: "餐廳預約", detail: "燒肉/居酒屋/蟹道樂或壽司；USJ 餐廳是否要事先預約" },
];

const quickLinks = [
  { label: "2026 詳細手冊", desc: "每日圖文與票券連結模板", to: "/2026travel/detail" },
  { label: "行前清單", desc: "打包/證件/藥品", to: "/travellist" },
  { label: "2025 東京手冊", desc: "延續格式參考", to: "/2025travel" },
  { label: "午餐抽籤", desc: "旅途中隨機決策", to: "/lunch" },
  { label: "隨機決策器", desc: "人員/景點抽籤", to: "/random" },
];
</script>

<template>
  <div class="osaka">
    <section class="hero-card">
      <div class="pill">2026 大阪・環球影城</div>
      <h1>寶可夢萬聖節 2026 行前範本</h1>
      <p class="lede">
        主題鎖定環球影城的寶可夢萬聖節活動與超級任天堂世界，並預留奈良/京都一日延伸。
        以 7 天 6 夜為範本，之後可以直接替換日期與航班。
      </p>
      <div class="cta-row">
        <RouterLink class="btn primary" to="/travel">參考 2025 範例版面</RouterLink>
        <RouterLink class="btn ghost" to="/travellist">行前打包清單</RouterLink>
        <span class="status-chip">草稿可隨時補充</span>
      </div>
      <div class="meta">
        <div class="meta-item">
          <span class="meta-label">主軸</span>
          <span class="meta-value">寶可夢萬聖節大遊行 / 超級任天堂世界</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">城市</span>
          <span class="meta-value">大阪基地，奈良・京都當日往返</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">票券提醒</span>
          <span class="meta-value">USJ 門票 + Express、入場預約、ICOCA 2.0</span>
        </div>
      </div>
    </section>

    <section class="grid">
      <article class="card days">
        <header class="card-head">
          <div>
            <p class="eyebrow">行程節奏</p>
            <h2>每日草案</h2>
          </div>
          <span class="link">之後可替換實際日期</span>
        </header>
        <div class="timeline">
          <div v-for="item in travelDays" :key="item.date" class="timeline-row">
            <div class="date">{{ item.date }}</div>
            <div class="dot" />
            <div>
              <p class="title">{{ item.title }}</p>
              <p class="detail">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </article>

      <article class="card tasks">
        <header class="card-head">
          <div>
            <p class="eyebrow">準備重點</p>
            <h2>待辦清單</h2>
          </div>
        </header>
        <ul class="task-list">
          <li v-for="task in prepTasks" :key="task.title">
            <div class="dot" />
            <div>
              <p class="title">{{ task.title }}</p>
              <p class="detail">{{ task.detail }}</p>
            </div>
          </li>
        </ul>
        <p class="hint">有新的靈感或票券連結，就在這裡繼續補充。</p>
      </article>

      <article class="card links">
        <header class="card-head">
          <div>
            <p class="eyebrow">共用資源</p>
            <h2>快速入口</h2>
          </div>
        </header>
        <div class="resource-grid">
          <RouterLink v-for="link in quickLinks" :key="link.to" class="resource-card" :to="link.to">
            <div class="resource-title">{{ link.label }}</div>
            <p class="resource-desc">{{ link.desc }}</p>
            <span class="arrow">開啟</span>
          </RouterLink>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.osaka {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

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

.cta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.9rem;
}

.btn {
  padding: 0.7rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  color: var(--text-primary);
}

.btn.primary {
  background: linear-gradient(145deg, #ff9966, #7df0ff);
  color: #0a0a0a;
  border: none;
  box-shadow: 0 12px 32px rgba(255, 153, 102, 0.35);
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.04);
}

.btn:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.status-chip {
  padding: 0.6rem 0.9rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px dashed var(--border-strong);
  color: var(--text-muted);
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

.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.card {
  padding: 1.2rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.link {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.95rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.timeline-row {
  display: grid;
  grid-template-columns: 120px 16px 1fr;
  align-items: start;
  gap: 0.6rem;
}

.task-list li {
  display: grid;
  grid-template-columns: 16px 1fr;
  align-items: start;
  gap: 0.6rem;
}

.date {
  font-weight: 700;
  letter-spacing: 0.05em;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff9966, #7df0ff);
  margin-top: 6px;
}

.title {
  font-weight: 700;
}

.detail {
  color: var(--text-muted);
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.7rem;
}

.resource-card {
  padding: 0.9rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  display: grid;
  gap: 0.2rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.resource-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.resource-title {
  font-weight: 700;
}

.resource-desc {
  color: var(--text-muted);
  font-size: 0.92rem;
}

.arrow {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
}

.task-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.hint {
  margin-top: 0.6rem;
  color: var(--text-muted);
  font-size: 0.92rem;
  border-top: 1px solid var(--border);
  padding-top: 0.6rem;
}

@media (max-width: 640px) {
  .timeline-row {
    grid-template-columns: 96px 16px 1fr;
  }
}
</style>
