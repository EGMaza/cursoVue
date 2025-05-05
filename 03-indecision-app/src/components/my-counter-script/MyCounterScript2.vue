<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>

        <div>
            <button v-on:click="sumador">+1</button>
            <button @click="restador">-1</button>
        </div>
    </section>
</template>

<script lang="ts" src="./MyCounterScript2">
    
</script>