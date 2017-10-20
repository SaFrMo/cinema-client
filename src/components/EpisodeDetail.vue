<template>

    <main>
        <video autoplay controls :src="`${ $store.state.base }/${ $route.params.show }/${ $route.params.episode }`"/>
    </main>

</template>
