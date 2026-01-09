<template>
    
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>

        <div>
            <button class="btn btn-primary" @click="counter++">+1</button>
            <button class="btn btn-primary" @click="counter--">-1</button>
        </div>
    </section>

</template>

<script lang="ts" src="./MyCounterScript2">

</script>