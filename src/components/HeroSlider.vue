<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  slideParagraph: {
    type: String,
    required: true
  }
  //TODO: add dynamic properties using v-bind for title and excerpt for each slide 
  //this is the reference material: https://vuejs.org/guide/components/props.html#prop-passing-details
})
</script>
<template>
  <div class="header-banner">
    <div class="hero-slider" id="slider" aria-label="Gallery">
      <ol class="hero-slider__viewport">
        <li id="hero-slider__slide1" tabindex="0" class="hero-slider__slide">
          <div class="title-wrapper">
            <h1 class="hero-title white">
              Lorem ipsum dolor sit amet consecteteur adipiscing elit.
            </h1>
            <p class="white">
              Nunc rutrum in arcu eget viverra. Donec aliquet eros id purus gravida, ut convallis leo rutrum. 
              Aenean non ipsum at ligula vestibulum pharetra. Integer vel scelerisque purus. Donec placerat 
              lacinia sagittis.
            </p>
          </div>
          <div class="hero-slider__snapper">
            <!-- <img src="/src/assets/images/hero-slider/hills-landscape.webp" alt="Logotel - Hills Landscape Banner Image"> -->
            <a href="#hero-slider__slide4" class="hero-slider__prev">
              <img src="src/assets/images/icons/chevron-sx.svg" class="hero-slider__chevron hero-slider__chevron-dx" alt="Freccia Navigazione Destra">
            </a>
            <a href="#hero-slider__slide2" class="hero-slider__next">
              <img src="src/assets/images/icons/chevron-dx.svg" class="hero-slider__chevron hero-slider__chevron-x" alt="Freccia Navigazione Sinistra">
            </a>
          </div>
        </li>
        <li id="hero-slider__slide2" tabindex="0" class="hero-slider__slide">
          <div class="title-wrapper">
            <h1 class="hero-title white">
              Lorem ipsum dolor sit amet consecteteur adipiscing elit.
            </h1>
            <p class="white">
              Nunc rutrum in arcu eget viverra. Donec aliquet eros id purus gravida, ut convallis leo rutrum. 
              Aenean non ipsum at ligula vestibulum pharetra. Integer vel scelerisque purus. Donec placerat 
              lacinia sagittis.
            </p>
          </div>
          <div class="hero-slider__snapper">
            <!-- <img src="/src/assets/images/hero-slider/mountains-sunset.webp" alt="Logotel - Mountains at Sunset Banner Image"> -->
            <a href="#hero-slider__slide1" class="hero-slider__prev">
              <img src="src/assets/images/icons/chevron-sx.svg" class="hero-slider__chevron hero-slider__chevron-dx" alt="Freccia Navigazione Destra">
            </a>
            <a href="#hero-slider__slide3" class="hero-slider__next">
              <img src="src/assets/images/icons/chevron-dx.svg" class="hero-slider__chevron hero-slider__chevron-x" alt="Freccia Navigazione Sinistra">
            </a>
          </div>
          
        </li>
        <li id="hero-slider__slide3" tabindex="0" class="hero-slider__slide">
          <div class="title-wrapper">
            <h1 class="hero-title white">
              Lorem ipsum dolor sit amet consecteteur adipiscing elit.
            </h1>
            <p class="white">
              Nunc rutrum in arcu eget viverra. Donec aliquet eros id purus gravida, ut convallis leo rutrum. 
              Aenean non ipsum at ligula vestibulum pharetra. Integer vel scelerisque purus. Donec placerat 
              lacinia sagittis.
            </p>
          </div>
          <div class="hero-slider__snapper">
            <!-- <img src="/src/assets/images/hero-slider/ocean-waves.webp" alt="Logotel - Ocean Waves Banner Image"> -->
            <a href="#hero-slider__slide2" class="hero-slider__prev">
              <img src="src/assets/images/icons/chevron-sx.svg" class="hero-slider__chevron hero-slider__chevron-dx" alt="Freccia Navigazione Destra">
            </a>
            <a href="#hero-slider__slide4" class="hero-slider__next">
              <img src="src/assets/images/icons/chevron-dx.svg" class="hero-slider__chevron hero-slider__chevron-x" alt="Freccia Navigazione Sinistra">
            </a>
          </div>
        </li>
        <li id="hero-slider__slide4" tabindex="0" class="hero-slider__slide">
          <div class="title-wrapper">
            <h1 class="hero-title white">
              Lorem ipsum dolor sit amet consecteteur adipiscing elit.
            </h1>
            <p class="white">
              Nunc rutrum in arcu eget viverra. Donec aliquet eros id purus gravida, ut convallis leo rutrum. 
              Aenean non ipsum at ligula vestibulum pharetra. Integer vel scelerisque purus. Donec placerat 
              lacinia sagittis.
            </p>
          </div>
          <div class="hero-slider__snapper">
            <!-- <img src="/src/assets/images/hero-slider/cloudy-woods.webp" alt="Logotel - Trees Wrapped in Clouds Banner Image"> -->
            <a href="#hero-slider__slide3" class="hero-slider__prev">
              <img src="src/assets/images/icons/chevron-sx.svg" class="hero-slider__chevron hero-slider__chevron-dx" alt="Freccia Navigazione Destra">
            </a>
            <a href="#hero-slider__slide1" class="hero-slider__next">
              <img src="src/assets/images/icons/chevron-dx.svg" class="hero-slider__chevron hero-slider__chevron-x" alt="Freccia Navigazione Sinistra">
            </a>
          </div>
        </li>
      </ol>
      <aside class="hero-slider__navigation">
        <ol class="hero-slider__navigation-list">
          <li class="hero-slider__navigation-item">
            <a href="#hero-slider__slide1" class="hero-slider__navigation-button">1</a>
          </li>
          <li class="hero-slider__navigation-item">
            <a href="#hero-slider__slide2" class="hero-slider__navigation-button">2</a>
          </li>
          <li class="hero-slider__navigation-item">
            <a href="#hero-slider__slide3" class="hero-slider__navigation-button">3</a>
          </li>
          <li class="hero-slider__navigation-item">
            <a href="#hero-slider__slide4" class="hero-slider__navigation-button">4</a>
          </li>
        </ol>
      </aside>
    </div>
  </div>
</template>

