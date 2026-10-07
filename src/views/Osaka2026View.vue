<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";
import { RouterLink } from "vue-router";

const COLLAB_NOTE_URL = "https://hackmd.io/@JPtrivial/Sk1JZjLuMx";

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
    title: "宇治＋任天堂博物館",
    desc: "從京阪宇治沿宇治川、平等院與表參道單向散步，再前往任天堂博物館 13:00～13:30 入場。",
  },
  {
    icon: "🏯",
    title: "勝尾寺＋箕面",
    desc: "前往箕面的勝尾寺看滿山達摩；體力許可再接箕面瀑布，下坡走往阪急箕面站。",
  },
  {
    icon: "🦖",
    title: "哥吉拉御守",
    desc: "大阪限定哥吉拉御守！特定神社或周邊商店才有，數量有限，記得早點去搶。",
  },
  {
    icon: "🎆",
    title: "淀川花火大會",
    desc: "10/17 白天先逛難波，晚上看第 38 回なにわ淀川花火大会。左岸河川敷禁止進入，需依官方開放會場重排動線。",
  },
  {
    icon: "🎋",
    title: "京都寶可夢＋嵐山",
    desc: "先找阿嚕想要的寶可夢徽章，再安排嵐山竹林、渡月橋；下雨則改走新京極與寺町京極。",
  },
  {
    icon: "⚓",
    title: "神戶一日遊",
    desc: "10/18 前往神戶三宮與北野異人館街，晚餐以神戶牛為候選，餐廳仍待確認。",
  },
];

const travelDays = [
  {
    date: "10/10(六)",
    title: "飛機✈️＋臨空城 Outlet",
    detail: "台灣虎航 IT710 07:45 TPE → 11:30 KIX，抵達後前往臨空城 Outlet",
  },
  {
    date: "10/11(日)",
    title: "梅田商場一日遊＋哥吉拉御守",
    detail: "GRAND GREEN／GRAND FRONT → Alpen OSAKA → 哥吉拉御守 → 梅田藍天大廈",
  },
  { date: "10/12(一)", title: "宇治＋任天堂博物館", detail: "宇治單向散步，博物館 13:00～13:30 入場" },
  { date: "10/13(二)", title: "INDIGENA＋中崎町＋但馬屋", detail: "上午保留彈性，14:00 逛中崎町，晚上跟阿嚕聚餐" },
  { date: "10/14(三)", title: "京都寶可夢＋嵐山", detail: "找寶可夢徽章、逛嵐山；雨備為新京極＋寺町京極" },
  { date: "10/15(四)", title: "環球影城", detail: "萬聖節寶可夢遊行＋超級任天堂世界" },
  {
    date: "10/16(五)",
    title: "勝尾寺＋箕面",
    detail: "達摩、箕面瀑布；晚間好市多／心齋橋待大家確認",
  },
  {
    date: "10/17(六)",
    title: "難波＋淀川花火大會🎆",
    detail: "白天難波採買，提早前往官方開放的右岸會場",
  },
  { date: "10/18(日)", title: "神戶一日遊", detail: "神戶三宮＋北野異人館街，晚餐候選神戶牛" },
  { date: "10/19(一)", title: "回家✈️", detail: "10:30 抵達機場，星宇 JX821 13:25 起飛" },
];

const prepTasks = [
  { title: "環球票", detail: "確認 USJ 門票、Express Pass 與任天堂世界入場方式" },
  {
    title: "淀川花火票與右岸動線",
    detail:
      "左岸梅田側河川敷全面禁止進入；只依官方最新協賛觀覽席、會場圖與交通管制資訊購票",
  },
  {
    title: "任天堂博物館",
    detail: "確認抽選／購票完成，入場時段為 10/12 13:00～13:30",
  },
];

const quickLinks = [
  { label: "2026 詳細手冊", desc: "每日圖文與票券連結", to: "/2026travel/detail" },
  { label: "🍽️ 美食 & 必逛", desc: "餐廳＋運動/泳裝/藥粧必逛店家", to: "/2026food" },
  { label: "行前清單", desc: "打包/證件/藥品", to: "/travellist" },
  { label: "關西樂享周遊券", desc: "使用方式與現場核銷提醒", to: "/2026kansai-pass" },
  { label: "🗺️ 在地人景點", desc: "深度旅遊・非觀光客路線", to: "/2026hidden-gems" },
  { label: "大阪購物清單", desc: "籃球/泳衣/潮流/藥粧清單", to: "/2026shopping" },
  { label: "住宿比較", desc: "已改選 玉川 獨棟 110㎡（福島區）｜周邊指南", to: "/2026hotel" },
  { label: "2025 東京手冊", desc: "延續格式參考", to: "/2025travel" },
];

