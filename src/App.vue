<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            msg: 'hello world'
        };
    },
};
</script>
<style lang="scss" scoped>
.app {
    width: 100%;
    height: 100%;
}
</style>