<script setup lang="ts">
import Topbar from '@/layout/default/topbar.vue';
</script>

<script lang="ts">
export default {
  name: 'Layout',
};
</script>

<template>
  <main class="h-full w-full block overflow-y-scroll overflow-x-hidden">
    <Topbar />
    <router-view />
  </main>
</template>
