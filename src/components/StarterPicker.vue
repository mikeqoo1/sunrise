<template>
    <div class="picker-container">
        <img src="/笨熊.png" alt="LOGO" class="logo" />
        <h2>籃球隊先發五人隨機抽籤</h2>

        <div v-for="(player, index) in players" :key="index" class="player-row">
            <input v-model="player.number" type="text" placeholder="背號" />
            <select v-model="player.position">
                <option value="">選擇位置</option>
                <option v-for="pos in positions" :key="pos" :value="pos">
                    {{ pos }}
                </option>
            </select>
            <button @click="removePlayer(index)">❌</button>
        </div>

        <button @click="addPlayer">➕ 新增球員</button>
        <button @click="draw" :disabled="players.length < 5">🎯 抽出先發五人</button>

        <div class="result" v-if="starters.length">
            <h3>✅ 先發球員</h3>
            <ul>
                <li v-for="player in starters" :key="player.number">
                    {{ player.position }}：#{{ player.number }}
                </li>
            </ul>
        </div>

        <div class="result bench" v-if="benchPlayers.length">
            <h3>🪑 板凳球員</h3>
            <ul>
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
    padding: 32px;
    max-width: 720px;
    margin: auto;
    text-align: center;
}

.logo {
    width: 100px;
    margin-bottom: 16px;
}

.player-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;
}

.player-row input,
.player-row select {
    padding: 8px;
    font-size: 16px;
}

button {
    margin: 5px;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 6px;
    border: none;
    background-color: #3366ff;
    color: white;
}

button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
}

.result {
    margin-top: 24px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
}

.result ul {
    padding-left: 20px;
}

.result.bench {
    margin-top: 16px;
    background: #f9f9f9;
    padding: 12px;
    border-radius: 8px;
}
</style>
