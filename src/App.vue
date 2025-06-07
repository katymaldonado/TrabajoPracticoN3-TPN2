<script setup>
import Navegador from './components/Navegador.vue';
import { RouterView } from 'vue-router';


</script>

<template>
  <header>
    <Navegador></Navegador>
  </header>

  <main>
    <RouterView></RouterView>
  </main>
  
  <footer></footer>
</template>

<style scoped>


</style>
