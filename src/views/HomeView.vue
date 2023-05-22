<script setup>
import Navigation from '../components/Navigation.vue'
import HeroSlider from '../components/HeroSlider.vue'
import FlipCards from '../components/FlipCards.vue'
import SectionTitle from '../components/SectionTitle.vue'
import HoverCards from '../components/HoverCards.vue'
</script>

<template>
  <main>
    <Navigation />
    <HeroSlider />
    <div class="container">
      <FlipCards />
    </div>
    <SectionTitle />
    <div class="container">
      <HoverCards />
    </div>
  </main>
</template>


