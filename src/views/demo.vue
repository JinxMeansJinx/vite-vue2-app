<template>
  <div class="demo">
    <h1>demo</h1>
    <component :is="componentName" ></component>
    <TestComponent>
        <h2>ss</h2>
        <template #right >
            <div>
                right
            </div>
        </template>

    </TestComponent>

    <TestComponent>


    </TestComponent>
    <!-- <SubmitButton>button1</SubmitButton> -->
    <!-- <SubmitButton>button2</SubmitButton> -->
    <!-- <SubmitButton></SubmitButton> -->
  </div>
</template>

<script>
import TestComponent from "@/components/TestComponent/index.vue";
// import SubmitButton from "@/components/SubmitButton.vue";
export default {
    name:"demo",
    components:{
        TestComponent,
        // SubmitButton
    },
    data(){
        return {
            componentName:"SubmitButton"
        }

    }
}
</script>

<style>

</style>