<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>

        <div>
            <button class="btn" v-on:click="sumador">+1</button>
            <button class="btn" @click="restador">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { useCounter } from '@/composables/useCounter';
    interface Props{
        initialValue: number;
        texto?: string;
    }

    //const props = defineProps({
    //    initialValue: { type: Number, required: true },
    //});
    const props = defineProps<Props>();

    const {counter, squareCounter} = useCounter(10);

    //import {computed, ref} from 'vue';

    /*
    const counter = ref(props.initialValue);
    const squareCounter = computed(
        ()=>counter.value * counter.value
    );
    */
    const sumador = () =>{
        counter.value++;
    };
    
    const restador = () => {
        counter.value--;
    }

</script>

<style scoped>
    @reference "tailwindcss";
    .btn{
        @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
    }
</style>