<template>
    <div class="page">
        <h1>球衣設計投票區</h1>
        <JerseyVotePanel />
    </div>
</template>

<script setup lang="ts">
import JerseyVotePanel from '../components/JerseyVotePanel.vue'
</script>

<style scoped>
.page {
    max-width: 900px;
    margin: auto;
    padding: 30px;
}
</style>
