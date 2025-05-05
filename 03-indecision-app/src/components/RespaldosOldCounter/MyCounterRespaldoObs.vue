<template>
    <section>
        <div>
            <h3 class="th3yellow center">Counter: {{ counter }}</h3>
            <h3 class="th3yellow center">Square: {{ squareCounter }}</h3>
        </div>
        <div class="th3yellow center h-screen">
            <button class="btn" v-on:click="sumador">+1</button>
            <button class="btn" @click="restador">-1</button>
        </div>
    </section>
</template>

<script lang="ts" setup>

    import {computed, ref} from 'vue';

    interface Props{
        initialValue: number;
    }

    const props = defineProps<Props>();

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

</script>

<style scoped>
    @reference "tailwindcss";
    .btn{
        @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2;
    }

    .th3yellow{
        @apply bg-yellow-300 content-center
    }

    .center{
        @apply flex items-center justify-center
    }
</style>