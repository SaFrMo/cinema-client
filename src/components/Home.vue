<template>

<main>
    <nav>

        <ul>

            <li v-for="(show, i) in $store.state.data.shows">
                <router-link
                    :to="`/shows/${ show }`"
                    :key="i">
                    <span class="title">{{ show }}</span>
                </router-link>
            </li>

        </ul>

    </nav>
</main>

</template>

<script>

export default {
}

</script>

<style scoped>

nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
}
nav li {
    width: calc(100% / 3);
}
nav a {
    background-color: #f9f9f9;
    height: 0;
    width: calc(100% - 20px);
    display: block;
    padding-bottom: 56.25%;
    margin: 10px;
    text-decoration: none;
    color: #000;
    position: relative;
}
nav .title {
    position: absolute;
    top: 10px;
    right: 10px;
}

</style>
