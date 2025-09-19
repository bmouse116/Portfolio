<template>
    <div class="code-slider-container">
        <UiSvgGradient />
        <div class="slider-viewport">
            <div class="slider-track" :style="trackStyle" :class="{ 'no-transition': isResetting }">
                <div class="slide" v-for="(_, index) in slides" :key="index"
                    :style="{ opacity: getSlideOpacity(index) }">
                    <div class="text">
                        <p class="slide-text">
                            <span class="const">const</span>
                            <span class="name">handleLivesUpdate</span>
                            <span class="operator">=</span>
                            <span>
                                <span class="scope">(</span>
                                <span class="value">change</span>
                                <span class="operator">:&nbsp;</span>
                                <span class="type">number</span>
                                <span class="scope">)</span>
                            </span>
                            <span class="const">=></span>
                            <span class="scope">{</span>
                        </p>
                        <p class="slide-text indented">
                            <span class="blocks-if">if</span>
                            <span>
                                <span class="blocks">(</span>
                                <span class="value">change</span>
                                <span class="operator">&nbsp;===&nbsp;</span>
                                <span class="value-blue">totalLives</span>
                                <span class="blocks">)&nbsp;</span>
                                <span class="blocks">{</span>
                            </span>
                        </p>
                        <p class="slide-text double-indented">
                            <span>
                                <span class="value">lives</span>
                                <span class="operator">.</span>
                                <span class="value-blue">value</span>
                            </span>
                            <span class="operator">=</span>
                            <span class="value-blue">totalLives<span class="operator">;</span>
                            </span>
                        </p>
                        <p class="slide-text indented">
                            <span class="blocks">}</span>
                            <span class="blocks-if">else</span>
                            <span class="blocks">{</span>
                        </p>
                        <p class="slide-text double-indented">
                            <span>
                                <span class="value">lives</span>
                                <span class="operator">.</span>
                                <span class="value-blue">value</span>
                            </span>
                            <span class="operator">+=</span>
                            <span class="value">change<span class="operator">;</span>
                            </span>
                        </p>
                        <p class="slide-text indented">
                            <span class="blocks">}</span>
                        </p>
                        <p class="slide-text">
                            <span class="scope">}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

const ORIGINAL_SLIDES_COUNT = 5;
const SLIDE_DURATION = 3000;
const TRANSITION_SPEED = 1000;
const CLONES_COUNT = 3;

const isResetting = ref(false);
let slideInterval: number | null = null;

const SLIDE_HEIGHT = 182;
const SLIDE_GAP = 16;
const SLIDE_OFFSET = SLIDE_HEIGHT + SLIDE_GAP;

const originalSlides = Array.from({ length: ORIGINAL_SLIDES_COUNT });
const startClones = originalSlides.slice(0, CLONES_COUNT);
const endClones = originalSlides.slice(-CLONES_COUNT);
const slides = ref([...endClones, ...originalSlides, ...startClones]);

const currentIndex = ref(CLONES_COUNT);

const trackStyle = computed(() => {
    const verticalOffset = `calc(50% - ${SLIDE_HEIGHT / 2}px)`;
    return {
        transform: `translateY(${verticalOffset}) translateY(-${currentIndex.value * SLIDE_OFFSET}px)`,
    };
});

const getSlideOpacity = (index: number) => {
    const distance = Math.abs(index - currentIndex.value);
    if (distance === 0) return 1;
    if (distance === 1) return 0.4;
    if (distance === 2) return 0.15;
    return 0;
};

const nextSlide = async () => {
    if (currentIndex.value >= CLONES_COUNT + ORIGINAL_SLIDES_COUNT - 1) {
        currentIndex.value++;

        setTimeout(async () => {
            isResetting.value = true;

            await nextTick();

            currentIndex.value = CLONES_COUNT;

            isResetting.value = false;

        }, TRANSITION_SPEED);
    } else {
        currentIndex.value++;
    }
};

onMounted(() => {
    slideInterval = window.setInterval(nextSlide, SLIDE_DURATION);
});

onUnmounted(() => {
    if (slideInterval) clearInterval(slideInterval);
});
</script>

<style scoped lang="scss">
.code-slider-container {
    width: 779px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider-viewport {
    position: absolute;
    top: 0;
    left: 0;
    width: 776px;
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%);
    mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%);
}

.slider-track {
    width: 560px;
    margin: 0 auto;
    transition: transform 1s ease-in-out;
    will-change: transform;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.slider-track.no-transition {
    transition: none;
}

.slide {
    width: 560px;
    height: 182px;
    background-color: #0d1117;
    border-radius: 8px;
    box-shadow: 0px 1px 1px 1px #161b22;
    padding: 20px;
    box-sizing: border-box;
    transition: opacity 1s ease-in-out;
    will-change: opacity;
    flex-shrink: 0;
}

.text {
    .slide-text {
        display: flex;
        gap: 8px;
        align-items: center;
        color: #c9d1d9;
        font-family: monospace;
        font-size: 14px;
        line-height: 1.5;
    }

    .indented {
        padding-left: 40px;
    }

    .double-indented {
        padding-left: 80px;
    }
}
</style>