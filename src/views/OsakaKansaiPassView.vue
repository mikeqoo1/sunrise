<script setup lang="ts">
import { RouterLink } from "vue-router";

interface GuideStep {
  title: string;
  detail: string;
  items: string[];
}

interface NoteCard {
  title: string;
  detail: string;
}

const guideSteps: GuideStep[] = [
  {
    title: "1. 出發前先準備",
    detail: "先把購買平台的電子憑證整理好，不要到現場才找票。",
    items: [
      "確認票券有效期限、可使用設施與每張票的使用次數。",
      "把 QR code / 憑證頁截圖，另外也保留平台 App 或 Email 原始憑證。",
      "每個人的票券分開標記，避免現場核銷到錯的人。",
    ],
  },
  {
    title: "2. 到現場怎麼用",
    detail: "抵達景點或指定兌換點後，先找售票櫃檯、入口驗票處或服務台。",
    items: [
      "打開電子憑證，把 QR code 或票券編號給工作人員掃描。",
      "需要換實體票的設施，先換票再排入口；可直接入場的設施就照工作人員指示進場。",
      "不要自己先按下使用、兌換或核銷按鈕，除非現場人員請你操作。",
    ],
  },
  {
    title: "3. 用完後檢查",
    detail: "每次核銷後立刻確認剩餘可用項目，避免下一站才發現已經扣錯。",
    items: [
      "截圖保留已使用狀態，方便多人分工確認。",
      "如果現場掃描失敗，先出示訂單編號與護照姓名，再請工作人員協助。",
      "若設施臨時休館或額滿，改排其他可用設施，不要硬排到最後一天。",
    ],
  },
];

const quickNotes: NoteCard[] = [
  {
    title: "先看憑證頁",
    detail: "關西樂享周遊券的實際規則以購買平台憑證為準，尤其是有效期限、可用設施與是否需要預約。",
  },
  {
    title: "不是所有地方都能直接刷",
    detail: "有些點可直接掃 QR，有些點要先到櫃檯換票；交通或景點都先看票券頁的使用方法。",
  },
  {
    title: "手機電量很重要",
    detail: "出門前確認手機有電、網路可用，也把 QR code 截圖備份到相簿。",
  },
  {
    title: "避開最後入場時間",
    detail: "很多設施最後入場比營業結束早，當天要用券就先查營業時間與休館日。",
  },
];

const tripUses = [
  { day: "10/10(六)", plan: "飛機＋Outlet", note: "先不要急著核銷，抵達日以移動和採買為主。" },
  { day: "10/11(日)", plan: "梅田＋哥吉拉御守", note: "出門前看梅田周邊有沒有可順路使用的設施。" },
  { day: "10/13(二)", plan: "任天堂＋京都或宇治", note: "如果要排京都或宇治周邊景點，先確認是否在可用設施清單內。" },
  { day: "10/16(五)", plan: "通天閣附近輕鬆走", note: "適合安排大阪市區景點型核銷，節奏不要排太滿。" },
];
</script>

<template>
  <div class="pass-page">
    <section class="hero-card">
      <RouterLink class="back-link" to="/2026travel">← 回到總覽</RouterLink>
      <div class="pill">🎫 2026 大阪・交通票券</div>
      <h1>關西樂享周遊券</h1>
      <p class="lede">
        這頁當作現場使用小抄：出門前先備份電子憑證，到景點或指定兌換點出示 QR code，
        依工作人員指示換票或核銷。實際可用設施、期限和預約規則，以購買平台憑證為準。
      </p>
    </section>

    <section class="summary-grid">
      <article v-for="note in quickNotes" :key="note.title" class="summary-card">
        <h2>{{ note.title }}</h2>
        <p>{{ note.detail }}</p>
      </article>
    </section>

    <section class="guide-section">
      <div class="section-head">
        <p class="eyebrow">HOW TO USE</p>
        <h2>使用流程</h2>
      </div>
      <div class="step-list">
        <article v-for="step in guideSteps" :key="step.title" class="step-card">
          <h3>{{ step.title }}</h3>
          <p class="step-detail">{{ step.detail }}</p>
          <ul>
            <li v-for="item in step.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="guide-section">
      <div class="section-head">
        <p class="eyebrow">TRIP NOTE</p>
        <h2>這趟可放在哪幾天用</h2>
      </div>
      <div class="trip-list">
        <article v-for="item in tripUses" :key="item.day" class="trip-card">
          <div class="trip-date">{{ item.day }}</div>
          <div>
            <h3>{{ item.plan }}</h3>
            <p>{{ item.note }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="alert-card">
      <h2>現場要記得</h2>
      <p>
        掃碼前先確認是不是要使用這一張券。若多人一起用，先說好誰負責開票券頁，
        核銷後立刻回報，避免同一張票被重複拿去下一站排隊。
      </p>
    </section>

    <div class="bottom-nav">
      <RouterLink class="btn ghost" to="/2026travel">← 回到總覽</RouterLink>
      <RouterLink class="btn ghost" to="/travellist">行前打包清單</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.pass-page {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 900px;
  margin: 0 auto;
}

.hero-card,
.guide-section,
.alert-card {
  padding: 1.4rem;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.hero-card {
  background: linear-gradient(135deg, rgba(255, 153, 102, 0.16), rgba(125, 240, 255, 0.14));
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
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin: 0.4rem 0;
}

.lede,
.summary-card p,
.step-detail,
.step-card li,
.trip-card p,
.alert-card p {
  color: var(--text-muted);
  line-height: 1.65;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.8rem;
}

.summary-card,
.step-card,
.trip-card {
  padding: 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
}

.summary-card h2,
.alert-card h2 {
  font-size: 1.05rem;
  margin-bottom: 0.35rem;
}

.section-head {
  margin-bottom: 0.9rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.section-head h2 {
  font-size: 1.3rem;
}

.step-list {
  display: grid;
  gap: 0.9rem;
}

.step-card h3,
.trip-card h3 {
  font-size: 1.05rem;
  margin-bottom: 0.3rem;
}

.step-card ul {
  margin: 0.7rem 0 0;
  padding-left: 1.1rem;
}

.step-card li + li {
  margin-top: 0.35rem;
}

.trip-list {
  display: grid;
  gap: 0.7rem;
}

.trip-card {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0.8rem;
  align-items: start;
}

.trip-date {
  color: var(--accent);
  font-weight: 800;
  letter-spacing: 0.03em;
}

.alert-card {
  border-color: rgba(255, 153, 102, 0.45);
  background: rgba(255, 153, 102, 0.08);
}

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
  .trip-card {
    grid-template-columns: 1fr;
  }
}
</style>