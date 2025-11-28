<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from "vue";
import { useRouter } from "vue-router";

import cowIcon from "@/assets/牛牛.ico";
import lionIcon from "@/assets/獅子.ico";

const router = useRouter();

const defaultIcons = [
  { src: cowIcon, label: "牛牛" },
  { src: lionIcon, label: "獅子" },
];

const icons = ref([...defaultIcons]);
const isFighting = ref(true);
let redirectTimer: number | undefined;

const statusText = computed(() =>
  isFighting.value
    ? "點擊任一夥伴觸發模式切換，看看會發生什麼神奇變化。"
    : "暖化成功！甜甜的 Love 頁面即將開啟。"
);

const toggleFight = () => {
  isFighting.value = !isFighting.value;

  if (redirectTimer) {
    clearTimeout(redirectTimer);
    redirectTimer = undefined;
  }

  if (!isFighting.value) {
    redirectTimer = window.setTimeout(() => {
      router.push("/love");
      redirectTimer = undefined;
    }, 900);
  } else {
    icons.value = [...defaultIcons];
  }
};

onBeforeUnmount(() => {
  if (redirectTimer) {
    clearTimeout(redirectTimer);
  }
});
</script>

<template>
  <section class="welcome-card">
    <div class="card-header">
      <div>
        <p class="eyebrow">互動展示</p>
        <h2>點擊恐龍夥伴，切換戰鬥 / 和解模式</h2>
        <p class="subtext">{{ statusText }}</p>
      </div>
      <span class="status" :class="{ calm: !isFighting }">
        {{ isFighting ? "戰鬥模式" : "和解倒數" }}
      </span>
    </div>
    <div class="avatars">
      <button v-for="(icon, index) in icons" :key="index" class="avatar-tile" type="button" @click="toggleFight">
        <span class="avatar-glow" />
        <img :src="icon.src" :alt="icon.label" />
        <span class="avatar-label">{{ icon.label }}</span>
      </button>
    </div>
    <div class="foot-note">
      <span class="dot" />
      <p>和解時會自動跳轉到「Love」頁面，功能不變但畫面更有儀式感。</p>
    </div>
  </section>
</template>

<style scoped>
.welcome-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.eyebrow {
  font-size: 0.82rem;
  letter-spacing: 0.18rem;
  color: var(--text-muted);
  text-transform: uppercase;
}

h2 {
  margin: 0.15rem 0;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
}

.subtext {
  color: var(--text-muted);
  max-width: 560px;
}

.status {
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: #ffb3b3;
  font-weight: 600;
}

.status.calm {
  color: #8cf8d8;
}

.avatars {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.avatar-tile {
  position: relative;
  border: 1px solid var(--border);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.04));
  border-radius: 16px;
  padding: 1rem;
  display: grid;
  place-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.avatar-tile:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.avatar-glow {
  position: absolute;
  inset: 4px;
  border-radius: 12px;
  background: radial-gradient(circle, rgba(125, 240, 255, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.avatar-tile:hover .avatar-glow {
  opacity: 1;
}

.avatar-tile img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35));
  z-index: 1;
}

.avatar-label {
  font-weight: 600;
  letter-spacing: 0.04rem;
  z-index: 1;
}

.foot-note {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 0 6px rgba(140, 248, 216, 0.12);
}
</style>
