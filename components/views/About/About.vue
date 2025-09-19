<template>
    <div class="about-page">
        <LeftBar />
        <dropdown />
    </div>
</template>

<script setup lang="ts">
import Dropdown from './ui/Dropdown.vue';
import LeftBar from './ui/LeftBar.vue';

</script>

<style scoped lang="scss">
.about-page {
    height: 100%;
    display: flex;
}
</style>
