<template>
    <div class="layout-wrapper">
        <header>
            <TheHeader />
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <TheFooter />
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
body {
    background: var(--theme-theme-backdrop);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.layout-wrapper {
    border: 1px solid var(--theme-theme-stroke);
    border-radius: 8px;
    width: 1780px;
    height: 940px;
    background-color: var(--theme-theme-background);
    display: flex;
    flex-direction: column;

    main {
        flex-grow: 1;
    }
}
</style>