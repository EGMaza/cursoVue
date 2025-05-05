<template>
    <section>
        <div class="th3purple">
            <h3 class="center">Counter: {{ counter }}</h3>
            <h3 class="center">Square: {{ squareCounter }}</h3>
        </div>
        <div class="th3purple center h-screen">
            <button class="btn" v-on:click="sumador">+1</button>
            <button class="btn" @click="restador">-1</button>
        </div>
    </section>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from 'vue';
    export default defineComponent({
        props: {
            initialValue: {
                type: Number, required: true 
            },
        },
        setup(props){
            const counter = ref(props.initialValue);
            const squareCounter = computed(
            ()=>counter.value * counter.value
            );
            const sumador = () =>{
                counter.value++;
            };
            const restador = () => {
                counter.value--;
            }

            return{
                counter,
                squareCounter,
                sumador,
                restador,
            };
        },
    });
</script>
<style scoped>
    @reference "tailwindcss";
    .btn{
        @apply p-5 bg-pink-400 rounded hover:bg-orange-300 mr-2;
    }

    .th3purple{
        @apply bg-purple-300 content-center
    }

    .center{
        @apply flex items-center justify-center
    }
</style>