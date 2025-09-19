<template>
    <div class="dropdown">
        <div class="accordion-item" v-for="(item, i) in items" :key="i">
            <div class="accordion-header" @click="toggle(i)">
                <span class="arrow" :class="{ open: activeIndex === i }">▶</span>
                <span class="body-md">{{ item.title }}</span>
            </div>

            <transition name="accordion">
                <div v-show="activeIndex === i" class="accordion-body">
                    <div v-if="item.children" class="nested">
                        <div class="accordion-item-child" v-for="(child, j) in item.children" :key="j">
                            <div class="accordion-header-child" @click="toggleChild(i, j)">
                                <span class="arrow" :class="{ open: activeChild[i] === j }">
                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.29985 4.24265L0 0.942807L0.942813 0L5.18545 4.24265L0.942813 8.48525L0 7.54245L3.29985 4.24265Z"
                                            fill="#62748E" />
                                    </svg>
                                </span>
                                <span class="body-md">{{ child.title }}</span>
                            </div>
                            <transition name="accordion">
                                <div v-show="activeChild[i] === j" class="accordion-body-child">
                                    {{ child.content }}
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div v-else>
                        {{ item.content }}
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface Item {
    title: string
    content?: string
    children?: Item[]
}

const items: Item[] = [
    {
        title: "personal-info",
        children: [
            { title: "profile", content: "Данные профиля" },
            { title: "settings", content: "Настройки пользователя" },
        ],
    },
    {
        title: "contacts",
        children: [
            { title: "email", content: "user@mail.com" },
            { title: "phone", content: "+7 900 123-45-67" },
        ],
    },
]

const activeIndex = ref<number | null>(null)
const activeChild = ref<Record<number, number | null>>({})

const toggle = (i: number) => {
    activeIndex.value = activeIndex.value === i ? null : i
}

const toggleChild = (i: number, j: number) => {
    if (activeChild.value[i] === j) {
        activeChild.value[i] = null
    } else {
        activeChild.value[i] = j
    }
}
</script>

<style scoped lang="scss">
.dropdown {
    width: 246px;
    border-right: 1px solid var(--theme-theme-stroke);
}

.accordion-item {
    overflow: hidden;
    // border-bottom: 1px solid var(--theme-theme-stroke);
}

.accordion-header {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-weight: 600;
    background: transparent;
    border-bottom: 1px solid var(--theme-theme-stroke);

    .body-md {
        color: var(--theme-heading-foreground);
        font-weight: 450;
    }
}

.accordion-header-child {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-weight: 600;
    background: transparent;

    .body-md {
        color: var(--theme-heading-foreground);
        font-weight: 450;
    }
}

.arrow {
    display: inline-block;
    transition: transform 0.3s ease;
    color: var(--theme-heading-foreground);
    font-size: 8px;
}

// .arrow-child {
//     display: inline-block;
//     transition: transform 0.3s ease;
//     color: var(--theme-heading-foreground);
//     font-size: 14px;
// }

// .arrow-child.open {
//     transform: rotate(90deg);
// }

.arrow.open {
    transform: rotate(90deg);
}

.accordion-body {
    padding: 0 24px;
    padding-top: 12px;
    background: transparent;

    .nested {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
}

/* Анимация открытия */
.accordion-enter-active,
.accordion-leave-active {
    transition: all 0.1s ease;
    overflow: hidden;
    max-height: 200px;
}

.accordion-enter-from,
.accordion-leave-to {
    opacity: 0;
    max-height: 0;
}
</style>
