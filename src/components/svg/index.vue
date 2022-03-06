<template>
  <component :is="name" v-bind="$props" />
</template>

<script lang="ts">
export default {
  name: 'Svg',
};
</script>

<script setup lang="ts">
import Css from '@/components/svg/css3.vue';
import Html from '@/components/svg/html5.vue';
import Javascript from '@/components/svg/javascript.vue';
import Nestjs from '@/components/svg/nestjs.vue';
import Nodejs from '@/components/svg/nodejs.vue';
import React from '@/components/svg/react.vue';
import Typescript from '@/components/svg/typescript.vue';
import Vuejs from '@/components/svg/vue.vue';

const COMPONENTS = {
  Css,
  Html,
  Javascript,
  Nestjs,
  Nodejs,
  React,
  Typescript,
  Vuejs,
};
const props = defineProps<{
  name: string;
}>();

const name = COMPONENTS[props.name];
</script>
