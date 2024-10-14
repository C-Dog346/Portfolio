<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import links from '@/assets/data/links/NavLinks.json';
</script>

<template>
  <header>
    <NavBar :links="links" />
  </header>
  <main>
    <RouterView />
  </main>
</template>