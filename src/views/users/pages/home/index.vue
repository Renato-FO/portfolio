<template>
  <div
    class="w-full bg-black block items-center text-center h-full justify-center"
  >
    <div class="w-full items-center my-52 flex justify-center text-left">
      <div class="text-7xl flex my-auto uppercase text-center">
        <div class="dynamicTexts">
          <span class="textAnimated">Ready to code...</span>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <h1 class="text-white text-4xl">Stacks</h1>
      <Carousel />
    </div>
    <div class="mt-16">
      <h1 class="text-white text-4xl">Sobre mim</h1>
      <div class="grid grid-cols-2">
        <div></div>
        <div>
          <p>Sou desenvolvedor fullStack</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'About',
};
</script>

<script setup lang="ts">
import planet from '@/assets/images/triangle3d.gif';
import Carousel from '@/components/carousel.vue';
import Svg from '@/components/svg/index.vue';
import { onMounted } from '@vue/runtime-core';

onMounted(() => console.log(Svg));
</script>

<style>
.dynamicTexts span {
  position: relative;
}
.dynamicTexts span::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  border-left: 2px solid white;
  background: black;
  left: 0;
  animation: typing 3.5s steps(30) infinite;
}

.textAnimated {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@keyframes typing {
  100% {
    left: 100%;
  }
}
</style>
