<template>
  <div class="news" id="news">
    <div class="flip-cards__container">
      <div class="flip-card" v-for="article in articles" :key="article.id">
        <div class="flip-card__overlay">
          <p class="flip-card__overlay-date">
            {{ article.date }}
          </p>
          <h5 class="flip-card__overlay-title">
            {{ article.titleOverlay }}
          </h5>
          <p class="flip-card__overlay-paragraph">
            {{ article.body }}
          </p>
        </div>
        <img :src="`src/assets/images/portraits/${article.image}`" :alt="`${article.imageAlt}`">
        <div class="flip-card__content">
          <p class="flip-card__date">
            {{ article.date }}
          </p>
          <h5 class="flip-card__title">
            {{ article.title }}
          </h5>
          <p class="flip-card__paragraph">
            {{ article.excerpt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleData from '../assets/data/news.json'

export default {
  data() {
    return {
      articles: articleData
    };
  },

  methods: {
    cutArticleCopy(article)  {
      // this function is working behind the scenes but I wasn't able to inject the value of the 'text' variable into the template.
      let paragraphs = document.getElementsByClassName("flip-card__paragraph");
      for (let paragraph of paragraphs) {
        let text = paragraph.innerHTML;
        if (text.length > 75 ) {
          text = text.substring(0, 75) + "...";
        }
      }
    }
  },

  mounted() {
    this.cutArticleCopy();
  }
};
</script>