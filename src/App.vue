<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>

    <!-- 引入 Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap" rel="stylesheet">
    <img alt="Homelogo" class="logo" src="/恐龍愛吃漢堡包.png" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="歡迎來到恐龍天地" />
      <nav>
        <RouterLink to="/"><img src="/太空龍.png" alt="Home" class="nav-icon" />首頁</RouterLink>
        <RouterLink to="/about"><img src="/頭套恐龍.png" alt="About" class="nav-icon" />關於我</RouterLink>
        <RouterLink to="/lunch"><img src="/卡比獸.png" alt="lunch" class="nav-icon" />中午吃飯</RouterLink>
        <RouterLink to="/happy"><img src="/去背_球褲logo.png" alt="Happy" class="nav-icon" />快樂龍戰隊</RouterLink>
        <RouterLink to="/design"><img src="/design/Happy_3_CS6.png" alt="Design" class="nav-icon" />設計的球衣</RouterLink>
        <RouterLink to="/random"><img src="/happy/呆呆吉拉王.png" alt="random" class="nav-icon" />先發人員</RouterLink>
        <div
          style="text-align: center; font-family: 'Orbitron', sans-serif; font-size: 20px; font-weight: 700; color: #00ffcc;">
          掃碼加入戰隊獲得更多資訊
          <br>
          <img src="https://qr-official.line.me/gs/M_212cwsii_BW.png?oat_content=qr" width="95" height="95"
            alt="Line QR Code" />
        </div>
        <!-- 等下次出去玩再更新旅遊計畫跟購買清單 2025/07/01 -->
        <!-- <RouterLink to="/travel"><img src="/t-rex.png" alt="Travel" class="nav-icon" />旅遊計畫</RouterLink> -->
        <!-- <RouterLink to="/shopping"><img src="/黃色劍龍.png" alt="Shopping" class="nav-icon" />2025東京購買清單</RouterLink>  -->
        <!-- 恐龍戰隊球衣已經做了3個版本不用再做了 2025/11/05 -->
        <!-- <RouterLink to="/jersey"><img src="/夢幻.png" alt="jersey" class="nav-icon" />預計戰袍</RouterLink> -->
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
<style scoped>
.nav-icon {
  width: 24px;
  height: 24px;
  margin-right: 5px;
  vertical-align: middle;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
