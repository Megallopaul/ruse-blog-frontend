<template>
  <div class="article-preview-list">
    <section class="main-article">
      <nuxt-link :to="{ name: 'articles-slug', params: { slug: lastPublishedArticle.attributes.slug } }">
        <article class="main article-preview" :style="{ backgroundImage: `linear-gradient(transparent 0%, rgb(0, 0, 0, 0.7) 100%), url(${lastPublishedArticle.attributes.preview_image.data.attributes.url})` }">
          <div class="article-informations">
            <header class="title">{{ lastPublishedArticle.attributes.title }}</header>
            <time class="publication-date" :datetime="lastPublishedArticle.attributes.updatedAt">{{ lastPublishedArticle.attributes.updatedAt | publicationDate }}</time>
          </div>
        </article>
      </nuxt-link>
    </section>
    <section class="remaining-articles">
      <nuxt-link v-for="article in remainingArticles" :key="article.id" :to="{ name: 'articles-slug', params: { slug: article.attributes.slug } }">
        <article class="article-preview" :style="{ backgroundImage: `linear-gradient(transparent 0%, rgb(0, 0, 0, 0.7) 100%), url(${article.attributes.preview_image.data.attributes.formats.small.url})` }">
          <div class="article-informations">
            <header class="title">{{ article.attributes.title }}</header>
            <time class="publication-date" :datetime="article.attributes.updatedAt">{{ article.attributes.updatedAt | publicationDate }}</time>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>
<script>
import { blogRepository } from "@/repositories"

export default {
  name: 'IndexPage',
  head() {
    return { titleTemplate: null }
  },
  async asyncData() {
    const { data, meta } = await blogRepository.listArticles()
    return { articles: data, metadata: meta }
  },
  computed: {
    articlesSortedByPublicationDate() {
      return this.articles
        .sort((article1, article2) => new Date(article1.attributes.publishedAt) - new Date(article2.attributes.publishedAt))
        .reverse()
    },
    lastPublishedArticle() {
      return this.articlesSortedByPublicationDate[0]
    },
    remainingArticles() {
      return this.articlesSortedByPublicationDate.slice(1)
    }
  },
  filters: {
    publicationDate(date) {
      return new Date(date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  @include title;
}
.article-preview-list {
  padding: 0 1rem;

  @media (min-width: $medium-screen) {
    padding: 0;
  }
}
.remaining-articles {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (min-width: $medium-screen) {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
.article-preview {
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    .title {
      margin-bottom: 1em;
      transition: all 0.2s ease-in-out;
    }
  }

  .title {
    font-family: $primary-font;
    font-size: 1.2em;
    line-height: 1.3em;
    margin-bottom: 0.5em;
    transition: all 0.2s ease-in-out;
  }

  .publication-date {
    font-size: 0.9em;
  }

  &.main {
    height: 250px;

    .title {
      font-size: 1.2em;
    }

    @media (min-width: $medium-screen) {
      height: 400px;

      .title {
        font-size: 1.8em;
      }
    }
  }
}
.article-informations {
  color: white;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  z-index: 2;
}
</style>
