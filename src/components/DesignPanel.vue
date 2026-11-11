<script setup lang="ts">
import { ref } from 'vue';
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
    { src: p('四代-快樂龍球衣(深).jpeg'), name: '四代-快樂龍球衣(深)' },
    { src: p('四代-快樂龍球衣(淺).jpeg'), name: '四代-快樂龍球衣(淺)' },
    { src: p('五代-快樂龍球衣(深).jpeg'), name: '五代-快樂龍球衣(深)' },
    { src: p('五代-快樂龍球衣(淺).jpeg'), name: '五代-快樂龍球衣(淺)' },
    { src: p('五代-深淺球衣球褲合成圖.png'), name: '五代-深淺球衣球褲合成圖' },
    { src: p('五代-主LOGO.png'), name: '五代-主LOGO' },
    { src: p('五代-球褲LOGO.png'), name: '五代-球褲LOGO' },
];

const tab = ref<'gallery' | 'size'>('gallery');
</script>

<template>
    <section class="design-panel">
        <h1 class="page-title">球衣設計展示</h1>

        <div class="tabs" role="tablist">
            <button role="tab" :aria-selected="tab === 'gallery'" class="tab" :class="{ active: tab === 'gallery' }"
                @click="tab = 'gallery'">設計圖</button>
            <button role="tab" :aria-selected="tab === 'size'" class="tab" :class="{ active: tab === 'size' }"
                @click="tab = 'size'">廠商尺寸表</button>
        </div>

        <div v-if="tab === 'size'" class="size-tab">
            <img :src="p('廠商球衣尺寸表.jpg')" alt="廠商球衣尺寸表" class="size-chart" />
            <p class="size-note">一套 950 元。</p>
            <p class="size-note">附註：快樂阿奎穿 5XL，可以當作挑尺寸的參考。</p>
            <p class="size-note">想要球衣的人，請跟阿奎聯繫。</p>
        </div>

        <!-- 圖片牆 -->
        <div v-else class="gallery-grid">
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

.tabs {
    display: flex;
    justify-content: center;
    gap: 0.6rem;
}

.tab {
    padding: 0.5rem 1.2rem;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-muted);
    font: inherit;
    cursor: pointer;
}

.tab.active {
    border-color: var(--accent);
    color: var(--accent);
}

.size-tab {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.size-note {
    text-align: center;
    color: var(--text-primary);
}

.size-chart {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: block;
    border-radius: var(--radius-md);
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
