<template>
    <h1 className="text-3xl font-bold underline th1green center">Hola mundo</h1>

    <hr/>
    <div class="grid grid-cols-3">
        <div>
            <MyCounterRespaldoOb :initialValue="1"/>
        </div>
        <div>
            <MyCounterScriptRespaldoObs :initialValue="2"/>
        </div>
        <div>
            <MyCounterScript2RespaldoObs :initialValue="3"/>
        </div>
    </div>

</template>

<script lang="ts" setup>
import MyCounterRespaldoOb from '@/components/RespaldosOldCounter/MyCounterRespaldoObs.vue'
import MyCounterScriptRespaldoObs from './MyCounterScriptRespaldoObs.vue';
import MyCounterScript2RespaldoObs from './MyCounterScript2RespaldoObs.vue';
</script>

<style scoped>
    @reference "tailwindcss";
    .th1green{
        @apply bg-green-500 content-center
    }

    .center{
        @apply flex items-center justify-center
    }
</style>