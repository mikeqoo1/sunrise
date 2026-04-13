<template>
  <div class="packing-page">
    <section class="packing-card">
      <h1 class="packing-title">出國打包清單</h1>
      <div class="image-wrapper">
        <img src="/準備行李.png" alt="出國打包清單" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.packing-page {
  padding: 1.2rem;
}

.packing-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.2rem;
  box-shadow: var(--shadow-soft);
}

.packing-title {
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
  .packing-page {
    padding: 0.8rem;
  }

  .packing-card {
    padding: 0.9rem;
  }
}
</style>
