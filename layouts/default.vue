<template>
    <div class="layout-wrapper">
        <header>
            <h1>BmouseOrg.</h1>
            <nav>
                <NuxtLink to="/">Главная</NuxtLink>
                <NuxtLink to="/about">О нас</NuxtLink>
                <NuxtLink to="/contacts">Контакты</NuxtLink>
            </nav>
        </header>
        <main class="container">
            <NuxtPage />
        </main>
        <footer>
            <p>© 2025 BmouseOrg</p>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    box-shadow: 0px 0px 15px 5px rgb(99, 98, 98);
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 30px;

    h1 {
        font-size: 48px;
    }

    nav {
        display: flex;
        gap: 20px;

        a {
            color: black;
            text-decoration: none;
            font-size: 24px;

        }
    }
}

main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: centerD;
}

footer {
    background-color: rgb(39, 39, 39);
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: white;
    }
}
</style>
