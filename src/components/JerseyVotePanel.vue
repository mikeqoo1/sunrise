<template>
    <div class="jersey-vote">
        <div class="jersey-grid">
            <div v-for="(item, index) in jerseys" :key="index" class="jersey-panel">
                <h2 class="jersey-title">{{ item.title }}</h2>
                <img :src="item.img" :alt="item.title" class="jersey-img" />
                <button class="vote-btn" @click="vote(index)" :disabled="item.voted">
                    {{ item.voted ? '已投票' : '投這一件' }}
                </button>
                <p class="vote-count">得票數：<strong>{{ item.voteCount }}</strong></p>
                <p v-if="item.voted" class="voted-message">感謝支持！</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
    { title: 'LOGO_1', img: 'happy/LOGO1.png', voteCount: 0, voted: false },
    { title: 'LOGO_2', img: 'happy/LOGO2.png', voteCount: 0, voted: false },
    { title: 'LOGO_3', img: 'happy/LOGO3.png', voteCount: 0, voted: false },
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
.jersey-vote {
    padding: 0.4rem;
}

.jersey-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    justify-items: center;
}

.jersey-panel {
    text-align: center;
    width: 100%;
    max-width: 500px;
    padding: 1.2rem;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    background: var(--surface);
    box-shadow: var(--shadow-soft);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    transition: transform 0.2s ease, border-color 0.2s ease;
}

.jersey-panel:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
}

.jersey-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-primary);
    padding: 0.6rem 0.8rem;
    border-radius: var(--radius-md);
    background: rgba(140, 248, 216, 0.08);
    border: 1px solid rgba(140, 248, 216, 0.15);
}

.jersey-img {
    max-width: 100%;
    height: auto;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: rgba(0, 0, 0, 0.2);
}

.vote-btn {
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    font-weight: 600;
    background: linear-gradient(145deg, var(--accent), var(--accent-strong));
    color: #0a0a0a;
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(140, 248, 216, 0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.vote-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(140, 248, 216, 0.35);
}

.vote-btn:disabled {
    background: var(--surface-strong);
    color: var(--text-muted);
    cursor: not-allowed;
    box-shadow: none;
}

.vote-count {
    padding: 0.5rem 0.8rem;
    border-radius: var(--radius-md);
    background: rgba(140, 248, 216, 0.06);
    border: 1px solid rgba(140, 248, 216, 0.12);
    color: var(--text-primary);
    font-size: 0.92rem;
    font-weight: 600;
}

.vote-count strong {
    color: var(--accent);
    font-weight: 700;
}

.voted-message {
    padding: 0.5rem 0.8rem;
    border-radius: var(--radius-md);
    background: rgba(140, 248, 216, 0.1);
    border: 1px solid rgba(140, 248, 216, 0.2);
    color: var(--accent);
    font-weight: 700;
    font-size: 0.9rem;
}

@media (max-width: 640px) {
    .jersey-grid {
        grid-template-columns: 1fr;
        gap: 0.8rem;
    }

    .jersey-panel {
        padding: 1rem;
        max-width: 100%;
    }

    .vote-btn {
        width: 100%;
    }
}
</style>
