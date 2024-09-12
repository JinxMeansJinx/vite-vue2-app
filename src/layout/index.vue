<template>
    <div class="layout">
        <header>
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/About">About</router-link>
                <router-link to="/demo">demo</router-link>
            </nav>
        </header>
        <main>
            <router-view />
        </main>

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
.layout {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    header {
        height: 60px;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;

        nav {
            width: 200px;
            height: 100%;
            display: flex;
            align-content: center;

            >a {
                padding: auto;
                line-height: 60px;
            }

            a+a {
                margin-left: 20px;
            }
        }
    }

    main {
        height: calc(100% - 60px);
    }
}
</style>