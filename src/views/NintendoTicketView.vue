<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const targetDate = new Date("2026-07-01T00:00:00+09:00").getTime();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const expired = ref(false);

let timer: ReturnType<typeof setInterval> | null = null;

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    expired.value = true;
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    if (timer) clearInterval(timer);
    return;
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.value = Math.floor((diff / (1000 * 60)) % 60);
  seconds.value = Math.floor((diff / 1000) % 60);
}

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

const pricing = [
  { label: "大人（18 歲以上）", price: "¥3,300" },
  { label: "高中生・大學生", price: "¥2,200" },
  { label: "國小・國中生", price: "¥1,100" },
  { label: "學齡前兒童", price: "免費" },
];

const lotterySteps = [
  { step: "1", title: "註冊 Nintendo 帳號", desc: "每位入場者都需要各自的 Nintendo 帳號" },
  { step: "2", title: "進入抽選頁面", desc: "在官方網站選擇希望入場的日期與時段" },
  { step: "3", title: "填寫申請資料", desc: "填寫入場人數與所有同行者的帳號資訊" },
  { step: "4", title: "等待抽選結果", desc: "抽選結束後會以 Email 通知中籤結果" },
  { step: "5", title: "付款取得門票", desc: "中籤後在期限內完成付款，取得電子門票" },
];

const notices = [
  "每位入場者都需要自己的 Nintendo 帳號（4 人都要註冊）",
  "抽選為每月開放，通常在入場月份前 3 個月開始",
  "需準備可線上付款的信用卡或其他支付方式",
  "門票為指定日期與時段，無法更改",
  "當日需出示電子門票 QR Code 與身分證件",
  "館內禁止攜帶外食與大型行李",
];
</script>

<template>
  <div class="nintendo">
    <!-- Hero Section -->
    <section class="hero-card">
      <div class="pill">🎮 任天堂博物館</div>
      <h1 class="hero-title">任天堂博物館 — 搶票倒數</h1>
      <p class="lede">
        京都宇治的任天堂博物館採抽選制購票，我們預計 2026/10/13 前往參觀。
        提前準備好帳號與資料，開放抽選時立刻搶票！
      </p>
      <div class="location">
        <span class="location-label">📍 地址</span>
        <span>京都府宇治市小倉町神楽田56番地</span>
      </div>
    </section>

    <!-- Countdown Section -->
    <section class="countdown-section">
      <h2 class="section-title">抽選開放倒數</h2>

      <div v-if="expired" class="countdown-expired">
        <p class="expired-text">抽選可能已經開放！請立即前往官網確認</p>
      </div>

      <div v-else class="countdown-grid">
        <div class="countdown-block">
          <span class="countdown-number">{{ days }}</span>
          <span class="countdown-label">天</span>
        </div>
        <span class="countdown-sep">:</span>
        <div class="countdown-block">
          <span class="countdown-number">{{ pad(hours) }}</span>
          <span class="countdown-label">時</span>
        </div>
        <span class="countdown-sep">:</span>
        <div class="countdown-block">
          <span class="countdown-number">{{ pad(minutes) }}</span>
          <span class="countdown-label">分</span>
        </div>
        <span class="countdown-sep">:</span>
        <div class="countdown-block">
          <span class="countdown-number">{{ pad(seconds) }}</span>
          <span class="countdown-label">秒</span>
        </div>
      </div>

      <p class="countdown-note">⚠️ 預估開放時間為 2026/07/01，以官方公告為準</p>
    </section>

    <!-- Info Cards Grid -->
    <div class="info-grid">
      <!-- Pricing Card -->
      <article class="card">
        <header class="card-head">
          <div>
            <p class="eyebrow">票價資訊</p>
            <h2>入場費用</h2>
          </div>
        </header>
        <div class="pricing-list">
          <div v-for="item in pricing" :key="item.label" class="pricing-row">
            <span class="pricing-label">{{ item.label }}</span>
            <span class="pricing-price">{{ item.price }}</span>
          </div>
        </div>
        <p class="card-hint">我們 4 人皆為大人票，共計 ¥13,200</p>
      </article>

      <!-- Lottery Process Card -->
      <article class="card">
        <header class="card-head">
          <div>
            <p class="eyebrow">抽選流程</p>
            <h2>如何購票</h2>
          </div>
        </header>
        <div class="steps-list">
          <div v-for="item in lotterySteps" :key="item.step" class="step-row">
            <div class="step-number">{{ item.step }}</div>
            <div>
              <p class="step-title">{{ item.title }}</p>
              <p class="step-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </article>

      <!-- Notices Card -->
      <article class="card">
        <header class="card-head">
          <div>
            <p class="eyebrow">注意事項</p>
            <h2>行前準備</h2>
          </div>
        </header>
        <ul class="notice-list">
          <li v-for="(notice, idx) in notices" :key="idx">
            <div class="dot" />
            <span>{{ notice }}</span>
          </li>
        </ul>
      </article>
    </div>

    <!-- CTA Button -->
    <section class="cta-section">
      <a
        href="https://museum.nintendo.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-official"
      >
        前往任天堂博物館官方網站 →
      </a>
      <p class="cta-hint">點擊前往官網查看最新抽選資訊與開放時間</p>
    </section>
  </div>
