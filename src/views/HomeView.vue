<script setup>
import Navigation from '../components/Navigation.vue'
import HeroSlider from '../components/HeroSlider.vue'
import FlipCards from '../components/FlipCards.vue'
import TitleSectionRight from '../components/TitleSectionRight.vue'
import AccordionSection from '../components/AccordionSection.vue'
import HoverCards from '../components/HoverCards.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main>
    <Navigation />
    <HeroSlider />
    <div class="container">
      <FlipCards />
    </div>
      <AccordionSection />
    <HoverCards />
    <Footer />
  </main>
</template>


