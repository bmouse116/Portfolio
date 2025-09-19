<template>
    <div class="hello-title">
        <div class="main-text">
            <span class="body-lg">Hi all. I am</span>
            <h1>Egor Bushkov</h1>
            <h4>> Front-end developer</h4>
        </div>
        <div class="description">
            <span class="body-lg">// complete the game to continue</span>
            <span class="body-lg">// find my profile on GitHub</span>
            <p class="git-link">
                <span class="const">const</span>
                <span class="name">gitHubLink</span>
                <span class="operator">=</span>
                <NuxtLink to="https://github.com/bmouse116">"https://github.com/bmouse116"</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hello-title {
    width: 504px;
    display: flex;
    flex-direction: column;
    gap: 75px;

    .main-text {
        h1 {
            line-height: 110%;
            color: var(--theme-heading-foreground);
            margin-top: 4px;
        }

        h4 {
            color: var(--primitive-indigo-500);
            line-height: 140%;
            margin-top: 8px;
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .git-link {
            display: flex;
            gap: 8px;

            a {
                color: var(--theme-link-foreground);
                transition: all 0.3s ease;

                &:hover {
                    color: var(--theme-link-hover-foreground);
                }
            }
        }
    }
}

.body-lg {
    color: var(--theme-foreground);
}
</style>
