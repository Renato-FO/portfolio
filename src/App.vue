<script setup lang="ts"></script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
  color: #fff;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

body,
input,
textarea,
button,
select {
  font: 500 1rem Montserrat, sans-serif;
}
</style>
