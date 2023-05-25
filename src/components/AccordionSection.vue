<script setup>
import TitleSectionRight from '../components/TitleSectionRight.vue';
</script>

<template>
  <div class="percorso" id="percorso">
    <TitleSectionRight />
    <div class="accordion__section" id="percorso">
      <div id="accordion-1" class="accordion accordion__left" data-id="1">
        <div class="accordion__btn" @click="toggleAccordion($event)">
          <div class="accordion__btn-inner">
            <div class="accordion__btn-title">
              <h1 class="teal right-align">1.</h1>
              <h3 class="teal right-align">Lorem Ipsum</h3>
            </div>
            <div class="accordion__btn-icon teal">
              <img src="src/assets/images/icons/icon-wand.svg" alt="Logotel - Icona Bacchetta">
            </div>
          </div>
        </div>
        <div class="accordion__content">
          <div class="accordion__content-inner">
            <h3 class="teal">Lorem Ipsum</h3>
            <p class="white">Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci 
              tati on ullamcorper.
            </p>
            <p class="white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.
            </p>
          </div>
        </div>
      </div>
      <div id="accordion-2" class="accordion accordion__right" data-id="2">
        <div class="accordion__btn" @click="toggleAccordion($event)">
          <div class="accordion__btn-inner">
            <div class="accordion__btn-title">
              <h1 class="yellow right-align">2.</h1>
              <h3 class="yellow right-align">Lorem Ipsum</h3>
            </div>
            <div class="accordion__btn-icon yellow">
              <img src="src/assets/images/icons/icon-bell.svg" alt="Logotel - Icona Campanella">
            </div>
          </div>
        </div>
        <div class="accordion__content">
          <div class="accordion__content-inner">
            <h3 class="yellow">Lorem Ipsum</h3>
            <p class="white">Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci 
              tati on ullamcorper.
            </p>
            <p class="white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun. 
            </p>
          </div>
        </div>
      </div>
      <div id="accordion-3" class="accordion accordion__left" data-id="3">
        <div class="accordion__btn" @click="toggleAccordion($event)">
          <div class="accordion__btn-inner">
            <div class="accordion__btn-title">
              <h1 class="pink right-align">3.</h1>
              <h3 class="pink right-align">Lorem Ipsum</h3>
            </div>
            <div class="accordion__btn-icon pink">
              <img src="src/assets/images/icons/icon-lock.svg" alt="Logotel - Icona Lucchetto">
            </div>
          </div>
        </div>
        <div class="accordion__content">
          <div class="accordion__content-inner">
            <h3 class="pink">Lorem Ipsum</h3>
            <p class="white">Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci 
              tati on ullamcorper.
            </p>
            <p class="white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.
            </p>
          </div>
        </div>
      </div>
      <div id="accordion-4" class="accordion accordion__right" data-id="4">
        <div class="accordion__btn" @click="toggleAccordion($event)">
          <div class="accordion__btn-inner">
            <div class="accordion__btn-title">
              <h1 class="teal right-align">4.</h1>
              <h3 class="teal right-align">Lorem Ipsum</h3>
            </div>
            <div class="accordion__btn-icon teal">
              <img src="src/assets/images/icons/icon-like.svg" alt="Logotel - Icona Like">
            </div>
          </div>
        </div>
        <div class="accordion__content">
          <div class="accordion__content-inner">
            <h3 class="teal">Lorem Ipsum</h3>
            <p class="white">Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci 
              tati on ullamcorper.
            </p>
            <p class="white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun. 
            </p>
          </div>
        </div>
      </div>
      <div id="accordion-5" class="accordion accordion__left" data-id="5">
        <div class="accordion__btn" @click="toggleAccordion($event)">
          <div class="accordion__btn-inner">
            <div class="accordion__btn-title">
              <h1 class="yellow right-align">5.</h1>
              <h3 class="yellow right-align">Lorem Ipsum</h3>
            </div>
            <div class="accordion__btn-icon yellow">
              <img src="src/assets/images/icons/icon-tools.svg" alt="Logotel - Icona Attrezzi">
            </div>
          </div>
        </div>
        <div class="accordion__content">
          <div class="accordion__content-inner">
            <h3 class="yellow">Lorem Ipsum</h3>
            <p class="white">Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci 
              tati on ullamcorper.
            </p>
            <p class="white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.
            </p>
          </div>
        </div>
      </div>
      <div id="accordion-6" class="accordion accordion__right" data-id="6">
        <div class="accordion__btn" @click="toggleAccordion($event)">
          <div class="accordion__btn-inner">
            <div class="accordion__btn-title">
              <h1 class="pink right-align">6.</h1>
              <h3 class="pink right-align">Lorem Ipsum</h3>
            </div>
            <div class="accordion__btn-icon pink">
              <img src="src/assets/images/icons/icon-heart.svg" alt="Logotel - Icona Cuore">
            </div>
          </div>
        </div>
        <div class="accordion__content">
          <div class="accordion__content-inner">
            <h3 class="pink">Lorem Ipsum</h3>
            <p class="white">Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci 
              tati on ullamcorper.
            </p>
            <p class="white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleAccordion(event) {
      // console.log(event);
      let parentButton = event.target.closest('.accordion__btn');
      let parentAccordion = event.target.closest('.accordion');
      parentAccordion.classList.toggle('active');
      parentButton.classList.toggle('active');

      let $accordions = document.getElementsByClassName('accordion');
      let $buttons = document.getElementsByClassName('accordion__btn');

      for (let accordion of $accordions) {
        if (parentAccordion !== accordion) {
          if (accordion.classList.contains('active')) {
            accordion.classList.remove('active');
          }
          // if (parentButton.classList.contains('active')) {
          //   parentButton
          // }
        }
      }

      for (let button of $buttons) {
        if (parentButton !== button) {
          if (button.classList.contains('active')) {
            button.classList.remove('active');
            console.log('button deactivated');
          }
        }
      }
    }
  }
}
</script>