<template>
    <div class="game-window">
        <div class="game" ref="gameArea">
            <div v-if="gameState.isPlaying" class="hit-zone"></div>

            <div v-for="line in codeLines" :key="line.id" class="code-line" :class="{ buggy: line.isBuggy }"
                :style="{ top: line.y + 'px' }">
                <pre><code v-html="line.html"></code></pre>
            </div>
        </div>

        <div class="overlay" v-if="!gameState.isPlaying">
            <div v-if="!gameState.isGameOver">
                <UiTheButton @click="startGame">start-game</UiTheButton>
            </div>
            <div class="game-over-screen" v-else>
                <h2>Game Over</h2>
                <p>Your score: {{ finalScore }}</p>
                <UiTheButton @click="startGame">play-again</UiTheButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['scoreUpdate', 'livesUpdate']);

const gameArea = ref<HTMLElement | null>(null);
const gameState = reactive({ isPlaying: false, isGameOver: false });
let finalScore = ref(0);
const codeLines = ref<any[]>([]);
let gameLoopId: number;
let lineCounter = 0;

let frameCount = 0;
let nextSpawnInFrames = 0;

const GOOD_CODE = [
    { text: "return true;", html: "return true;" },
    { text: "console.log('Hello');", html: "console.log('Hello');" },
    { text: "const sum = a + b;", html: "const sum = a + b;" }
];
const BAD_CODE = [
    { text: "retunr true;", html: "<span class='error'>retunr</span> true;" },
    { text: "consele.log('Helo');", html: "<span class='error'>consele</span>.log('<span class='error'>Helo</span>');" },
    { text: "const sum = a ++ b;", html: "const sum = a <span class='error'>++</span> b;" }
];

const startGame = () => {
    gameState.isPlaying = true;
    gameState.isGameOver = false;
    codeLines.value = [];
    emit('scoreUpdate', 0);
    emit('livesUpdate', 3);

    frameCount = 0;
    nextSpawnInFrames = 120;

    window.addEventListener('keydown', handleShoot);

    const gameLoop = () => {
        if (!gameState.isPlaying) return;
        updateGame();
        gameLoopId = requestAnimationFrame(gameLoop);
    };
    gameLoop();
};

const updateGame = () => {
    codeLines.value.forEach(line => { line.y += 3; });
    const gameHeight = gameArea.value?.clientHeight || 405;
    const linesToRemove = codeLines.value.filter(line => line.y > gameHeight);
    linesToRemove.forEach(line => {
        if (line.isBuggy) { emit('livesUpdate', -1); }
    });
    codeLines.value = codeLines.value.filter(line => line.y <= gameHeight);

    frameCount++;
    if (frameCount >= nextSpawnInFrames) {
        spawnCodeLine();
        const minCooldown = 90;
        const maxCooldown = 120;
        nextSpawnInFrames = frameCount + minCooldown + Math.random() * (maxCooldown - minCooldown);
    }
};

const spawnCodeLine = () => {
    const isBuggy = Math.random() > 0.4;
    const codePool = isBuggy ? BAD_CODE : GOOD_CODE;
    const code = codePool[Math.floor(Math.random() * codePool.length)];
    if (!code) {
        return;
    }
    codeLines.value.push({
        id: lineCounter++,
        text: code.text,
        html: code.html,
        isBuggy,
        y: -30,
    });
};

const handleShoot = (event: KeyboardEvent) => {
    if (event.code !== 'Space' || !gameState.isPlaying) return;
    event.preventDefault();

    const hitZoneTop = 180;
    const hitZoneBottom = 220;
    const lineInZone = codeLines.value.find(line => line.y > hitZoneTop && line.y < hitZoneBottom);

    if (lineInZone) {
        if (lineInZone.isBuggy) {
            emit('scoreUpdate', 1);
        } else {
            emit('livesUpdate', -1);
        }
        codeLines.value = codeLines.value.filter(line => line.id !== lineInZone.id);
    }
};

const gameOver = (score: number) => {
    gameState.isPlaying = false;
    gameState.isGameOver = true;
    finalScore.value = score;
    cancelAnimationFrame(gameLoopId);
    window.removeEventListener('keydown', handleShoot);
};

defineExpose({ gameOver });

onUnmounted(() => {
    cancelAnimationFrame(gameLoopId);
    window.removeEventListener('keydown', handleShoot);
});
</script>

<style scoped lang="scss">
.game-window {
    width: 238px;
    height: 405px;
    border-radius: 8px;
    box-shadow: inset 1px 5px 11px 0 rgba(2, 18, 27, 0.71);
    background: var(--primitive-slate-800);
    display: flex;
    flex-direction: column;
    position: relative;

    .game {
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .hit-zone {
        position: absolute;
        top: 200px;
        left: 0;
        right: 0;
        height: 1px;
        background: #ff4747;
        box-shadow: 0 0 10px #ff4747, 0 0 5px #ff4747;
    }

    .code-line {
        position: absolute;
        left: 10px;
        right: 10px;
        background-color: rgba(15, 23, 42, 0.8);
        padding: 4px 8px;
        border-radius: 4px;
        border: 1px solid #334155;

        pre,
        code {
            margin: 0;
            padding: 0;
            background: none;
            color: #94a3b8;
            font-family: 'monospace';
            font-size: 14px;
            white-space: pre;
        }

        &.buggy code {

            :deep(.error) {
                color: #ef4444;
                text-decoration: wavy underline #ef4444;
            }
        }
    }

    .overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(2px);
    }

    .game-over-screen {
        text-align: center;
        color: white;

        h2 {
            margin: 0;
        }

        p {
            margin: 10px 0 20px;
        }
    }
}
</style>