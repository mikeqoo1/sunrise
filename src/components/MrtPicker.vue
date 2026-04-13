<script setup lang="ts">
import { ref, computed } from 'vue';
import type { LineKey } from '@/data/taipei-mrt';
import { lineNames, mrtStations, getAllStations } from '@/data/taipei-mrt';
import { highSpeedRail, taiwanRail } from '@/data/trains';

// 多一個 'ALL'，代表「全部混合抽」
const category = ref<'MRT' | 'HSR' | 'TRA' | 'ALL'>('MRT');
const pickedLine = ref<LineKey>('ALL');
const result = ref<string | null>(null);
const showCongrats = ref(false);

// 不同來源對應 emoji
const travelEmoji = computed(() => {
    if (category.value === 'HSR') return '🚄';
    if (category.value === 'TRA') return '🚆';
    if (category.value === 'ALL') return '🎲';
    return '🚇';
});

const lineColor: Record<Exclude<LineKey, 'ALL'>, string> = {
    BL: '#0070bd',
    R: '#d13a3a',
    G: '#00a75a',
    O: '#f08a00',
    BR: '#9c6b30',
    Y: '#ffcc00',
};

const lineOptions = computed(() => [
    { key: 'ALL', label: '全部路線' },
    ...Object.entries(lineNames).map(([k, v]) => ({ key: k, label: v })),
]) as unknown as { key: LineKey; label: string }[];

// 根據 category 決定抽籤母體，多加 ALL 的情況
function currentPool(): string[] {
    if (category.value === 'HSR') return highSpeedRail;
    if (category.value === 'TRA') return taiwanRail;
    if (category.value === 'ALL') {
        return [
            ...getAllStations(),
            ...highSpeedRail,
            ...taiwanRail,
        ];
    }
    // MRT
    return pickedLine.value === 'ALL'
        ? getAllStations()
        : (mrtStations[pickedLine.value] ?? []);
}

function drawOne() {
    const pool = currentPool();
    if (!pool.length) {
        result.value = '（這個來源沒有資料可抽 😅）';
        return;
    }
    const idx = Math.floor(Math.random() * pool.length);
    result.value = pool[idx];

    showCongrats.value = false;
    requestAnimationFrame(() => {
        showCongrats.value = true;
        setTimeout(() => (showCongrats.value = false), 2500);
    });
}

function mapsLink(name: string) {
    const q = encodeURIComponent(name);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

const confetti = Array.from({ length: 18 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 0.6;
    const rotate = Math.floor(Math.random() * 360);
    const emoji = ['🎉', '🎊', '✨', '🥳'][i % 4];
    return { left, delay, rotate, emoji };
});
</script>

<template>
    <section class="mrt-picker">
        <h1 class="page-title">抽捷運 / 台鐵 / 高鐵 出趣玩</h1>

        <!-- 控制列 -->
        <div class="controls-card">
            <div class="control-group">
                <label class="control-label">選擇來源：</label>
                <select v-model="category" class="picker-select">
                    <option value="MRT">台北捷運</option>
                    <option value="TRA">台鐵</option>
                    <option value="HSR">高鐵</option>
                    <option value="ALL">全部混合抽（捷運 + 台鐵 + 高鐵）</option>
                </select>
            </div>

            <!-- 只有選 MRT 才需要選路線 -->
            <template v-if="category === 'MRT'">
                <div class="control-group">
                    <label class="control-label">捷運路線：</label>
                    <select v-model="pickedLine" class="picker-select">
                        <option v-for="opt in lineOptions" :key="opt.key" :value="opt.key">
                            {{ opt.label }}
                        </option>
                    </select>

                    <span v-if="pickedLine !== 'ALL'" class="line-badge"
                        :style="{ background: (lineColor as any)[pickedLine], color: '#0b0b0b' }">
                        {{ (lineNames as any)[pickedLine] }}
                    </span>
                </div>
            </template>

            <button class="draw-btn" @click="drawOne">
                抽一站！
            </button>
        </div>

        <!-- 結果卡 -->
        <div v-if="result" class="result-card">
            <div class="result-label">{{ travelEmoji }} 抽到：</div>
            <div class="result-station">
                {{ result }}
            </div>

            <div class="result-action">
                <a :href="mapsLink(result!)" target="_blank" rel="noreferrer" class="map-link">
                    開地圖看附近有什麼
                </a>
            </div>

            <!-- 恭喜動畫 -->
            <transition name="fade">
                <div v-if="showCongrats" class="congrats">
                    <div class="shout">
                        🎉 恭喜抽中 <span class="shout-highlight">{{ result }}</span>！
                        今天就出發去玩吧 {{ travelEmoji }}
                    </div>
                    <span v-for="(c, i) in confetti" :key="i" class="piece" :style="{
                        left: c.left + '%',
                        animationDelay: c.delay + 's',
                        transform: `rotate(${c.rotate}deg)`
                    }">
                        {{ c.emoji }}
                    </span>
                </div>
            </transition>
        </div>
    </section>
