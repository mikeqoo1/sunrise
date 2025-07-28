<template>
    <div class="jersey-grid">
        <div v-for="(item, index) in jerseys" :key="index" class="jersey-panel">
            <h2>{{ item.title }}</h2>
            <img :src="item.img" :alt="item.title" />
            <button @click="vote(index)">投這一件</button>
            <p class="vote-count">🗳️ 得票數：<strong>{{ item.voteCount }}</strong></p>
            <p v-if="item.voted" class="voted-message">✅ 已投票，感謝支持！</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Jersey {
    title: string
    img: string
    voteCount: number
    voted: boolean
}

const jerseys = ref<Jersey[]>([
    { title: '米腸哥吉拉&射手兔兔', img: 'happy/快樂龍新戰衣.jpeg', voteCount: 0, voted: false },
    { title: '金屬快樂龍', img: 'happy/金屬快樂龍1.png', voteCount: 0, voted: false },
    { title: '金屬快樂龍噴三球', img: 'happy/金屬快樂龍2.png', voteCount: 0, voted: false },
    { title: '金屬快樂龍噴火', img: 'happy/金屬快樂龍3.png', voteCount: 0, voted: false },
    { title: '金屬快樂龍尾巴球', img: 'happy/金屬快樂龍4.png', voteCount: 0, voted: false },
    { title: '金屬快樂翼龍', img: 'happy/金屬快樂翼龍1.png', voteCount: 0, voted: false },
    { title: '金屬快樂翼龍胸口籃球', img: 'happy/金屬快樂翼龍2.png', voteCount: 0, voted: false },
    { title: '球褲標誌', img: 'happy/球褲標誌.png', voteCount: 0, voted: false },
    // { title: '火焰犬圖案', img: 'happy/火焰犬.png', voteCount: 0, voted: false },
    // { title: '地獄三頭犬圖案', img: 'happy/地獄三頭犬.png', voteCount: 0, voted: false },
    // { title: '呆呆吉拉王圖案', img: 'happy/呆呆吉拉王.png', voteCount: 0, voted: false },
    // { title: 'Mega呆呆吉拉王圖案', img: 'happy/Mega呆呆吉拉王.png', voteCount: 0, voted: false },
    // { title: '超極巨化呆呆吉拉王圖案', img: 'happy/超極巨化呆呆吉拉王 .png', voteCount: 0, voted: false },
    // { title: '熾翼龍圖案', img: 'happy/熾翼龍.png', voteCount: 0, voted: false },
    // { title: '風速狗圖案', img: 'happy/風速狗.png', voteCount: 0, voted: false },
    // { title: '閃齧鼠圖案', img: 'happy/閃齧鼠.png', voteCount: 0, voted: false },
    // { title: '可愛獅圖案', img: 'happy/阿庭獅子.webp', voteCount: 0, voted: false },
])

function vote(index: number) {
    if (!jerseys.value[index].voted) {
        jerseys.value[index].voteCount++
        jerseys.value[index].voted = true
        saveVotes()
    }
}

function saveVotes() {
    localStorage.setItem('jerseyVotes', JSON.stringify(jerseys.value))
}

function loadVotes() {
    const saved = localStorage.getItem('jerseyVotes')
    if (saved) {
        try {
            const parsed = JSON.parse(saved)
            if (Array.isArray(parsed)) {
                parsed.forEach((v, i) => {
                    if (jerseys.value[i]) {
                        jerseys.value[i].voteCount = v.voteCount || 0
                        jerseys.value[i].voted = v.voted || false
                    }
                })
            }
        } catch { }
    }
}

loadVotes()
</script>

<style scoped>
.jersey-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    padding: 20px;
}

.jersey-panel {
    text-align: center;
    width: 500px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: #f9f9f9;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
}

img {
    max-width: 100%;
    height: auto;
    border: 2px solid #333;
    margin-bottom: 12px;
}

button {
    padding: 8px 16px;
    font-size: 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}

.vote-count {
    background-color: #e7f1ff;
    color: #084298;
    padding: 6px 10px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
    margin-top: 6px;
    box-shadow: inset 0 0 0 1px #b6d4fe;
}

.voted-message {
    background-color: #d1e7dd;
    color: #0f5132;
    padding: 6px 10px;
    border-radius: 6px;
    font-weight: bold;
    margin-top: 6px;
}

.jersey-panel h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #222;
    background: #eaf4ff;
    padding: 8px 12px;
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px #b6d4fe;
}
</style>
