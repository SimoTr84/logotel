<template>
  <div class="footer" id="footer">
    <div class="footer__wrapper container">
      <div class="footer__col footer__col-left">
        <img src="src/assets/images/logos/logo-bianco.svg" class="footer__logo" alt="Logotel - Logo Bianco">
        <ul class="footer__nav">
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">Terms & conditions</a>
          </li>
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">Privacy policy</a>
          </li>
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">Cookies policy</a>
          </li>
          <li class="footer__nav-item">
            <a href="#" class="footer__nav-link">Copyrights Notification</a>
          </li>
        </ul>
        <p class="footer__copyright">
          Copyright © 2020 Logotel. All rights reserved.
        </p>
      </div>
      <div class="footer__col footer__col-right">
        <p>Seguici sui social:</p>
        <div class="footer__icons">
          <a href="#" class="footer__icon">
            <img src="src/assets/images/icons/icon-facebook.svg" alt="Logotel - Social Icon Facebook">
          </a>
          <a href="#" class="footer__icon">
            <img src="src/assets/images/icons/icon-twitter.svg" alt="Logotel - Social Icon Twitter">
          </a>
          <a href="#" class="footer__icon">
            <img src="src/assets/images/icons/icon-instagram.svg" alt="Logotel - Social Icon Instagram">
          </a>
          <a href="#" class="footer__icon">
            <img src="src/assets/images/icons/icon-linkedin.svg" alt="Logotel - Social Icon LinkedIn">
          </a>
          <a href="#" class="footer__icon">
            <img src="src/assets/images/icons/icon-youtube.svg" alt="Logotel - Social Icon YouTube">
          </a>
        </div>
      </div>
    </div>
  </div>
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