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
  { to: "/jersey-logo", label: "球衣 LOGO 示意", caption: "深/淺・版位預覽", icon: assetUrl("HAPPY_v2/星河柴犬.png") },
  { to: "/random", label: "先發人員", caption: "隨機挑選", icon: assetUrl("happy/呆呆吉拉王.png") },
  { to: "/mrt", label: "出趣玩", caption: "捷運出行", icon: assetUrl("design/Happy_1_CS6.png") },
  { to: "/2025travel", label: "2025 東京旅遊", caption: "年度手冊", icon: assetUrl("72小時票.png") },
  { to: "/2026travel", label: "2026 大阪寶可夢之旅", caption: "USJ 寶可夢萬聖節", icon: assetUrl("2026Osaka/usj.png") },
  // 越南代購已隱藏（功能停用）。如需恢復，取消下一行註解即可；路由 /vietnam 與 VietnamDaigouView 仍保留。
  // { to: "/vietnam", label: "越南代購", caption: "商品 / 價格表", icon: assetUrl("vietnam/Vietnam.png") },
];
</script>

<template>
  <div class="app-shell">
    <div class="ambient ambient-one" />
    <div class="ambient ambient-two" />

    <aside class="sidebar">
      <RouterLink to="/" class="brand">
        <div class="logo-wrap">
          <img alt="Homelogo" class="logo" :src="logoSrc" width="125" height="125" />
        </div>
        <div class="brand-text">
          <span class="brand-name">恐龍天地</span>
          <span class="brand-sub">DINO WORLD</span>
        </div>
      </RouterLink>

      <nav class="side-nav">
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
    </aside>

    <div class="main-col">
      <header class="hero">
        <div class="hero-copy">
          <HelloWorld msg="歡迎來到恐龍天地" />
        </div>
        <div class="info-card">
          <p class="info-label">加入戰隊</p>
          <h3>掃碼加入戰隊獲得更多資訊</h3>
          <p class="info-desc">解鎖最新任務、旅遊計畫、球衣設計，恐龍天天陪你衝。</p>
          <img src="https://qr-official.line.me/gs/M_212cwsii_BW.png?oat_content=qr" width="95" height="95"
            alt="Line QR Code" />
        </div>
      </header>

      <main class="content-panel">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
  display: grid;
  grid-template-columns: 264px minmax(0, 1fr);
  gap: 1.4rem;
  align-items: start;
  /* clip (not hidden) contains the ambient glows without becoming a scroll
     container, so the sticky sidebar still pins to the document scroll */
  overflow: clip;
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

.sidebar {
  position: sticky;
  top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem;
  background: var(--surface-strong);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(8px);
  max-height: calc(100vh - 2rem);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.4rem 0.4rem 1rem;
  border-bottom: 1px solid var(--border);
  color: var(--text-primary);
}

.logo-wrap {
  position: relative;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  background: linear-gradient(145deg, rgba(125, 240, 255, 0.25), rgba(140, 248, 216, 0.15));
  border: 1px solid var(--border);
  border-radius: 16px;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35));
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.brand-name {
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.04rem;
}

.brand-sub {
  font-size: 0.7rem;
  letter-spacing: 0.22rem;
  text-transform: uppercase;
  color: var(--text-muted);
}

.hero-copy {
  max-width: 520px;
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

.side-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  padding-right: 0.2rem;
  margin-right: -0.2rem;
}

.side-nav::-webkit-scrollbar {
  width: 6px;
}

.side-nav::-webkit-scrollbar-thumb {
  background: var(--border-strong);
  border-radius: 999px;
}

.nav-card {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.6rem 0.7rem;
  background: var(--surface);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
  color: var(--text-primary);
}

.nav-card:hover {
  transform: translateX(4px);
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.06);
}

.nav-card.router-link-exact-active {
  border-color: var(--accent);
  background: linear-gradient(145deg, rgba(140, 248, 216, 0.16), rgba(125, 240, 255, 0.12));
}

.nav-icon-wrap {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
}

.nav-icon {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

.nav-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.nav-label {
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02rem;
}

.nav-caption {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.main-col {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  min-width: 0;
}

.content-panel {
  padding: 1.4rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow-soft);
}

/* Tablet / narrow: drop the sidebar to the top and lay nav out as a grid */
@media (max-width: 900px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
    max-height: none;
  }

  .side-nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    overflow: visible;
  }

  .nav-card:hover {
    transform: translateY(-4px);
  }
}

@media (max-width: 820px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .info-card {
    width: 100%;
  }
}
</style>
