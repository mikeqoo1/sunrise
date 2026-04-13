<template>
  <div class="jersey-page">
    <div class="jersey-card">
      <h1 class="jersey-title">球衣設計投票區</h1>
      <JerseyVotePanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import JerseyVotePanel from '../components/JerseyVotePanel.vue'
</script>

<style scoped>
.jersey-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 1.2rem;
}

.jersey-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.2rem;
  box-shadow: var(--shadow-soft);
}

.jersey-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

@media (max-width: 640px) {
  .jersey-page {
    padding: 0.8rem;
  }

  .jersey-card {
    padding: 0.9rem;
  }
}
</style>
