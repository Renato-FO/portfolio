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
  {
    displayName: 'Contact',
    path: '/contact',
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
  <div
    class="w-full px-64 bg-black pt-20 mx-auto flex items-center justify-center"
  >
    <div
      class="text-xl mx-auto text-white hover:opacity-60"
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
