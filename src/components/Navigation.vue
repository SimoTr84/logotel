<template>
  <section class="top-nav" id="top-nav">
    <div class="nav__logo">
      <img src="/src/assets/images/logos/logo-bianco.svg" class="nav__logo" alt="Logotel Logo Ufficiale">
    </div>
    <input id="menu__toggle" type="checkbox" />
    <label class='menu__button-container' for="menu__toggle">
      <div class='menu__button'></div>
    </label>
    <ul class="menu">
      <li>
        <a href="#" class="js-nav-item" data-target="slider">Slider</a>
      </li>
      <li>
        <a href="#" class="js-nav-item" data-target="news">News</a>
      </li>
      <li>
        <a href="#" class="js-nav-item" data-target="percorso">Percorso</a>
      </li>
      <li>
        <a href="#" class="js-nav-item" data-target="tab">Tab</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  methods: {
    // scrollToSection(event) {
    //   let navItem = event.target;
    //   let navHeight = document.getElementById("nav").clientHeight;
    //   let targetURL = event.target.href;
    //   console.log(1, event.target);
    //   console.log(2, navHeight);
    //   console.log(3, targetURL);


    //   navItem.addEventListener("click", function() {
    //     window.scrollTo({
    //       behavior: "smooth",
    //       top: event.target - navHeight
    //     })
    //     console.log(4, navItem);
    //     console.log(5, navHeight);
    //   })

    // },
  }
}
</script>