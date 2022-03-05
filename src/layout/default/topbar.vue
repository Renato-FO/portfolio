<script setup lang="ts">
import { ref } from 'vue';

const menu = ref([
  {
    displayName: 'Home',
    path: '/home',
  },
  {
    displayName: 'About',
    path: '/about',
  },
  {
    displayName: 'Projects',
    path: '/projects',
  },
]);

const count = ref(0);
</script>

<script lang="ts">
export default {
  name: 'Topbar',
};
</script>

<template>
  <div class="w-full h-12 flex items-center justify-center">
    <div
      class="text-xl mt-20 mx-auto text-white hover:opacity-60"
      v-for="item in menu"
      :key="item.id"
    >
      <router-link class="" :to="item.path">
        {{ item.displayName }}
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
