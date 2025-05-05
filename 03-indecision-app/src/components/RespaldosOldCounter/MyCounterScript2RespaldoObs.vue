<template>
    <section>
        <div class="th3gray">
            <h3 class="center">Counter: {{ counter }}</h3>
            <h3 class="center">Square: {{ squareCounter }}</h3>
        </div>

        <div class="th3gray center h-screen">
            <button class="btn" v-on:click="sumador">+1</button>
            <button class="btn" @click="restador">-1</button>
        </div>
    </section>
</template>

<script lang="ts" src="./MyCounterScript2RespaldoObs">
    
</script>

<style scoped>
    @reference "tailwindcss";
    .btn{
        @apply p-5 bg-green-200 rounded hover:bg-red-500 mr-2;
    }

    .th3gray{
        @apply bg-gray-200 content-center
    }

    .center{
        @apply flex items-center justify-center
    }
</style>