const itineraryTrack = ref<HTMLElement | null>(null);
const activeDay = ref(0);
const isDragging = ref(false);
let scrollFrame = 0;
let dragStartX = 0;
let dragStartScrollLeft = 0;
let activePointerId: number | null = null;

const getDayCards = () => {
  return Array.from(itineraryTrack.value?.querySelectorAll<HTMLElement>(".day-card") ?? []);
};

const updateActiveDay = () => {
  const track = itineraryTrack.value;
  const cards = getDayCards();
  if (!track || cards.length === 0) return;

  const trackCenter = track.scrollLeft + track.clientWidth / 2;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  cards.forEach((card, index) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(trackCenter - cardCenter);
    if (distance < closestDistance) {
      closestIndex = index;
      closestDistance = distance;
    }
  });

  activeDay.value = closestIndex;
};

const onItineraryScroll = () => {
  window.cancelAnimationFrame(scrollFrame);
  scrollFrame = window.requestAnimationFrame(updateActiveDay);
};

const scrollToDay = (index: number) => {
  const cards = getDayCards();
  const nextIndex = Math.min(Math.max(index, 0), cards.length - 1);
  cards[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  activeDay.value = nextIndex;
};

const onDragStart = (event: PointerEvent) => {
  const track = itineraryTrack.value;
  if (!track || event.pointerType !== "mouse" || event.button !== 0) return;

  activePointerId = event.pointerId;
  dragStartX = event.clientX;
  dragStartScrollLeft = track.scrollLeft;
  isDragging.value = true;
  track.setPointerCapture(event.pointerId);
};

const onDragMove = (event: PointerEvent) => {
  const track = itineraryTrack.value;
  if (!track || !isDragging.value || event.pointerId !== activePointerId) return;

  event.preventDefault();
  track.scrollLeft = dragStartScrollLeft - (event.clientX - dragStartX);
};

const onDragEnd = (event: PointerEvent) => {
  const track = itineraryTrack.value;
  if (!track || event.pointerId !== activePointerId) return;

  if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
  isDragging.value = false;
  activePointerId = null;
  updateActiveDay();
  scrollToDay(activeDay.value);
};

onBeforeUnmount(() => window.cancelAnimationFrame(scrollFrame));
</script>

<template>
  <div class="osaka">
    <section class="hero-card">
      <div class="pill">2026 大阪・環球影城</div>
      <h1>{{ tripInfo.title }}</h1>
      <p class="lede">
        快樂龍 2026 年度旅行！這次前進大阪，鎖定環球影城寶可夢遊行、京都任天堂博物館，
        再走訪勝尾寺與嵐山。四個人、十天九夜，一起出發吧！
      </p>
      <div class="cta-row">
        <RouterLink class="btn primary" to="/2026travel/detail">查看詳細手冊</RouterLink>
        <a class="btn ghost" :href="COLLAB_NOTE_URL" target="_blank" rel="noopener noreferrer">阿庭 × 嘎菲共編筆記 ↗</a>
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
      <div class="section-heading">
        <h2 class="section-title">重點行程</h2>
        <span class="swipe-hint">左右滑動查看更多 <span aria-hidden="true">↔</span></span>
      </div>
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
          <div class="card-head-actions">
            <span class="drag-hint"><span aria-hidden="true">↔</span> 滑動／拖拉卡片</span>
            <RouterLink class="link" to="/2026travel/detail">看詳細手冊 →</RouterLink>
          </div>
        </header>

        <div class="day-picker" role="tablist" aria-label="選擇旅遊日期">
          <button
            v-for="(item, index) in travelDays"
            :key="item.date"
            class="day-chip"
            :class="{ active: activeDay === index }"
            type="button"
            role="tab"
            :aria-selected="activeDay === index"
            :aria-controls="`travel-day-${index + 1}`"
            @click="scrollToDay(index)"
          >
            <span>Day {{ index + 1 }}</span>
            <small>{{ item.date.slice(0, 5) }}</small>
          </button>
        </div>

        <div class="itinerary-wrap">
          <button
            class="carousel-button previous"
            type="button"
            aria-label="上一天"
            :disabled="activeDay === 0"
            @click="scrollToDay(activeDay - 1)"
          >
            ‹
          </button>
          <div
            ref="itineraryTrack"
            class="itinerary-track"
            :class="{ dragging: isDragging }"
            @scroll.passive="onItineraryScroll"
            @pointerdown="onDragStart"
            @pointermove="onDragMove"
            @pointerup="onDragEnd"
            @pointercancel="onDragEnd"
          >
            <article
              v-for="(item, index) in travelDays"
              :id="`travel-day-${index + 1}`"
              :key="item.date"
              class="day-card"
              :class="{ active: activeDay === index }"
              role="tabpanel"
              :aria-label="`第 ${index + 1} 天，${item.date}`"
            >
              <div class="day-card-top">
                <span class="day-number">Day {{ String(index + 1).padStart(2, "0") }}</span>
                <span class="day-date">{{ item.date }}</span>
              </div>
              <div class="day-card-marker" aria-hidden="true">
                <span>{{ index === travelDays.length - 1 ? "🏠" : "●" }}</span>
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.detail }}</p>
            </article>
          </div>
          <button
            class="carousel-button next"
            type="button"
            aria-label="下一天"
            :disabled="activeDay === travelDays.length - 1"
            @click="scrollToDay(activeDay + 1)"
          >
            ›
          </button>
        </div>

        <div class="carousel-status" aria-live="polite">
          <div class="progress-dots">
            <button
              v-for="(_, index) in travelDays"
              :key="index"
              type="button"
              :class="{ active: activeDay === index }"
              tabindex="-1"
              :aria-label="`前往第 ${index + 1} 天`"
              @click="scrollToDay(index)"
            />
          </div>
          <span>{{ activeDay + 1 }} / {{ travelDays.length }}</span>
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
        <p class="mobile-swipe-label">左右滑動快速入口 <span aria-hidden="true">↔</span></p>
        <div class="resource-grid">
          <a class="resource-card source-card" :href="COLLAB_NOTE_URL" target="_blank" rel="noopener noreferrer">
            <div class="resource-title">📝 阿庭 × 嘎菲共編筆記</div>
            <p class="resource-desc">原始 HackMD 行程、圖片與交通研究</p>
            <span class="arrow">開啟原稿 ↗</span>
          </a>
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
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.swipe-hint,
.mobile-swipe-label {
  display: none;
  color: var(--text-muted);
  font-size: 0.78rem;
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

.days {
  grid-column: 1 / -1;
  min-width: 0;
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

.card-head-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.drag-hint {
  color: var(--text-muted);
  font-size: 0.8rem;
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

.task-list li {
  display: grid;
  grid-template-columns: 16px 1fr;
  align-items: start;
  gap: 0.6rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ff9966, #7df0ff);
  margin-top: 6px;
}

.day-picker {
  display: flex;
  gap: 0.45rem;
  margin-bottom: 0.9rem;
  padding: 0.15rem 0 0.35rem;
  overflow-x: auto;
  scrollbar-width: none;
}

.day-picker::-webkit-scrollbar,
.itinerary-track::-webkit-scrollbar,
.attraction-grid::-webkit-scrollbar,
.resource-grid::-webkit-scrollbar {
  display: none;
}

.day-chip {
  display: grid;
  flex: 0 0 auto;
  gap: 0.05rem;
  min-width: 74px;
  padding: 0.45rem 0.7rem;
  color: var(--text-muted);
  font: inherit;
  text-align: left;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid var(--border);
  border-radius: 11px;
  cursor: pointer;
  transition: 0.2s ease;
}

.day-chip span {
  font-size: 0.8rem;
  font-weight: 700;
}

.day-chip small {
  font-size: 0.72rem;
}

.day-chip:hover,
.day-chip.active {
  color: #071018;
  background: var(--accent);
  border-color: var(--accent);
  transform: translateY(-1px);
}

.itinerary-wrap {
  position: relative;
}

.itinerary-track {
  display: flex;
  gap: 0.85rem;
  padding: 0.2rem max(2.8rem, calc((100% - min(420px, 82%)) / 2)) 0.8rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  cursor: grab;
  overscroll-behavior-inline: contain;
  touch-action: auto;
}

.itinerary-track.dragging {
  cursor: grabbing;
  scroll-behavior: auto;
  scroll-snap-type: none;
  user-select: none;
}

.day-card {
  position: relative;
  flex: 0 0 min(420px, 82%);
  min-height: 220px;
  padding: 1.25rem;
  overflow: hidden;
  background:
    radial-gradient(circle at 90% 10%, rgba(125, 240, 255, 0.16), transparent 32%),
    linear-gradient(145deg, rgba(255, 153, 102, 0.08), rgba(255, 255, 255, 0.035));
  border: 1px solid var(--border);
  border-radius: 16px;
  scroll-snap-align: center;
  opacity: 0.58;
  transform: scale(0.96);
  transition: opacity 0.22s ease, transform 0.22s ease, border-color 0.22s ease;
}

.day-card.active {
  border-color: rgba(140, 248, 216, 0.68);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.26);
  opacity: 1;
  transform: scale(1);
}

.day-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.day-number {
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.day-date {
  padding: 0.22rem 0.55rem;
  color: var(--text-muted);
  font-size: 0.8rem;
  border: 1px solid var(--border);
  border-radius: 999px;
}

.day-card-marker {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 1.1rem 0 0.65rem;
  color: var(--accent);
  font-size: 0.72rem;
}

.day-card-marker::after {
  width: 72px;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), transparent);
  content: "";
}

.day-card h3 {
  margin-bottom: 0.35rem;
  font-size: clamp(1.08rem, 2vw, 1.3rem);
  font-weight: 700;
}

.day-card p {
  color: var(--text-muted);
  font-size: 0.93rem;
}

.carousel-button {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  padding: 0 0 3px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
  background: rgba(5, 7, 18, 0.82);
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transform: translateY(-50%);
}

.carousel-button.previous {
  left: 0.35rem;
}

.carousel-button.next {
  right: 0.35rem;
}

.carousel-button:disabled {
  opacity: 0.25;
  cursor: default;
}

.carousel-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.78rem;
}

