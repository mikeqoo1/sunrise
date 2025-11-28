<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <p class="pill">遊客你好</p>
    <h1>{{ msg }}</h1>
    <p class="lede">用 Vite + Vue 3 打造的小小恐龍星球，結合抽籤、旅遊、球衣設計與出遊路線。</p>
    <div class="badges">
      <span class="badge">互動任務</span>
      <span class="badge">創意設計</span>
      <span class="badge">隊伍管理</span>
    </div>
  </div>
</template>

<style scoped>
.greetings {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.pill {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(125, 240, 255, 0.12);
  border: 1px solid rgba(125, 240, 255, 0.35);
  font-size: 0.85rem;
  letter-spacing: 0.08rem;
  color: var(--text-muted);
  text-transform: uppercase;
  width: fit-content;
}

h1 {
  font-weight: 700;
  font-size: clamp(2.1rem, 3vw, 2.6rem);
  letter-spacing: 0.02rem;
}

.lede {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 520px;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.4rem;
}

.badge {
  padding: 6px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.9rem;
  color: var(--text-primary);
}
</style>
