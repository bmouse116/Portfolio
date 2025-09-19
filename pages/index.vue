<template>
    <div class="main-page">
        <Transition name="fade" mode="out-in">
            <ViewsHello v-if="activeTab === Tabs.Hello" />
            <ViewsAbout v-else-if="activeTab === Tabs.About" />
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { Tabs, type TabValue } from '~/types/types';
const activeTab = useActiveTab()
</script>

<style scoped lang="scss">
.main-page {
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>