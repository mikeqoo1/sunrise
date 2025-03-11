<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const icons = ref([
  { src: '/牛牛.ico', label: '牛牛' },
  { src: '/獅子.ico', label: '獅子' },
]);
const isFighting = ref(true);
const toggleFight = () => {
  isFighting.value = !isFighting.value;
  if (!isFighting.value) {
    setTimeout(() => {
      router.push('/love'); // 跳轉到新頁面
    }, 1000); // 1秒後跳轉
  } else {
    icons.value = [
      { src: '/牛牛.ico', label: '牛牛' },
      { src: '/獅子.ico', label: '獅子' },
    ];
  }
};
</script>

<template>
  <h1 class="text-4xl font-bold text-red-500">請點擊圖片</h1>
  <div class="p-4 flex items-center justify-center space-x-4">
    <div v-for="(icon, index) in icons" :key="index" class="flex items-center">
      <img :src="icon.src" :alt="icon.label" class="w-40 h-40 object-contain cursor-pointer" @click="toggleFight" />
    </div>
  </div>
</template>
