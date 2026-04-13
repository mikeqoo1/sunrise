<template>
  <div class="happy">
    <section class="hero-card">
      <div class="pill">快樂龍戰隊</div>
      <h1>快樂龍戰隊成員</h1>
    </section>

    <!-- 球員描述 -->
    <section class="card player-description">
      <header class="card-head">
        <div>
          <p class="eyebrow">成員介紹</p>
          <h2>球員資訊</h2>
        </div>
      </header>
      <div class="player-list">
        <div class="player-item">20號 - 快樂阿奎：快樂龍 靈魂人物，核心角色</div>
        <div class="player-item">10號 - 快樂阿源：迅猛龍 切入破壞，輕鬆上籃</div>
        <div class="player-item">18號 - 快樂阿哲：偷蛋龍 抄截神偷，快攻高手</div>
        <div class="player-item">99號 - 快樂阿昌：護城龍 防守大鎖，可以防住所有的攻擊</div>
        <div class="player-item">23號 - 快樂阿震：圈圈熊 雖然面目猙獰，但在舔食最喜歡的蜜時，會開心到忍不住露出笑容</div>
      </div>
    </section>

    <!-- 深色樣式 -->
    <section class="card image-block">
      <div class="floating-label">快樂龍戰隊・深色樣式</div>
      <div class="photo-wrapper" @wheel.prevent="onWheelDark" @mousedown="onMouseDownDark" @mousemove="onMouseMoveDark"
        @mouseup="onMouseUpDark" @mouseleave="onMouseUpDark">
        <img src="/happy/快樂龍戰隊1.jpeg" alt="快樂龍戰隊深色" :style="{
          transform: `translate(${darkPosition.x}px, ${darkPosition.y}px) scale(${darkScale})`
        }" draggable="false" />
      </div>
    </section>

    <!-- 淺色樣式 -->
    <section class="card image-block">
      <div class="floating-label">快樂龍戰隊・淺色樣式</div>
      <div class="photo-wrapper" @wheel.prevent="onWheelLight" @mousedown="onMouseDownLight"
        @mousemove="onMouseMoveLight" @mouseup="onMouseUpLight" @mouseleave="onMouseUpLight">
        <img src="/happy/快樂龍戰隊2.jpeg" alt="快樂龍戰隊淺色" :style="{
          transform: `translate(${lightPosition.x}px, ${lightPosition.y}px) scale(${lightScale})`
        }" draggable="false" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 深色圖：縮放、位置、拖曳狀態
const darkScale = ref(1)
const darkPosition = ref({ x: 0, y: 0 })
const draggingDark = ref(false)
const lastDarkMouse = ref({ x: 0, y: 0 })

function onWheelDark(e: WheelEvent) {
  const delta = e.deltaY
  darkScale.value = Math.min(5, Math.max(0.2, darkScale.value - Math.sign(delta) * 0.05))
}
function onMouseDownDark(e: MouseEvent) {
  draggingDark.value = true
  lastDarkMouse.value = { x: e.clientX, y: e.clientY }
}
function onMouseMoveDark(e: MouseEvent) {
  if (!draggingDark.value) return
  const dx = e.clientX - lastDarkMouse.value.x
  const dy = e.clientY - lastDarkMouse.value.y
  darkPosition.value.x += dx
  darkPosition.value.y += dy
  lastDarkMouse.value = { x: e.clientX, y: e.clientY }
}
function onMouseUpDark() {
  draggingDark.value = false
}

// 淺色圖：縮放、位置、拖曳狀態
const lightScale = ref(1)
const lightPosition = ref({ x: 0, y: 0 })
const draggingLight = ref(false)
const lastLightMouse = ref({ x: 0, y: 0 })

function onWheelLight(e: WheelEvent) {
  const delta = e.deltaY
  lightScale.value = Math.min(5, Math.max(0.2, lightScale.value - Math.sign(delta) * 0.05))
}
function onMouseDownLight(e: MouseEvent) {
  draggingLight.value = true
  lastLightMouse.value = { x: e.clientX, y: e.clientY }
}
function onMouseMoveLight(e: MouseEvent) {
  if (!draggingLight.value) return
  const dx = e.clientX - lastLightMouse.value.x
  const dy = e.clientY - lastLightMouse.value.y
  lightPosition.value.x += dx
  lightPosition.value.y += dy
  lastLightMouse.value = { x: e.clientX, y: e.clientY }
}
function onMouseUpLight() {
  draggingLight.value = false
}
</script>

<style scoped>
.happy {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 1000px;
  margin: auto;
}

.hero-card {
  padding: 1.6rem;
  background: linear-gradient(135deg, rgba(140, 248, 216, 0.14), rgba(125, 240, 255, 0.12));
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
  font-weight: 700;
}

.card {
  padding: 1.2rem;
  border-radius: var(--radius-lg);
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

.card-head h2 {
  font-weight: 700;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.player-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.player-item {
  padding: 0.6rem 0.8rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text-primary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.image-block {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.floating-label {
  color: var(--accent);
  font-weight: 700;
  font-size: 1rem;
  user-select: none;
  pointer-events: none;
}

.photo-wrapper {
  width: 100%;
  height: 60vh;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface-strong);
  border-radius: var(--radius-md);
  cursor: grab;
}

.photo-wrapper:active {
  cursor: grabbing;
}

.photo-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transform-origin: center center;
  transition: transform 0.05s ease-out;
  user-select: none;
  position: relative;
  z-index: 1;
}

@media (max-width: 640px) {
  .happy {
    padding: 0 0.4rem;
  }

  .hero-card {
    padding: 1.2rem;
  }

  .hero-card h1 {
    font-size: 1.4rem;
  }

  .card {
    padding: 0.8rem;
  }

  .player-item {
    font-size: 0.85rem;
    padding: 0.5rem 0.6rem;
  }

  .photo-wrapper {
    height: 45vh;
  }
}
</style>
