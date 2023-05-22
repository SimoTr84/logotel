<script setup>
import Navigation from '../components/Navigation.vue'
import HeroSlider from '../components/HeroSlider.vue'
import FlipCards from '../components/FlipCards.vue'
import TitleSection from '../components/TitleSection.vue'
import HoverCards from '../components/HoverCards.vue'
</script>

<template>
  <main>
    <Navigation />
    <HeroSlider />
    <div class="container">
      <FlipCards />
    </div>
    <TitleSection />
    <HoverCards />
  </main>
</template>


