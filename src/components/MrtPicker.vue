<script setup lang="ts">
import { ref, computed } from 'vue';
import type { LineKey } from '@/data/taipei-mrt';
import { lineNames, mrtStations, getAllStations } from '@/data/taipei-mrt';
import { highSpeedRail, taiwanRail } from '@/data/trains';

const category = ref<'MRT' | 'HSR' | 'TRA'>('MRT');
const pickedLine = ref<LineKey>('ALL');
const result = ref<string | null>(null);
const showCongrats = ref(false);

// 不同來源對應 emoji
const travelEmoji = computed(() => {
    if (category.value === 'HSR') return '🚄';
    if (category.value === 'TRA') return '🚆';
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

function currentPool(): string[] {
    if (category.value === 'HSR') return highSpeedRail;
    if (category.value === 'TRA') return taiwanRail;
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
    <section class="relative space-y-6">
        <h1 class="text-3xl md:text-4xl font-extrabold tracking-wide">
            抽捷運 / 台鐵 / 高鐵 出趣玩
        </h1>

        <!-- 控制列 -->
        <div class="flex flex-wrap items-center gap-3">
            <label class="text-base opacity-80">選擇來源：</label>
            <select v-model="category"
                class="rounded-2xl bg-neutral-900/80 px-4 py-2 text-base outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30">
                <option value="MRT">台北捷運</option>
                <option value="TRA">台鐵</option>
                <option value="HSR">高鐵</option>
            </select>

            <template v-if="category === 'MRT'">
                <span class="mx-1 text-sm opacity-70">｜</span>
                <label class="text-base opacity-80">捷運路線：</label>
                <select v-model="pickedLine"
                    class="rounded-2xl bg-neutral-900/80 px-4 py-2 text-base outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30">
                    <option v-for="opt in lineOptions" :key="opt.key" :value="opt.key">
                        {{ opt.label }}
                    </option>
                </select>

                <div v-if="pickedLine !== 'ALL'" class="px-3 py-1 rounded-full text-sm font-semibold"
                    :style="{ background: (lineColor as any)[pickedLine], color: '#0b0b0b' }">
                    {{ (lineNames as any)[pickedLine] }}
                </div>
            </template>

            <button class="ml-1 px-5 py-2 rounded-2xl text-lg font-semibold shadow hover:shadow-lg transition
               hover:scale-[1.02] active:scale-[0.98]" @click="drawOne">
                抽一站！
            </button>
        </div>

        <!-- 結果卡 -->
        <div v-if="result" class="relative overflow-hidden rounded-3xl p-6 md:p-8 shadow-lg
             bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-indigo-500/15
             ring-1 ring-white/10">
            <div class="text-xl md:text-2xl mb-2">{{ travelEmoji }} 抽到：</div>
            <div class="text-3xl md:text-5xl font-black leading-tight">
                {{ result }}
            </div>

            <div class="mt-3 md:mt-4">
                <a :href="mapsLink(result!)" target="_blank" rel="noreferrer"
                    class="inline-block underline text-base md:text-lg">
                    開地圖看附近有什麼
                </a>
            </div>

            <!-- 恭喜動畫（含對應交通工具 emoji） -->
            <transition name="fade">
                <div v-if="showCongrats" class="congrats">
                    <div class="shout">
                        🎉 恭喜抽中 <span class="font-bold text-yellow-300">{{ result }}</span>！
                        今天就出發去玩吧 {{ travelEmoji }}
                    </div>
                    <span v-for="(c, i) in confetti" :key="i" class="piece" :style="{
                        left: c.left + '%',
                        animationDelay: c.delay + 's',
                        transform: `rotate(${c.rotate}deg)`
                    }">{{ c.emoji }}</span>
                </div>
            </transition>
        </div>
    </section>
</template>

<style scoped>
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
    font-size: clamp(18px, 2.4vw, 28px);
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, .18);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, .25);
    text-shadow: 0 1px 0 rgba(0, 0, 0, .3);
    color: #fff;
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
</style>
