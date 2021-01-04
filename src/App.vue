<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/mine">mine</router-link>|
        <router-link to="/profile">profile</router-link>
    </div>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
