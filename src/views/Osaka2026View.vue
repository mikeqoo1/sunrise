<script setup lang="ts">
import { RouterLink } from "vue-router";

const tripInfo = {
  title: "2026 大阪之旅",
  dates: "2026/10/10 ~ 2026/10/19",
  duration: "10 天 9 夜",
  members: ["快樂龍", "大雄", "R庭", "嘎菲"],
};

const attractions = [
  {
    icon: "🎢",
    title: "環球影城 — 寶可夢遊行",
    desc: "日本環球影城限定寶可夢遊行！跟著皮卡丘一起狂歡，加碼超級任天堂世界與哈利波特魔法世界。",
  },
  {
    icon: "🎮",
    title: "任天堂博物館",
    desc: "京都宇治的任天堂博物館，從紅白機到 Switch 的完整歷史，互動展區體驗經典遊戲的幕後開發。",
  },
  {
    icon: "🍲",
    title: "相撲火鍋",
    desc: "大阪道地相撲火鍋（ちゃんこ鍋），滿滿的雞肉丸、蔬菜與濃厚高湯，力士的元氣料理大家一起吃！",
  },
  {
    icon: "🦖",
    title: "哥吉拉御守",
    desc: "大阪限定哥吉拉御守！特定神社或周邊商店才有，數量有限，記得早點去搶。",
  },
  {
    icon: "🚂",
    title: "和歌山一日遊",
    desc: "搭 JR 南方號前進和歌山，遊覽和歌山城、港町、貓站長電車，在地和歌山拉麵必吃！",
  },
];

const travelDays = [
  { date: "10/10(六)", title: "飛機✈️＋臨空城Outlet", detail: "抵達大阪後直奔臨空城 Outlet 採買" },
  { date: "10/11(日)", title: "梅田＋哥吉拉御守", detail: "梅田逛街，順路安排哥吉拉御守" },
  { date: "10/12(一)", title: "任天堂博物館", detail: "看狀況決定要不要順遊宇治" },
  { date: "10/13(二)", title: "京都", detail: "嵐山或下鴨神社擇一" },
  { date: "10/14(三)", title: "待排", detail: "保留彈性，之後再補行程" },
  { date: "10/15(四)", title: "環球影城", detail: "日本環球影城一日行程" },
  { date: "10/16(五)", title: "待排", detail: "保留彈性，之後再補行程" },
  { date: "10/17(六)", title: "待排", detail: "保留彈性，之後再補行程" },
  { date: "10/18(日)", title: "待排", detail: "保留彈性，之後再補行程" },
  { date: "10/19(一)", title: "回家✈️", detail: "星宇 JX821 13:25 起飛，整理行李搭機回台灣" },
];

const prepTasks = [
  { title: "環球票", detail: "確認 USJ 門票、Express Pass 與任天堂世界入場方式" },
];

const quickLinks = [
  { label: "2026 詳細手冊", desc: "每日圖文與票券連結", to: "/2026travel/detail" },
  { label: "🍽️ 美食 & 必逛", desc: "餐廳＋運動/泳裝/藥粧必逛店家", to: "/2026food" },
  { label: "行前清單", desc: "打包/證件/藥品", to: "/travellist" },
  { label: "關西樂享周遊券", desc: "使用方式與現場核銷提醒", to: "/2026kansai-pass" },
  { label: "大阪購物清單", desc: "籃球/泳衣/潮流/藥粧清單", to: "/2026shopping" },
  { label: "住宿比較", desc: "已選定 日居・影 ECHO｜周邊指南", to: "/2026hotel" },
  { label: "2025 東京手冊", desc: "延續格式參考", to: "/2025travel" },
];
</script>

<template>
  <div class="osaka">
    <section class="hero-card">
      <div class="pill">2026 大阪・環球影城</div>
      <h1>{{ tripInfo.title }}</h1>
      <p class="lede">
        快樂龍 2026 年度旅行！這次前進大阪，鎖定環球影城寶可夢遊行、京都任天堂博物館，
        再用一碗相撲火鍋補滿元氣。四個人、十天九夜，一起出發吧！
      </p>
      <div class="cta-row">
        <RouterLink class="btn primary" to="/2026travel/detail">查看詳細手冊</RouterLink>
        <RouterLink class="btn ghost" to="/2026shopping">大阪購物清單</RouterLink>
        <RouterLink class="btn ghost" to="/2026food">美食 &amp; 必逛</RouterLink>
        <RouterLink class="btn ghost" to="/travellist">行前打包清單</RouterLink>
      </div>
      <div class="meta">
        <div class="meta-item">
          <span class="meta-label">日期</span>
          <span class="meta-value">{{ tripInfo.dates }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">天數</span>
          <span class="meta-value">{{ tripInfo.duration }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">成員</span>
          <span class="meta-value">{{ tripInfo.members.join("、") }}</span>
        </div>
      </div>
    </section>

    <section class="attractions">
      <h2 class="section-title">重點行程</h2>
      <div class="attraction-grid">
        <div v-for="item in attractions" :key="item.title" class="attraction-card">
          <span class="attraction-icon">{{ item.icon }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <section class="grid">
      <article class="card days">
        <header class="card-head">
          <div>
            <p class="eyebrow">行程節奏</p>
            <h2>每日摘要</h2>
          </div>
          <RouterLink class="link" to="/2026travel/detail">看詳細手冊 →</RouterLink>
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
        <p class="hint">交通票券已買關西樂享周遊券，目前只剩環球票要買。</p>
      </article>

      <article class="card links">
        <header class="card-head">
          <div>
            <p class="eyebrow">共用資源</p>
            <h2>快速入口</h2>
          </div>
        </header>
        <div class="resource-grid">
          <RouterLink v-for="link in quickLinks" :key="link.label" class="resource-card" :to="link.to">
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

/* Attractions section */
.section-title {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.attractions {
  padding: 1.2rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.attraction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.8rem;
}

.attraction-card {
  padding: 1.2rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.attraction-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.attraction-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.attraction-card h3 {
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.attraction-card p {
  color: var(--text-muted);
  font-size: 0.92rem;
}

/* Grid and cards */
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
