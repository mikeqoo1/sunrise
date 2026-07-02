<template>
  <div class="mockup-page">
    <header class="mk-head">
      <h1 class="mk-title">戰隊球衣・LOGO 示意圖</h1>
      <p class="mk-sub">
        點選左側 LOGO，右側即時預覽在<strong>深底</strong>與<strong>淺底</strong>球衣上的樣子。
        三個版位（胸前、左胸、球褲下方）可各自開關 —— 想看整套就全開，只留一個也行。
      </p>
    </header>

    <div class="mk-layout">
      <!-- 左：LOGO 選擇 -->
      <aside class="picker">
        <h2 class="picker-title">選擇 LOGO</h2>
        <div class="logo-grid">
          <button
            v-for="logo in logos"
            :key="logo.file"
            class="logo-cell"
            :class="{ active: selected.file === logo.file }"
            type="button"
            @click="selected = logo"
          >
            <span class="logo-thumb">
              <img :src="logoSrc(logo.file)" :alt="logo.label" loading="lazy" />
            </span>
            <span class="logo-name">{{ logo.label }}</span>
          </button>
        </div>
      </aside>

      <!-- 右：預覽 -->
      <section class="preview">
        <div class="controls">
          <span class="controls-label">顯示版位</span>
          <div class="toggle-row">
            <label
              v-for="p in placements"
              :key="p.key"
              class="toggle"
              :class="{ on: p.on }"
            >
              <input type="checkbox" v-model="p.on" />
              <span>{{ p.label }}</span>
            </label>
          </div>
        </div>

        <div class="jerseys">
          <div v-for="theme in themes" :key="theme.key" class="jersey-col">
            <div class="jersey-stage" :class="`stage-${theme.key}`">
              <svg class="jersey-svg" viewBox="0 0 260 420" xmlns="http://www.w3.org/2000/svg">
                <!-- 球褲 -->
                <path
                  d="M62 232 L198 232 L204 398 L150 398 L130 306 L110 398 L56 398 Z"
                  :fill="theme.jersey"
                  :stroke="theme.edge"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <rect x="60" y="232" width="140" height="13" :fill="theme.trim" opacity="0.92" rx="2" />
                <rect x="61" y="250" width="6" height="140" :fill="theme.trim" opacity="0.8" rx="3" />
                <rect x="193" y="250" width="6" height="140" :fill="theme.trim" opacity="0.8" rx="3" />

                <!-- 背心 -->
                <path
                  d="M58 56 L108 50 Q130 88 152 50 L202 56 L210 86 Q180 98 172 128 L198 214 L62 214 L88 128 Q80 98 50 86 Z"
                  :fill="theme.jersey"
                  :stroke="theme.edge"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <!-- V 領滾邊 -->
                <path
                  d="M108 50 Q130 88 152 50"
                  fill="none"
                  :stroke="theme.trim"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <!-- 下擺滾邊 -->
                <rect x="62" y="206" width="136" height="5" :fill="theme.trim" opacity="0.85" rx="2" />
              </svg>

              <!-- LOGO 版位疊層 -->
              <div
                v-if="show.chest"
                class="patch chest"
                :style="{ '--trim': theme.trim }"
              >
                <img :src="logoSrc(selected.file)" :alt="selected.label" />
              </div>
              <div
                v-if="show.leftChest"
                class="patch badge left-chest"
                :style="{ '--trim': theme.trim }"
              >
                <img :src="logoSrc(selected.file)" :alt="selected.label" />
              </div>
              <div
                v-if="show.shorts"
                class="patch badge shorts"
                :style="{ '--trim': theme.trim }"
              >
                <img :src="logoSrc(selected.file)" :alt="selected.label" />
              </div>
            </div>
            <span class="theme-label">{{ theme.label }}球衣</span>
          </div>
        </div>

        <p class="current-name">目前 LOGO：<strong>{{ selected.label }}</strong></p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

interface Logo {
  file: string
  label: string
}

const base = import.meta.env.BASE_URL
const logoSrc = (file: string) => `${base}HAPPY_v2/${file}`

