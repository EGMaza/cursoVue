<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p v-if="subTitle" class="py-4">
        {{ subTitle }}
      </p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder ?? 'Ingrese un valor'"
            class="input input-bordered input-primary w-full flex-1 mb-2"
            v-model="inputValue"
          />

          <div class="flex justify-end">
            <button class="btn mr-2" @click="$emit('close')">Cerrar</button>
            <button type="submit" @click="cerrar" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-20 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  open: boolean;
  title: string;
  placeholder?: string;
  subTitle?: string;
}

defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }
  console.log('valor emitido: ', inputValue.value);
  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
};

const cerrar = () => {
  if (!inputValue.value) return;
  emits('close');
};
</script>
