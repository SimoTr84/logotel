<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeroSlider from './components/HeroSlider.vue'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />

  <RouterView />
</template>
