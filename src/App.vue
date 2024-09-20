<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <main>
    <RouterView />
  </main>
</template>