// public/HAPPY_v2/ 內的素材
const logos: Logo[] = [
  { file: '紅連暗影柴-精緻版.png', label: '紅連暗影柴（精緻）' },
  { file: '紅連暗影柴-普通版.png', label: '紅連暗影柴（普通）' },
  { file: '雷電暴龍-精緻版.png', label: '雷電暴龍（精緻）' },
  { file: '雷電暴龍.png', label: '雷電暴龍' },
  { file: '機械暴龍.png', label: '機械暴龍' },
  { file: '暴龍.png', label: '暴龍' },
  { file: '三角龍.png', label: '三角龍' },
  { file: '劍龍.png', label: '劍龍' },
  { file: '風神翼龍.png', label: '風神翼龍' },
  { file: '三龍合體.png', label: '三龍合體' },
  { file: '星河柴犬.png', label: '星河柴犬' },
  { file: '星河袋鼠.png', label: '星河袋鼠' },
  { file: '帥氣狗.png', label: '帥氣狗' },
  { file: '貓咪哥吉拉.png', label: '貓咪哥吉拉' },
  { file: '貓咪哥吉拉簡易版本.png', label: '貓咪哥吉拉（簡易）' },
]

const selected = ref<Logo>(logos[0])

const placements = reactive([
  { key: 'chest', label: '胸前大 LOGO', on: true },
  { key: 'leftChest', label: '左胸徽章', on: true },
  { key: 'shorts', label: '球褲下方', on: true },
])

const show = computed(() => ({
  chest: placements.find((p) => p.key === 'chest')?.on ?? false,
  leftChest: placements.find((p) => p.key === 'leftChest')?.on ?? false,
  shorts: placements.find((p) => p.key === 'shorts')?.on ?? false,
}))

const themes = [
  { key: 'dark', label: '深底', jersey: '#16223f', edge: '#0a1330', trim: '#8cf8d8' },
  { key: 'light', label: '淺底', jersey: '#eef2f8', edge: '#c7d1e0', trim: '#16223f' },
]
</script>

<style scoped>
.mockup-page {
  max-width: 1040px;
  margin: 0 auto;
}

.mk-head {
  margin-bottom: 1.2rem;
}

.mk-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.mk-sub {
  margin-top: 0.4rem;
  color: var(--text-muted);
  font-size: 0.95rem;
  max-width: 720px;
}

.mk-sub strong {
  color: var(--accent);
}

.mk-layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 1.4rem;
  align-items: start;
}

/* ---- LOGO 選擇 ---- */
.picker {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1rem;
  box-shadow: var(--shadow-soft);
}

.picker-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
}

.logo-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.4rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: transform 0.15s ease, border-color 0.15s ease, background 0.15s ease;
  color: var(--text-muted);
}

.logo-cell:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  color: var(--text-primary);
}

.logo-cell.active {
  border-color: var(--accent);
  background: linear-gradient(145deg, rgba(140, 248, 216, 0.18), rgba(125, 240, 255, 0.1));
  color: var(--text-primary);
}

.logo-thumb {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 40%, #1b2744, #0a1122);
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
}

.logo-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-name {
  font-size: 0.72rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.25;
}

/* ---- 預覽 ---- */
.preview {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.2rem;
  box-shadow: var(--shadow-soft);
}

.controls {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
}

.controls-label {
  font-weight: 700;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.toggle-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
}

.toggle.on {
  border-color: var(--accent);
  color: var(--text-primary);
  background: rgba(140, 248, 216, 0.12);
}

.toggle input {
  accent-color: var(--accent);
  cursor: pointer;
}

.jerseys {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
}

.jersey-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.jersey-stage {
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 260 / 420;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
}

.stage-dark {
  background: radial-gradient(circle at 50% 25%, #10162c, #05070f);
}

.stage-light {
  background: radial-gradient(circle at 50% 25%, #f4f7fb, #dbe2ee);
}

.jersey-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.35));
}

/* LOGO 版位 —— 皆做成印花／徽章，深淺底都適用 */
.patch {
  position: absolute;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.patch img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.patch.chest {
  left: 32%;
  top: 24.5%;
  width: 36%;
  height: 20.5%;
  padding: 5px;
  border-radius: 12px;
  background: radial-gradient(circle at 50% 40%, #1b2744, #090f20);
  border: 2px solid var(--trim);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
}

.patch.badge {
  padding: 3px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 40%, #1b2744, #090f20);
  border: 2px solid var(--trim);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.patch.left-chest {
  left: 59.5%;
  top: 19%;
  width: 12%;
  height: 7.4%;
}

.patch.shorts {
  left: 24.5%;
  top: 79%;
  width: 15%;
  height: 9.3%;
}

.theme-label {
  font-weight: 700;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.current-name {
  margin-top: 1.1rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.current-name strong {
  color: var(--accent);
  font-weight: 700;
}

/* ---- 響應式 ---- */
@media (max-width: 820px) {
  .mk-layout {
    grid-template-columns: 1fr;
  }

  .logo-grid {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }
}

@media (max-width: 480px) {
  .jerseys {
    gap: 0.8rem;
  }

  .patch.chest {
    padding: 3px;
  }
}
</style>
