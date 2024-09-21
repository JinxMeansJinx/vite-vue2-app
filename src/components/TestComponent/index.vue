<template>
    <div class="title-container">
        <h1>
            <slot>default-slot</slot>
        </h1>
        <div class="title-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "test"
}
</script>

<style lang="scss" scoped>

    .title-container {
        display: flex;
        align-items: center;
    }

    .title-right {
        margin-left: auto;
    }

</style>