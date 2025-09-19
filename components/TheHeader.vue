<template>
    <div class="header">
        <div class="title">
            <span class="body-md">egor-bushkov</span>
        </div>
        <nav>
            <div class="main-links">
                <div class="body-md" :class="{ active: activeTab === tab }" v-for="tab in mainTabs" :key="tab"
                    @click="activeTab = tab">{{ tab }}</div>
            </div>
            <div class="contacts">
                <div class="body-md" @click="activeTab = Tabs.Contacts"
                    :class="{ active: activeTab === Tabs.Contacts }">
                    {{ Tabs.Contacts }}</div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { Tabs, type TabValue } from '~/types/types';
import { useActiveTab } from '#imports';

const activeTab = useActiveTab()

const mainTabs: TabValue[] = [Tabs.Hello, Tabs.About, Tabs.Projects]
</script>

<style scoped lang="scss">
.header {
    height: 56px;
    border-bottom: 1px solid var(--theme-theme-stroke);
    display: flex;

    .title {
        max-width: 311px;
        width: 100%;
        padding: 16px 24px;
        text-align: left;
    }

    nav {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .main-links {
            display: flex;
            width: 424px;

            .body-md {
                width: 122px;
                text-align: center;
                border-right: 1px solid var(--theme-theme-stroke);
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1;

                &:first-child {
                    border-left: 1px solid var(--theme-theme-stroke);
                    border-right: 1px solid var(--theme-theme-stroke);
                }
            }
        }

        .contacts {
            border-left: 1px solid var(--theme-theme-stroke);
            width: 170px;
            height: 56px;
            display: flex;

            .body-md {
                width: 122px;
                text-align: center;
                border-right: 1px solid var(--theme-theme-stroke);
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1;
            }
        }
    }
}

.body-md {
    color: var(--theme-foreground);
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease;

    &.active {
        color: var(--theme-heading-foreground);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background-color: var(--primary-background);
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }

    &.active::after {
        transform: scaleX(1);
    }

    &:hover {
        color: var(--primary-hover);
    }
}
</style>