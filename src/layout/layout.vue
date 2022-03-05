<script setup lang="ts">
import Topbar from '@/layout/default/topbar.vue';
</script>

<script lang="ts">
export default {
  name: 'Layout',
};
</script>

<template>
  <main class="h-screen block bg-black overflow-hidden absolute w-screen">
    <Topbar />
    <router-view />
  </main>
</template>
