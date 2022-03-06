<script setup lang="ts">
import Svg from '@/components/svg/index.vue';
import { onMounted } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import { ref } from 'vue';

const CarouselItems = [
  { name: 'Css', isSelected: false },
  { name: 'Html', isSelected: false },
  { name: 'Javascript', isSelected: false },
  { name: 'Nestjs', isSelected: false },
  { name: 'Nodejs', isSelected: false },
  { name: 'React', isSelected: false },
  { name: 'Typescript', isSelected: false },
  { name: 'Vuejs', isSelected: false },
];

const isMoving = ref(false);

function moveLeft() {
  isMoving.value = true;
  let moveCarousel = carousel.value;
  moveCarousel.style.marginLeft = '100%';
}

function moveRight() {
  isMoving.value = true;
  let moveCarousel = carousel.value;
  moveCarousel.style.marginLeft = '-100%';
}

const carousel = ref(null);
</script>

<script lang="ts">
export default {
  name: 'Carousel',
};
</script>

<template>
  <div class="flex">
    <button @click="moveLeft" class="flex ml-auto justify-center items-center">
      <ChevronLeftIcon class="w-12 h-12 text-white" />
    </button>
    <div
      class="flex justify-center items-center space-x-16 overflow-x-hidden w-1/2 m-auto h-72"
    >
      <div
        ref="carousel"
        class="flex px-10 gap-20 carouselItems"
        :class="isMoving ? '' : 'carousel'"
      >
        <div
          class="ease-in duration-300 hover:scale-125 block"
          v-for="(icon, index) in CarouselItems"
          :key="index"
        >
          <Svg
            :name="icon.name"
            class=""
            :size="icon.isSelected ? '150' : '110'"
          />
          <p class="mt-4 text-xl">{{ icon.name }}</p>
        </div>
      </div>
    </div>

    <button @click="moveRight" class="flex mr-auto justify-center items-center">
      <ChevronRightIcon class="w-12 h-12 text-white" />
    </button>
  </div>
</template>

<style>
.carousel {
  animation: 20s ease-in 0.5s infinite reverse both running slidein;
}

.carouselItems {
  margin-left: 0;
  transition-duration: 2s;
}

@keyframes slidein {
  0% {
    margin-left: 100%;
  }
  50% {
    margin-left: -100%;
  }
  100% {
    margin-left: 100%;
  }
}
</style>
