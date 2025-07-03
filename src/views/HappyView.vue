<template>
  <div class="viewer-container">
    <!-- 新增這段 -->
    <div class="player-description">
      <div>20號 - 快樂阿奎：快樂龍 靈魂人物，核心角色</div>
      <div>10號 - 快樂阿源：迅猛龍 切入破壞，輕鬆上籃</div>
      <div>18號 - 快樂阿哲：偷蛋龍 抄截神偷，快攻高手</div>
      <div>99號 - 快樂阿昌：護城龍 防守大鎖，可以防住所有的攻擊</div>
      <div>23號 - 快樂阿震：圈圈熊 雖然面目猙獰，但在舔食最喜歡的蜜時，會開心到忍不住露出笑容</div>
    </div>
    <!-- 深色樣式 -->
    <div class="image-block">
      <div class="floating-label">快樂龍戰隊・深色樣式</div>
      <div class="photo-wrapper" @wheel.prevent="onWheelDark" @mousedown="onMouseDownDark" @mousemove="onMouseMoveDark"
        @mouseup="onMouseUpDark" @mouseleave="onMouseUpDark">
        <img src="/happy/快樂龍戰隊1.jpeg" alt="快樂龍戰隊深色" :style="{
          transform: `translate(${darkPosition.x}px, ${darkPosition.y}px) scale(${darkScale})`
        }" draggable="false" />
      </div>
    </div>

    <!-- 淺色樣式 -->
    <div class="image-block">
      <div class="floating-label">快樂龍戰隊・淺色樣式</div>
      <div class="photo-wrapper" @wheel.prevent="onWheelLight" @mousedown="onMouseDownLight"
        @mousemove="onMouseMoveLight" @mouseup="onMouseUpLight" @mouseleave="onMouseUpLight">
        <img src="/happy/快樂龍戰隊2.jpeg" alt="快樂龍戰隊淺色" :style="{
          transform: `translate(${lightPosition.x}px, ${lightPosition.y}px) scale(${lightScale})`
        }" draggable="false" />
      </div>
    </div>
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
.viewer-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1000px;
  margin: auto;
  padding: 30px 0;
}

.image-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.floating-label {
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 6px;
  user-select: none;
  pointer-events: none;
  text-align: center;
}

.photo-wrapper {
  width: 100%;
  height: 60vh;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  background: #f8f8f8;
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

.player-description {
  margin-top: 8px;
  background: #f1f1f1;
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
