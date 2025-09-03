<template>
    <button class="the-button" :class="btnType">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    btnType: {
        type: String,
        default: "primary"
    }
})
</script>

<style scoped lang="scss">
.the-button {
    border-radius: 8px;
    padding: 10px 12px;
    height: 40px;
    border: 1px solid transparent;
    color: var(--primary-inverted);
    cursor: pointer;
}

.primary {
    background-color: var(--primary-background);
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--primary-hover);
    }
}

.primitive {
    background-color: var(--primitive-slate-600);
    transition: all 0.3s ease;
    color: var(--theme-heading-foreground);

    &:hover {
        background-color: var(--primitive-slate-500);
    }
}

.ghost {
    border: 1px solid var(--primitive-slate-50);
    color: var(--theme-heading-foreground);
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--primitive-slate-800);
    }
}

.success {
    background-color: var(--semantic-success-background);
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--semantic-success-hover);
    }
}

.error {
    background-color: var(--semantic-error-background);
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--semantic-error-hover);
    }
}

.warning {
    background-color: var(--semantic-warning-background);
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--semantic-warning-hover);
    }
}

.disabled {
    background-color: var(--primitive-slate-700);
    color: var(--primitive-slate-500);
    cursor: not-allowed;
}
</style>
