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
})
</script>
<template>
  <div class="header-banner">
    <div class="carousel" aria-label="Gallery">
      <ol class="carousel__viewport">
        <li id="carousel__slide1" tabindex="0" class="carousel__slide">
          <div class="title-wrapper">
            <h1 class="hero-title">
              Lorem ipsum dolor sit amet consectetur adipiscing elit in id.
            </h1>
            <p>
              Nunc rutrum in arcu eget viverra. Donec aliquet eros id purus gravida, ut convallis leo rutrum. 
              Aenean non ipsum at ligula vestibulum pharetra. Integer vel scelerisque purus. Donec placerat 
              lacinia sagittis. Cras gravida tristique mi, tincidunt dapibus neque ultrices finibus.
            </p>
          </div>
          <div class="carousel__snapper">
            <img src="/src/assets/images/carousel/hills-landscape.webp" alt="Logotel - Hills Landscape Banner Image">
            <a href="#carousel__slide4" class="carousel__prev">Go to last slide</a>
            <a href="#carousel__slide2" class="carousel__next">Go to next slide</a>
          </div>
        </li>
        <li id="carousel__slide2" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <img src="/src/assets/images/carousel/mountains-sunset.webp" alt="Logotel - Mountains at Sunset Banner Image">
          </div>
          <a href="#carousel__slide1" class="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide3" class="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide3" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper">
            <img src="/src/assets/images/carousel/ocean-waves.webp" alt="Logotel - Ocean Waves Image">
          </div>
          <a href="#carousel__slide2" class="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide4" class="carousel__next">Go to next slide</a>
        </li>
        <li id="carousel__slide4" tabindex="0" class="carousel__slide">
          <div class="carousel__snapper"></div>
          <a href="#carousel__slide3" class="carousel__prev">Go to previous slide</a>
          <a href="#carousel__slide1" class="carousel__next">Go to first slide</a>
        </li>
      </ol>
      <aside class="carousel__navigation">
        <ol class="carousel__navigation-list">
          <li class="carousel__navigation-item">
            <a href="#carousel__slide1" class="carousel__navigation-button">Go to slide 1</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide2" class="carousel__navigation-button">Go to slide 2</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide3" class="carousel__navigation-button">Go to slide 3</a>
          </li>
          <li class="carousel__navigation-item">
            <a href="#carousel__slide4" class="carousel__navigation-button">Go to slide 4</a>
          </li>
        </ol>
      </aside>
    </div>
  </div>
</template>

