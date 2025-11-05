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
    <section class="design-panel space-y-4">
        <h1 class="text-2xl font-bold mb-4 text-center">球衣設計展示</h1>

        <!-- 圖片牆 -->
        <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            <div v-for="p in pics" :key="p.src"
                class="flex flex-col items-center bg-white/5 rounded-2xl p-4 shadow hover:shadow-xl transition">
                <img :src="p.src" :alt="p.name" class="thumb" :title="p.name" />
                <span class="mt-2 text-sm opacity-80">{{ p.name }}</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.design-panel .thumb {
    width: 600px !important;
    height: 600px !important;
    max-width: 600px !important;
    max-height: 600px !important;
    object-fit: contain !important;
    display: block !important;
    border-radius: 1rem;
    background-color: #111;
}
</style>
