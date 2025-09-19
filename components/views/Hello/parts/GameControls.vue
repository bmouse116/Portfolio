<template>
    <div class="controls">
        <div class="comments">
            <span class="body-sm">// find and shoot bugs</span>
            <span class="body-sm">// use space to shoot</span>
        </div>

        <div class="buttons">
            <div class="space">
                <UiTheButton btn-type="black">
                    space
                </UiTheButton>
            </div>
        </div>

        <div class="info-block">
            <span class="body-sm">// score</span>
            <div class="score-display">
                {{ score }}
            </div>
        </div>

        <div class="info-block">
            <span class="body-sm">// lives left</span>
            <div class="lives">
                <span v-for="n in totalLives" :key="n" :class="['life-dot', { active: n <= lives }]"></span>
            </div>
        </div>

        <div class="skip-button-container">
            <UiTheButton btn-type="transparent" @click="closeGame">skip</UiTheButton>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    score: {
        type: Number,
        default: 0
    },
    lives: {
        type: Number,
        default: 3
    },
    totalLives: {
        type: Number,
        default: 3
    }
})

const emit = defineEmits(['close-game'])
const closeGame = () => {
    emit('close-game')
}
</script>

<style scoped lang="scss">
.controls {
    width: 180px;
    height: 100%;
    border-radius: 8px;
    background-color: var(--primitive-slate-800);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .comments,
    .info-block {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .body-sm {
            color: #8393a3;
            font-family: 'monospace';
        }
    }

    .buttons {
        .space button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primitive-slate-50);
        }
    }

    .score-display {
        color: var(--primitive-slate-50);
        font-size: 24px;
        font-weight: bold;
        font-family: 'monospace';
    }

    .lives {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 8px;

        .life-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: rgba(67, 217, 173, 0.2);
            transition: background-color 0.3s ease;

            &.active {
                background-color: #43D9AD;
                box-shadow: 0 0 8px #43D9AD;
            }
        }
    }

    .skip-button-container {
        margin-top: auto;
        display: flex;
        justify-content: flex-end;

        .the-button {
            border: 1px solid var(--primitive-slate-50);
            color: var(--primitive-slate-50);
            transition: all 0.3s ease;

            &:hover {
                background: var(--primitive-slate-500);
            }
        }
    }

    .skip-button {
        background: none;
        border: 1px solid #8393a3;
        color: #8393a3;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-family: 'monospace';

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            border-color: #F8FAFC;
            color: #F8FAFC;
        }
    }
}
</style>