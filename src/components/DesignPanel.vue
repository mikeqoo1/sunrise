<script setup lang="ts">
type Pic = { src: string; name: string };
const BASE = import.meta.env.BASE_URL;
const p = (file: string) => `${BASE}design/${file}`;

const pics: Pic[] = [
    // { src: p('Happy_1_CS6.png'), name: 'Happy_1_CS6' },
    // { src: p('Happy_2_CS6.png'), name: 'Happy_2_CS6' },
    // { src: p('Happy_3_CS6.png'), name: 'Happy_3_CS6' },
    { src: p('快樂龍v1(深).jpeg'), name: '快樂龍v1(深)' },
    { src: p('快樂龍v1(淺).jpeg'), name: '快樂龍v1(淺)' },
    { src: p('快樂龍v2.jpeg'), name: '快樂龍v2' },
    { src: p('快樂龍v3.jpeg'), name: '快樂龍v3' },
    { src: p('快樂龍v3(深)球衣.jpeg'), name: '快樂龍v3(深)球衣' },
    { src: p('快樂龍v3(深)球褲.jpeg'), name: '快樂龍v3(深)球褲' },
];
</script>

<template>
    <section class="design-panel">
        <h1 class="page-title">球衣設計展示</h1>

        <!-- 圖片牆 -->
        <div class="gallery-grid">
            <div v-for="pic in pics" :key="pic.src" class="gallery-card">
                <img :src="pic.src" :alt="pic.name" class="thumb" :title="pic.name" />
                <span class="card-label">{{ pic.name }}</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.design-panel {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.page-title {
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 700;
    text-align: center;
    color: var(--text-primary);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
    justify-items: center;
}

.gallery-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2rem;
    border-radius: var(--radius-lg);
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
    transition: transform 0.2s ease, border-color 0.2s ease;
    width: 100%;
    max-width: 600px;
}

.gallery-card:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
}

.thumb {
    width: 100%;
    max-width: 560px;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    display: block;
    border-radius: var(--radius-md);
    background-color: rgba(0, 0, 0, 0.3);
}

.card-label {
    margin-top: 0.6rem;
    font-size: 0.92rem;
    color: var(--text-muted);
}

@media (max-width: 640px) {
    .gallery-grid {
        grid-template-columns: 1fr;
        gap: 0.8rem;
    }

    .gallery-card {
        padding: 0.8rem;
    }

    .thumb {
        max-width: 100%;
    }
}
</style>
