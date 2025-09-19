<template>
    <div class="hello">
        <Title />
        <Transition name="fade" mode="out-in">
            <Game @close-game="closeGame" v-if="gameVisible" />
            <CodeSlider v-else />
        </Transition>
    </div>
</template>

<script setup lang="ts">
import Title from './parts/Title.vue';
import Game from './parts/Game.vue';
import CodeSlider from './parts/CodeSlider.vue';
const gameVisible = ref(true)
const closeGame = () => {
    gameVisible.value = false
}
</script>

<style scoped lang="scss">
.hello {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    gap: 10px;
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