.progress-dots {
  display: flex;
  gap: 0.3rem;
}

.progress-dots button {
  width: 5px;
  height: 5px;
  padding: 0;
  background: var(--border-strong);
  border: 0;
  border-radius: 999px;
  transition: width 0.2s ease, background 0.2s ease;
}

.progress-dots button.active {
  width: 18px;
  background: var(--accent);
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

.source-card {
  background:
    radial-gradient(circle at 100% 0, rgba(125, 240, 255, 0.16), transparent 46%),
    rgba(125, 240, 255, 0.05);
  border-color: rgba(125, 240, 255, 0.3);
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
  .osaka {
    gap: 0.85rem;
  }

  .hero-card,
  .attractions,
  .card {
    padding: 1rem;
  }

  .hero-card .lede {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .cta-row {
    flex-wrap: nowrap;
    margin-inline: -1rem;
    padding: 0.15rem 1rem 0.55rem;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .cta-row::-webkit-scrollbar {
    display: none;
  }

  .btn {
    flex: 0 0 auto;
  }

  .meta {
    grid-template-columns: repeat(2, 1fr);
  }

  .meta-item:last-child {
    grid-column: 1 / -1;
  }

  .section-heading {
    margin-bottom: 0.55rem;
  }

  .swipe-hint,
  .mobile-swipe-label {
    display: block;
  }

  .attraction-grid,
  .resource-grid {
    display: flex;
    gap: 0.7rem;
    margin-inline: -1rem;
    padding: 0.1rem 1rem 0.55rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .attraction-card {
    flex: 0 0 84%;
    scroll-snap-align: start;
  }

  .resource-card {
    flex: 0 0 78%;
    scroll-snap-align: start;
  }

  .card-head {
    align-items: flex-start;
  }

  .card-head-actions {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 0.1rem;
  }

  .drag-hint {
    font-size: 0.72rem;
  }

  .day-picker {
    margin-inline: -1rem;
    padding-inline: 1rem;
  }

  .itinerary-wrap {
    margin-inline: -1rem;
  }

  .itinerary-track {
    padding-inline: 8%;
  }

  .day-card {
    flex-basis: 84%;
    min-height: 230px;
  }

  .carousel-button {
    display: none;
  }

  .mobile-swipe-label {
    margin: -0.5rem 0 0.55rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .itinerary-track {
    scroll-behavior: auto;
  }

  .day-card,
  .day-chip {
    transition: none;
  }
}
</style>
