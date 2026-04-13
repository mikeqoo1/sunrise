<template>
    <div class="picker-container">
        <img src="/笨熊.png" alt="LOGO" class="logo" />
        <h2 class="picker-title">籃球隊先發五人隨機抽籤</h2>

        <div v-for="(player, index) in players" :key="index" class="player-row">
            <input v-model="player.number" type="text" placeholder="背號" class="player-input" />
            <select v-model="player.position" class="player-select">
                <option value="">選擇位置</option>
                <option v-for="pos in positions" :key="pos" :value="pos">
                    {{ pos }}
                </option>
            </select>
            <button class="remove-btn" @click="removePlayer(index)">&#10005;</button>
        </div>

        <div class="action-row">
            <button class="action-btn ghost-btn" @click="addPlayer">+ 新增球員</button>
            <button class="action-btn primary-btn" @click="draw" :disabled="players.length < 5">抽出先發五人</button>
        </div>

        <div class="result-card" v-if="starters.length">
            <h3 class="result-heading starters-heading">先發球員</h3>
            <ul class="result-list">
                <li v-for="player in starters" :key="player.number">
                    {{ player.position }}：#{{ player.number }}
                </li>
            </ul>
        </div>

        <div class="result-card bench-card" v-if="benchPlayers.length">
            <h3 class="result-heading bench-heading">板凳球員</h3>
            <ul class="result-list">
                <li v-for="player in benchPlayers" :key="player.number">
                    {{ player.position }}：#{{ player.number }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

interface Player {
    number: string;
    position: string;
}

const positions = ['控球後衛', '得分後衛', '小前鋒', '大前鋒', '中鋒'];
const players = ref<Player[]>([
    { number: '1', position: '控球後衛' },
    { number: '2', position: '得分後衛' },
    { number: '3', position: '小前鋒' },
    { number: '4', position: '大前鋒' },
    { number: '5', position: '中鋒' },
]);

const starters = ref<Player[]>([]);

function addPlayer() {
    players.value.push({ number: '', position: '' });
}

function removePlayer(index: number) {
    players.value.splice(index, 1);
}

function draw() {
    const playersByPosition: Record<string, Player[]> = {};
    for (const pos of positions) {
        playersByPosition[pos] = [];
    }

    for (const player of players.value) {
        if (player.number && positions.includes(player.position)) {
            playersByPosition[player.position].push(player);
        }
    }

    const newStarters: Player[] = [];

    for (const pos of positions) {
        const list = playersByPosition[pos];
        if (list.length === 0) {
            alert(`⚠️ 沒有「${pos}」的位置球員，無法抽籤`);
            starters.value = [];
            return;
        }

        const idx = Math.floor(Math.random() * list.length);
        newStarters.push(list[idx]);
    }

    starters.value = newStarters;
}

const benchPlayers = computed(() => {
    const starterNumbers = new Set(starters.value.map(p => p.number));
    return players.value.filter(p => !starterNumbers.has(p.number));
});
</script>

<style scoped>
.picker-container {
    padding: 1.6rem;
    max-width: 720px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.logo {
    width: 100px;
    margin: 0 auto;
}

.picker-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary);
}

.player-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
}

.player-input,
.player-select {
    padding: 0.55rem 0.8rem;
    font-size: 0.95rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-primary);
    outline: none;
    transition: border-color 0.2s ease;
}

.player-input:focus,
.player-select:focus {
    border-color: var(--accent);
}

.player-input {
    width: 80px;
}

.player-select {
    min-width: 130px;
}

.remove-btn {
    padding: 0.45rem 0.7rem;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background: rgba(255, 80, 80, 0.15);
    color: #ff6b6b;
    transition: background 0.2s ease, border-color 0.2s ease;
}

.remove-btn:hover {
    background: rgba(255, 80, 80, 0.3);
    border-color: #ff6b6b;
}

.action-row {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    flex-wrap: wrap;
    margin-top: 0.4rem;
}

.action-btn {
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.action-btn:hover {
    transform: translateY(-2px);
}

.primary-btn {
    background: linear-gradient(145deg, var(--accent), var(--accent-strong));
    color: #0a0a0a;
    border: none;
    box-shadow: 0 8px 24px rgba(140, 248, 216, 0.25);
}

.primary-btn:hover {
    box-shadow: 0 12px 32px rgba(140, 248, 216, 0.35);
}

.primary-btn:disabled {
    background: var(--surface-strong);
    color: var(--text-muted);
    cursor: not-allowed;
    box-shadow: none;
}

.primary-btn:disabled:hover {
    transform: none;
}

.ghost-btn {
    background: rgba(255, 255, 255, 0.04);
    color: var(--text-primary);
}

.ghost-btn:hover {
    border-color: var(--accent);
}

.result-card {
    padding: 1.2rem;
    border-radius: var(--radius-lg);
    background: var(--surface);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-soft);
    text-align: left;
}

.result-heading {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
}

.starters-heading {
    color: var(--accent);
}

.bench-heading {
    color: var(--text-muted);
}

.bench-card {
    background: var(--surface-strong);
}

.result-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.result-list li {
    padding: 0.5rem 0.8rem;
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border);
    font-weight: 600;
    color: var(--text-primary);
}

@media (max-width: 640px) {
    .picker-container {
        padding: 1rem;
    }

    .player-row {
        flex-wrap: wrap;
        gap: 0.4rem;
    }

    .player-input {
        width: 70px;
    }

    .player-select {
        min-width: 0;
        flex: 1;
    }

    .action-row {
        flex-direction: column;
    }

    .action-btn {
        width: 100%;
    }

    .result-card {
        padding: 1rem;
    }
}
</style>
