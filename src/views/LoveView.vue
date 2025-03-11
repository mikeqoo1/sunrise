<script setup lang="ts">
import { ref, onMounted } from 'vue';
const showHeart = ref(false);
onMounted(() => {
  setTimeout(() => {
    showHeart.value = true;
  }, 1000); // 1秒後顯示愛心
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <p class="text-lg mt-4">恐龍最喜番R庭</p>
    <div class="flex items-center space-x-8">
        <div style="padding: 0; width:300px;height:300px;position: absolute;border: 0px solid #eff2f6;">
            <img src="/太空龍.png" alt="阿奎" class="w-10 h-10 object-contain"  style="width: 60%; height: 60%;object-fit: contain;"/>
            <transition name="fade">
            <h1 v-if="showHeart" class="text-4xl font-bold text-red-500">❤️ ❤️ ❤️ ❤️ ❤️ ❤️</h1>
            </transition>
            <img src="/牛牛.ico" alt="阿庭" class="w-10 h-10 object-contain"  style="width: 60%; height: 60%;object-fit: contain;" />
        </div>
    </div>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
