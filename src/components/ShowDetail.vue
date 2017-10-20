<template>

<main>

    <nav>
        <router-link to="/">Home</router-link>
        <router-link v-for="episode in $store.state.data.episodes" :to="`${ $route.path }/${ episode.replace('.mp4', '') }`">
            {{ episode.replace('.mp4', '') }}
        </router-link>
    </nav>

</main>

</template>

<script>

export default {
    mounted(){
        this.getShow()
    },
    methods: {
        getShow(){
            this.$store.dispatch('GET_DATA', { path: `/shows/${ this.$route.params.show }` })
        }
    }
}

</script>
