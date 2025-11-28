<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const base = import.meta.env.BASE_URL;
const assetUrl = (path: string) => `${base}${path.replace(/^\//, "")}`;

const logoSrc = assetUrl("恐龍愛吃漢堡包.png");

const navLinks = [
  { to: "/", label: "首頁", caption: "互動展示", icon: assetUrl("太空龍.png") },
  { to: "/about", label: "關於我", caption: "恐龍檔案", icon: assetUrl("頭套恐龍.png") },
  { to: "/lunch", label: "中午吃飯", caption: "抽籤選店", icon: assetUrl("卡比獸.png") },
  { to: "/happy", label: "快樂龍戰隊", caption: "球衣與隊伍", icon: assetUrl("去背_球褲logo.png") },
  { to: "/design", label: "設計的球衣", caption: "創意草稿", icon: assetUrl("design/Happy_3_CS6.png") },
  { to: "/random", label: "先發人員", caption: "隨機挑選", icon: assetUrl("happy/呆呆吉拉王.png") },
  { to: "/mrt", label: "出趣玩", caption: "捷運出行", icon: assetUrl("design/Happy_1_CS6.png") },
];
</script>

<template>
  <div class="app-shell">
    <div class="ambient ambient-one" />
    <div class="ambient ambient-two" />

    <header class="hero">
      <div class="brand-block">
        <div class="logo-wrap">
          <img alt="Homelogo" class="logo" :src="logoSrc" width="125" height="125" />
          <span class="logo-chip">Dino Lab</span>
        </div>
        <div class="hero-copy">
          <p class="eyebrow">恐龍天地</p>
          <HelloWorld msg="歡迎來到恐龍天地" />
        </div>
      </div>
      <div class="info-card">
        <p class="info-label">加入戰隊</p>
        <h3>掃碼加入戰隊獲得更多資訊</h3>
        <p class="info-desc">解鎖最新任務、旅遊計畫、球衣設計，恐龍天天陪你衝。</p>
        <img src="https://qr-official.line.me/gs/M_212cwsii_BW.png?oat_content=qr" width="95" height="95"
          alt="Line QR Code" />
      </div>
    </header>

    <nav class="nav-grid">
      <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-card">
        <span class="nav-icon-wrap">
          <img :src="link.icon" :alt="link.label" class="nav-icon" />
        </span>
        <div class="nav-text">
          <span class="nav-label">{{ link.label }}</span>
          <span class="nav-caption">{{ link.caption }}</span>
        </div>
      </RouterLink>
    </nav>

    <main class="content-panel">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
  overflow: hidden;
}

.ambient {
  position: absolute;
  filter: blur(90px);
  opacity: 0.6;
  z-index: -1;
}

.ambient-one {
  width: 380px;
  height: 380px;
  top: -120px;
  left: -120px;
  background: radial-gradient(circle, rgba(140, 248, 216, 0.3), transparent 60%);
}

.ambient-two {
  width: 320px;
  height: 320px;
  bottom: -80px;
  right: -120px;
  background: radial-gradient(circle, rgba(125, 240, 255, 0.3), transparent 60%);
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.6rem;
  background: var(--surface-strong);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(8px);
}

.brand-block {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.logo-wrap {
  position: relative;
  width: 120px;
  height: 120px;
  background: linear-gradient(145deg, rgba(125, 240, 255, 0.25), rgba(140, 248, 216, 0.15));
  border: 1px solid var(--border);
  border-radius: 18px;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.logo-chip {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(140, 248, 216, 0.14);
  color: var(--text-primary);
  border: 1px solid var(--border);
  letter-spacing: 0.6px;
}

.logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35));
}

.hero-copy {
  max-width: 520px;
}

.eyebrow {
  font-size: 0.85rem;
  letter-spacing: 0.24rem;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
}

.info-card {
  padding: 1rem 1.2rem;
  background: linear-gradient(145deg, rgba(140, 248, 216, 0.18), rgba(125, 240, 255, 0.12));
  border: 1px solid var(--border-strong);
  border-radius: 16px;
  text-align: center;
  width: 260px;
  box-shadow: var(--shadow-soft);
}

.info-label {
  color: var(--text-muted);
  letter-spacing: 0.08rem;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.info-card h3 {
  margin: 0.3rem 0;
  font-size: 1.1rem;
}

.info-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}

.nav-grid {
  margin-top: 1.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.9rem;
}

.nav-card {
  display: flex;
  gap: 0.9rem;
  align-items: center;
  padding: 0.9rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  color: var(--text-primary);
}

.nav-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

.nav-card.router-link-exact-active {
  border-color: var(--accent);
  background: linear-gradient(145deg, rgba(140, 248, 216, 0.16), rgba(125, 240, 255, 0.12));
}

.nav-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
}

.nav-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.nav-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.nav-label {
  font-weight: 600;
  letter-spacing: 0.02rem;
}

.nav-caption {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.content-panel {
  margin-top: 1.4rem;
  padding: 1.4rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
}

@media (max-width: 820px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .brand-block {
    width: 100%;
  }

  .info-card {
    width: 100%;
  }
}

@media (max-width: 560px) {
  .logo-wrap {
    width: 96px;
    height: 96px;
  }

  .logo {
    width: 76px;
    height: 76px;
  }
}
</style>
