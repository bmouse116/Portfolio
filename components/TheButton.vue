<template>
    <button class="the-button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.the-button {
    border-radius: 8px;
    padding: 10px 12px;
    width: 117px;
    height: 40px;
    background: var(--primary-background);

    border: none;

    &:hover {}
}
</style>
