<template>
    <div class="hello-game">
        <UiSvgGradient />
        <div class="game-wrapper">
            <div class="left-top">
                <UiLeftTop />
            </div>
            <div class="right-top">
                <UiRightTop />
            </div>
            <div class="left-bottom">
                <UiLeftBottom />
            </div>
            <div class="right-bottom">
                <UiRightBottom />
            </div>

            <GameWindow ref="gameWindowRef" @score-update="handleScoreUpdate" @lives-update="handleLivesUpdate" />

            <div class="game-bar">
                <GameControls @close-game="closeGame" :score="score" :lives="lives" :total-lives="totalLives" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { UiLeftBottom, UiLeftTop, UiRightTop, UiRightBottom } from '#components';
import GameWindow from './GameWindow.vue';
import GameControls from './GameControls.vue';

const emit = defineEmits(['close-game'])

const closeGame = () => {
    emit('close-game')
}

const score = ref(0);
const totalLives = 3;
const lives = ref(totalLives);

const gameWindowRef = ref<InstanceType<typeof GameWindow> | null>(null);

const handleScoreUpdate = (points: number) => {
    if (points === 0) {
        score.value = 0;
    } else {
        score.value += points;
    }
};

const handleLivesUpdate = (change: number) => {
    if (change === totalLives) {
        lives.value = totalLives;
    } else {
        lives.value += change;
    }
};

watch(lives, (newLives) => {
    if (newLives <= 0) {
        lives.value = 0;
        gameWindowRef.value?.gameOver(score.value);
    }
});

</script>

<style scoped lang="scss">
.hello-game {
    width: 779px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .game-wrapper {
        position: relative;
        border: 1px solid var(--theme-theme-stroke);
        border-radius: 8px;
        padding: 32px;
        width: 506px;
        height: 469px;
        backdrop-filter: blur(64px);
        box-shadow: inset 0 2px 0 0 rgba(255, 255, 255, 0.3);
        background:
            linear-gradient(to top left,
                rgba(20, 41, 55, 1),
                rgba(21, 67, 71, 0.6)),

            linear-gradient(154deg,
                rgba(23, 85, 83, 0.7) 0%,
                rgba(67, 217, 173, 0.7) 100%);
        display: flex;
        gap: 24px;

        .left-top {
            position: absolute;
            top: 12px;
            left: 12px;
        }

        .left-bottom {
            position: absolute;
            bottom: 4px;
            left: 12px;
        }

        .right-top {
            position: absolute;
            top: 12px;
            right: 12px;
        }

        .right-bottom {
            position: absolute;
            bottom: 4px;
            right: 12px;
        }
    }
}
</style>