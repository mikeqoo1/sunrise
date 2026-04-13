<template>
  <div class="about-page">
    <section class="hero-card">
      <h1 class="hero-title">關於快樂龍 🐉</h1>
      <p class="hero-desc">
        一起打球、一起旅行、一起吃美食的快樂龍
      </p>
      <p class="hero-sub">
        這裡是快樂龍的小天地，紀錄我們一起走過的每一段旅程、每一場球賽、每一頓美食。
      </p>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem;
}

.hero-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-soft);
  text-align: center;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.hero-title {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  font-weight: 700;
  color: var(--text-primary);
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--accent);
  font-weight: 600;
}

.hero-sub {
  color: var(--text-muted);
  max-width: 480px;
}

@media (max-width: 640px) {
  .about-page {
    padding: 0.8rem;
  }

  .hero-card {
    padding: 1.4rem;
    min-height: 30vh;
  }
}
</style>
