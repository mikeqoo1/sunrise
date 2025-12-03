<script setup lang="ts">
import { RouterLink } from "vue-router";

const travelDays = [
  { date: "05/10(六)", title: "東京 / 神田祭", detail: "成田入境、Access 特快、祭典 + 淺草採買" },
  { date: "05/11(日)", title: "橫濱 / 東京地下街", detail: "港未來線走訪人孔蓋、東京車站一番街" },
  { date: "05/12(一)", title: "澀谷 / 新宿", detail: "市中心逛街 + 六歌仙燒肉放生" },
  { date: "05/13(二)", title: "哈利波特 / 池袋", detail: "影城探險、池袋寶可夢商圈" },
  { date: "05/14(三)", title: "築地 / 台場 / 日本橋", detail: "千客萬來溫泉 + 銀座周邊散步" },
  { date: "05/15(四)", title: "淺草 / 上野", detail: "雷門市集、博物館與公園軸線" },
  { date: "05/16(五)", title: "龜有 / 淺草三社祭", detail: "葛飾聖地巡禮、夜訪祭典" },
  { date: "05/17(六)", title: "返台", detail: "回程航班收尾 2025 旅程" },
];

const resources = [
  { label: "2025 完整手冊", to: "/travel", desc: "每日路線、時刻表、照片全收錄" },
  { label: "行前打包清單", to: "/travellist", desc: "隨身/託運/盥洗一張圖搞定" },
  { label: "東京地鐵圖", to: "/tokyostationsubway", desc: "地鐵出口、轉乘快查" },
  { label: "購物攻略", to: "/shopping", desc: "東京車站、大丸百貨、限定伴手禮" },
];

</script>

<template>
  <div class="annual-travel">
    <section class="hero-card">
      <div class="pill">2025 旅遊手冊</div>
      <h1>年度旅遊總覽</h1>
      <p class="lede">
        今年的快樂東京團已經結束，這裡把 05/10-05/17 行程、路線與資源濃縮成一頁，
        也預留 2026 年的籌備欄位，方便後續直接接續規劃。
      </p>
      <div class="cta-row">
        <RouterLink class="btn primary" to="/travel">打開 2025 完整手冊</RouterLink>
        <RouterLink class="btn ghost" to="/travellist">行前清單圖</RouterLink>
      </div>
      <div class="meta">
        <div class="meta-item">
          <span class="meta-label">航班</span>
          <span class="meta-value">TR876 TPE→NRT 06:40 / 10:45</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">基地</span>
          <span class="meta-value">押上・Access 特快 + 地鐵一日券</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">主題</span>
          <span class="meta-value">神田祭、哈利波特、千客萬來、三社祭</span>
        </div>
      </div>
    </section>

    <section class="grid">
      <article class="card days">
        <header class="card-head">
          <div>
            <p class="eyebrow">2025 行程節奏</p>
            <h2>每日摘要</h2>
          </div>
          <RouterLink class="link" to="/travel">看詳細 Markdown 手冊 →</RouterLink>
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

      <article class="card resources">
        <header class="card-head">
          <div>
            <p class="eyebrow">快速入口</p>
            <h2>路線 & 工具</h2>
          </div>
        </header>
        <div class="resource-grid">
          <RouterLink v-for="item in resources" :key="item.to" class="resource-card" :to="item.to">
            <div class="resource-title">{{ item.label }}</div>
            <p class="resource-desc">{{ item.desc }}</p>
            <span class="arrow">開啟</span>
          </RouterLink>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.annual-travel {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.hero-card {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(125, 240, 255, 0.2), rgba(140, 248, 216, 0.08));
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
  background: linear-gradient(145deg, #7df0ff, #8cf8d8);
  color: #06201b;
  border: none;
  box-shadow: 0 12px 32px rgba(125, 240, 255, 0.35);
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

.timeline-row,
.task-list li {
  display: grid;
  grid-template-columns: 120px 16px 1fr;
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
  background: linear-gradient(145deg, #7df0ff, #8cf8d8);
  margin-top: 6px;
}

.title {
  font-weight: 700;
}

.detail {
  color: var(--text-muted);
}

.resources .resource-grid {
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

  .timeline-row,
  .task-list li {
    grid-template-columns: 96px 16px 1fr;
  }
}
</style>