</template>

<style scoped>
.mrt-picker {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.page-title {
    font-size: clamp(1.6rem, 3vw, 2.3rem);
    font-weight: 800;
    letter-spacing: 0.02em;
    color: var(--text-primary);
}

/* Controls card */
.controls-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem;
    border-radius: var(--radius-lg);
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
}

.control-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.control-label {
    font-size: 0.95rem;
    color: var(--text-muted);
}

.picker-select {
    padding: 0.55rem 0.8rem;
    font-size: 0.95rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: rgba(0, 0, 0, 0.25);
    color: var(--text-primary);
    outline: none;
    transition: border-color 0.2s ease;
}

.picker-select:focus {
    border-color: var(--accent);
}

.line-badge {
    display: inline-flex;
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 700;
}

.draw-btn {
    padding: 0.7rem 1.4rem;
    border-radius: var(--radius-md);
    border: none;
    font-size: 1.05rem;
    font-weight: 700;
    cursor: pointer;
    background: linear-gradient(145deg, var(--accent), var(--accent-strong));
    color: #0a0a0a;
    box-shadow: 0 8px 24px rgba(140, 248, 216, 0.25);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.draw-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(140, 248, 216, 0.35);
}

.draw-btn:active {
    transform: scale(0.98);
}

/* Result card */
.result-card {
    position: relative;
    overflow: hidden;
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    background: linear-gradient(135deg, rgba(140, 248, 216, 0.1), rgba(125, 240, 255, 0.1));
    border: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
}

.result-label {
    font-size: 1.2rem;
    color: var(--text-muted);
    margin-bottom: 0.3rem;
}

.result-station {
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 900;
    line-height: 1.2;
    color: var(--text-primary);
}

.result-action {
    margin-top: 0.8rem;
}

.map-link {
    color: var(--accent);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
    font-size: 1rem;
}

.map-link:hover {
    color: var(--accent-strong);
}

/* Congrats animation */
.congrats {
    pointer-events: none;
    position: absolute;
    inset: 0;
}

.shout {
    position: absolute;
    top: 12px;
    right: 16px;
    font-weight: 900;
    font-size: clamp(14px, 2.4vw, 24px);
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, .18);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, .25);
    text-shadow: 0 1px 0 rgba(0, 0, 0, .3);
    color: #fff;
}

.shout-highlight {
    font-weight: 900;
    color: #facc15;
}

.piece {
    position: absolute;
    top: -10px;
    font-size: 20px;
    animation: drop 1.6s cubic-bezier(.22, .61, .36, 1) forwards;
}

@keyframes drop {
    0% {
        transform: translateY(-10px) rotate(0deg);
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    100% {
        transform: translateY(280px) rotate(360deg);
        opacity: 0;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 640px) {
    .controls-card {
        flex-direction: column;
        align-items: stretch;
        gap: 0.6rem;
        padding: 1rem;
    }

    .control-group {
        flex-direction: column;
        align-items: stretch;
        gap: 0.3rem;
    }

    .picker-select {
        width: 100%;
    }

    .draw-btn {
        width: 100%;
        text-align: center;
    }

    .result-card {
        padding: 1rem;
    }

    .shout {
        position: relative;
        top: auto;
        right: auto;
        display: block;
        text-align: center;
        font-size: 14px;
        margin-bottom: 0.5rem;
    }
}
</style>
