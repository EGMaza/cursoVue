<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <div class="border-b border-blue-500">
        <!-- Header -->
        <slot name="heeader" />
      </div>

      <div class="my-5">
        <!-- Body -->
        <slot name="boody" />
      </div>

      <div class="border-t border-t-blue-500 pt-2">
        <!-- Footer -->
        <slot name="foooter" />
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-20 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});
</script>
