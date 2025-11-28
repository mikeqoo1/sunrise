<script setup lang="ts">
import { onMounted, ref } from "vue";

const showHeart = ref(false);
const base = import.meta.env.BASE_URL;
const assetUrl = (path: string) => `${base}${path.replace(/^\//, "")}`;

const dinoSrc = assetUrl("太空龍.png");
const cowSrc = assetUrl("牛牛.ico");

onMounted(() => {
  setTimeout(() => {
    showHeart.value = true;
  }, 800); // 0.8秒後顯示愛心
});
</script>

<template>
  <section class="love-wrapper">
    <div class="love-card">
      <p class="title">恐龍最喜番R庭</p>
      <div class="avatar-row">
        <div class="avatar">
          <img :src="dinoSrc" alt="阿奎" />
          <span>阿奎</span>
        </div>
        <transition name="fade">
          <div v-if="showHeart" class="heart-stack" aria-label="love">
            ❤️ ❤️ ❤️
          </div>
        </transition>
        <div class="avatar">
          <img :src="cowSrc" alt="阿庭" />
          <span>阿庭</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.love-wrapper {
  min-height: 40vh;
  display: grid;
  place-items: center;
}

.love-card {
  width: min(640px, 100%);
  padding: 2rem;
  background: linear-gradient(145deg, rgba(140, 248, 216, 0.08), rgba(125, 240, 255, 0.06));
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
  text-align: center;
}

.title {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
  margin-bottom: 1.6rem;
}

.avatar-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  flex-wrap: wrap;
}

.avatar {
  display: grid;
  place-items: center;
  gap: 0.5rem;
}

.avatar img {
  width: 140px;
  height: 140px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35));
}

.avatar span {
  color: var(--text-muted);
}

.heart-stack {
  font-size: 2rem;
  line-height: 1.4;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
