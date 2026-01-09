<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyecto</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 2 -->
        <tr v-for="(project, index) in projectsStore.projectList" :key="project.id" class="hover">
          <th>{{ index + 1 }}</th>
          <td>{{ project.name }}</td>
          <td>{{ project.tasks.length }}</td>
          <td>
            <progress class="progress progress-primary w-56" value="1" max="100"></progress>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <input-modal
    :open="modalOpen"
    @close="modalOpen = false"
    @value="projectsStore.addProject"
    placeholder="Ingrese el nombre del proyecto"
    title="Registro de nuevo proyecto"
    sub-title="Escriba el nombre del nuevo proyecto"
  />

  <!--<custom-modal :open="customModalOpen">-->
  <custom-modal :open="customModalOpen">
    <template #heeader>
      <h1 class="text-3xl">Titulazo del modal</h1>
    </template>

    <template #boody>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aperiam, magnam
        dignissimos veniam tenetur aliquam voluptatem tempore recusandae sint, ipsam quia cum
        commodi fuga inventore maiores rerum porro dolores beatae.
      </p>
    </template>

    <template #foooter>
      <div class="flex justify-end">
        <button @click="customModalOpen = false" class="btn mr-2">Cancelar</button>
        <button @click="customModalOpen = false" class="btn btn-primary">Aceptar</button>
      </div>
    </template>
  </custom-modal>

  <!-- aqui va el botón -->
  <fab-button @click="modalOpen = true">
    <AddJaiba />
  </fab-button>

  <!-- otro botón -->
  <fab-button @click="customModalOpen = true" position="bottom-left">
    <button-gamba />
  </fab-button>
</template>

<script lang="ts" setup>
import CustomModal from '@/modules/common/components/CustomModal.vue';
import FabButton from '@/modules/common/components/FabButton.vue';
import InputModal from '@/modules/common/components/InputModal.vue';
import AddJaiba from '@/modules/common/icons/AddJaiba.vue';
import ButtonGamba from '@/modules/common/icons/ButtonGamba.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../store/projects.store';

const modalOpen = ref(false);
const customModalOpen = ref(false);
const projectsStore = useProjectsStore();
</script>
