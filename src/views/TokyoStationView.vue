<template>
  <div class="station-page">
    <section class="station-card">
      <h1 class="station-title">東京駅地下街地圖</h1>
      <div class="image-wrapper">
        <img src="/Tokyo_station_subway_map.png" alt="東京駅地下街地圖" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.station-page {
  padding: 1.2rem;
}

.station-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.2rem;
  box-shadow: var(--shadow-soft);
}

.station-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.image-wrapper img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

@media (max-width: 640px) {
  .station-page {
    padding: 0.8rem;
  }

  .station-card {
    padding: 0.9rem;
  }
}
</style>
