<template>
    <div id="nav">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/mine">mine</router-link>|
        <router-link to="/profile">profile</router-link> -->
        <router-view class="view" />
        <van-tabbar route>
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/mine">课程</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/profile"
                >我的</van-tabbar-item
            >
            <van-tabbar-item icon="bookmark-o" to="/compositionapi">3.x</van-tabbar-item>
            <van-tabbar-item icon="label-o" to="/optionapi">2.x</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}
html,
body {
    height: 100%;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height: 100%;
    padding-bottom: 50px;
}
#nav {
    height: 100%;
}
.view {
    height: 100%;
}
</style>
