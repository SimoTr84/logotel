<script setup>
import TitleSectionLeft from '../components/TitleSectionLeft.vue'

</script>
<template>
  <TitleSectionLeft />
  <div class="hover-cards__wrapper">
      <div class="hover-cards__container container">
        <div class="hover-card pink">
          <div class="hover-card__content">
            <h5 class="hover-card__title">
              Tab Rosa
            </h5>
            <div class="hover-card__divider"></div>
            <div class="hover-card__img-wrapper">
              <div class="hover-card__icon-bg"></div>
              <img src="src/assets/images/icons/icona-sveglia.svg" alt="Logotel - Icona Sveglia">
            </div>
            <p class="hover-card__paragraph">
              Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
              aliquam erat volutpat. Ut wisi enim ad minim…
            </p>
            <a class="btn hover-card__btn">Call to action</a>
          </div>
        </div>
        <div class="hover-card yellow">
          <div class="hover-card__content">
            <h5 class="hover-card__title">
              Tab Gialla
            </h5>
            <div class="hover-card__divider"></div>
            <div class="hover-card__img-wrapper">
              <div class="hover-card__icon-bg"></div>
              <img src="src/assets/images/icons/icona-target.svg" alt="Logotel - Icona Target">
            </div>
            <p class="hover-card__paragraph">
              Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
              aliquam erat volutpat. Ut wisi enim ad minim…
            </p>
            <a class="btn hover-card__btn">Call to action</a>
          </div>
        </div>
        <div class="hover-card teal">
          <div class="hover-card__content">
            <h5 class="hover-card__title">
              Tab Turchese
            </h5>
            <div class="hover-card__divider"></div>
            <div class="hover-card__img-wrapper">
              <div class="hover-card__icon-bg"></div>
              <img src="src/assets/images/icons/icona-razzo.svg" alt="Logotel - Icona Razzo">
            </div>
            <p class="hover-card__paragraph">
              Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
              aliquam erat volutpat. Ut wisi enim ad minim…
            </p>
            <a class="btn hover-card__btn">Call to action</a>
          </div>
        </div>
      </div>
  </div>
</template>