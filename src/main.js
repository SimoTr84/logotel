import './assets/main.css'
import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Custom scripts added here

// HANDLE THE SCOLL ANIMATION FOR MAIN NAVIGATION
window.onscroll = function () {
  let navBar = document.getElementById('top-nav');
  console.log(navBar);
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
};

document.addEventListener('click', function (event) {
  if (!event.target.matches('.js-nav-item')) return;
  event.preventDefault();

  let element = document.getElementById(event.target.dataset.target);
  let navHeight = document.getElementById('top-nav').clientHeight;
  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
  
})

// HANDLE THE SLIDER NAVIGATION BUTTONS
// add datasets to each slide item and on click of either prev or next, read the target slide
// once target slide is defined then animate the corresponding button number


//