</template>

<style scoped>
.nintendo {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Hero */
.hero-card {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.12), rgba(125, 240, 255, 0.14));
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

.hero-title {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin: 0.4rem 0;
  background: linear-gradient(135deg, #ff4444, #ff9966, #7df0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lede {
  color: var(--text-muted);
  max-width: 720px;
}

.location {
  margin-top: 0.8rem;
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: inline-flex;
  gap: 0.5rem;
  font-size: 0.92rem;
}

.location-label {
  font-weight: 600;
}

/* Countdown */
.countdown-section {
  padding: 2rem 1.6rem;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(255, 68, 68, 0.08), rgba(125, 240, 255, 0.1));
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  text-align: center;
}

.section-title {
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
}

.countdown-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.countdown-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  padding: 1rem 0.8rem;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.countdown-number {
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, #ff4444, #ff9966, #7df0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px rgba(255, 153, 102, 0.4));
}

.countdown-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.3rem;
  letter-spacing: 0.1em;
}

.countdown-sep {
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--text-muted);
  opacity: 0.5;
  align-self: flex-start;
  padding-top: 0.8rem;
}

.countdown-note {
  margin-top: 1rem;
  color: var(--text-muted);
  font-size: 0.88rem;
}

.countdown-expired {
  padding: 1.5rem;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(140, 248, 216, 0.15), rgba(125, 240, 255, 0.15));
  border: 1px solid var(--accent);
}

.expired-text {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
}

/* Info Grid */
.info-grid {
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

.card-hint {
  margin-top: 0.8rem;
  padding-top: 0.6rem;
  border-top: 1px solid var(--border);
  color: var(--accent);
  font-weight: 600;
  font-size: 0.92rem;
}

/* Pricing */
.pricing-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pricing-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.pricing-label {
  color: var(--text-muted);
}

.pricing-price {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--accent-strong);
}

/* Steps */
.steps-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.step-row {
  display: grid;
  grid-template-columns: 32px 1fr;
  align-items: start;
  gap: 0.7rem;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff4444, #ff9966);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: #0a0a0a;
  flex-shrink: 0;
}

.step-title {
  font-weight: 700;
}

.step-desc {
  color: var(--text-muted);
  font-size: 0.92rem;
}

/* Notices */
.notice-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.notice-list li {
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: start;
  gap: 0.6rem;
  color: var(--text-muted);
  font-size: 0.92rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff4444, #7df0ff);
  margin-top: 6px;
  flex-shrink: 0;
}

/* CTA */
.cta-section {
  text-align: center;
  padding: 1.6rem;
  border-radius: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.btn-official {
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 14px;
  background: linear-gradient(145deg, #ff4444, #ff9966, #7df0ff);
  color: #0a0a0a;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none;
  box-shadow: 0 12px 32px rgba(255, 68, 68, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-official:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(255, 68, 68, 0.4);
}

.cta-hint {
  margin-top: 0.7rem;
  color: var(--text-muted);
  font-size: 0.88rem;
}

@media (max-width: 640px) {
  .countdown-block {
    min-width: 64px;
    padding: 0.7rem 0.5rem;
  }

  .countdown-sep {
    font-size: 1.6rem;
    padding-top: 0.5rem;
  }
}
</style>
