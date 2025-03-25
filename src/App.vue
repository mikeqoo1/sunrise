<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img alt="Homelogo" class="logo" src="/恐龍愛吃漢堡包.png" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="歡迎來到恐龍天地" />
      <nav>
        <RouterLink to="/"><img src="/太空龍.png" alt="Home" class="nav-icon" />首頁</RouterLink>
        <RouterLink to="/about"><img src="/頭套恐龍.png" alt="About" class="nav-icon" />關於我</RouterLink>
        <RouterLink to="/happy"><img src="/可愛劍龍.png" alt="Happy" class="nav-icon" />恐龍戰隊</RouterLink>
        <RouterLink to="/travel"><img src="/t-rex.png" alt="Travel" class="nav-icon" />旅遊計畫</RouterLink>
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
