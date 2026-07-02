<template>
  <div class="mockup-page">
    <header class="mk-head">
      <h1 class="mk-title">戰隊球衣・LOGO 示意圖</h1>
      <p class="mk-sub">
        每個版位可放<strong>不同的 LOGO</strong>：先點下方要編輯的版位，再從左側挑一款套上去。
        右側即時預覽<strong>深底</strong>與<strong>淺底</strong>球衣，版位也可各自開關。
      </p>
    </header>

    <div class="mk-layout">
      <!-- 左：LOGO 選擇 -->
      <aside class="picker">
        <h2 class="picker-title">
          選擇 LOGO
          <span class="picker-target">套用到：{{ activePlacement.label }}</span>
        </h2>
        <div class="logo-grid">
          <button
            v-for="logo in logos"
            :key="logo.file"
            class="logo-cell"
            :class="{ active: activePlacement.logo.file === logo.file }"
            type="button"
            @click="assignLogo(logo)"
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
        <div class="slots">
          <button
            v-for="p in placements"
            :key="p.key"
            class="slot"
            :class="{ active: activeKey === p.key, off: !p.on }"
            type="button"
            @click="activeKey = p.key"
          >
            <span class="slot-thumb">
              <img :src="logoSrc(p.logo.file)" :alt="p.logo.label" />
            </span>
            <span class="slot-info">
              <span class="slot-name">{{ p.label }}</span>
              <span class="slot-logo">{{ p.logo.label }}</span>
            </span>
            <label class="slot-toggle" @click.stop>
              <input type="checkbox" v-model="p.on" />
              <span>顯示</span>
            </label>
          </button>
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

              <!-- LOGO 版位疊層（各自使用自己的 LOGO） -->
              <div
                v-if="chest.on"
                class="patch chest"
                :style="{ '--trim': theme.trim }"
              >
                <img :src="logoSrc(chest.logo.file)" :alt="chest.logo.label" />
              </div>
              <div
                v-if="leftChest.on"
                class="patch badge left-chest"
                :style="{ '--trim': theme.trim }"
              >
                <img :src="logoSrc(leftChest.logo.file)" :alt="leftChest.logo.label" />
              </div>
              <div
                v-if="shorts.on"
                class="patch badge shorts"
                :style="{ '--trim': theme.trim }"
              >
                <img :src="logoSrc(shorts.logo.file)" :alt="shorts.logo.label" />
              </div>
            </div>
            <span class="theme-label">{{ theme.label }}球衣</span>
          </div>
        </div>
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

const byFile = (file: string) => logos.find((l) => l.file === file) as Logo

// 每個版位各自記住自己的 LOGO，預設用不同款示範
const placements = reactive([
  { key: 'chest', label: '胸前大 LOGO', on: true, logo: byFile('雷電暴龍-精緻版.png') },
  { key: 'leftChest', label: '左胸徽章', on: true, logo: byFile('劍龍.png') },
  { key: 'shorts', label: '球褲下方', on: true, logo: byFile('星河柴犬.png') },
])

const chest = placements[0]
const leftChest = placements[1]
const shorts = placements[2]

// 目前正在編輯的版位
const activeKey = ref('chest')
const activePlacement = computed(
  () => placements.find((p) => p.key === activeKey.value) ?? placements[0],
)

function assignLogo(logo: Logo) {
  const target = activePlacement.value
  target.logo = logo
  target.on = true // 指定 LOGO 時自動開啟該版位，避免看不到
}

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
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.picker-target {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
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

/* 版位卡片 */
.slots {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.6rem;
  margin-bottom: 1.2rem;
}

.slot {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.7rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
}

.slot:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
}

.slot.active {
  border-color: var(--accent);
  background: linear-gradient(145deg, rgba(140, 248, 216, 0.16), rgba(125, 240, 255, 0.1));
}

.slot.off {
  opacity: 0.55;
}

.slot-thumb {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: radial-gradient(circle at 50% 40%, #1b2744, #0a1122);
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
}

.slot-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.slot-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
  flex: 1;
}

.slot-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
}

.slot-logo {
  font-size: 0.72rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.slot-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  flex-shrink: 0;
}

.slot-toggle input {
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
