<template>
  <div class="post-wrapper">
    <div class="post" itemscope itemtype="https://schema.org/Article">
      <h1 class="post-title" itemprop="name">{{ post.attributes.title }}</h1>
      <div class="post-publication-date" itemprop="datePublished">{{ publicationDate }}</div>
      <div v-html="contentAsHtml" class="post-content" itemprop="articleBody"></div>
    </div>
  </div>
</template>
<script>
import MarkdownIt from 'markdown-it'
import { blogRepository } from '@/repositories';

export default {
  name: 'PostPage',
  async asyncData({ route }) {
    const post = await blogRepository.getPostFromSlug(route.params.slug)
    return { post }
  },
  computed: {
    contentAsHtml() {
      const converter = new MarkdownIt({ html: true, linkify: true })
      return converter.render(this.post.attributes.content)
    },
    publicationDate() {
      return new Date(this.post.attributes.publishedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}
</script>
<style lang="scss" scoped>
.post-wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;

  @media (min-width: $x-large-screen) {
    grid-template-columns: 1fr 3fr 1fr;
  }

  @media (min-width: $xx-large-screen) {
    grid-template-columns: 1fr 2fr 1fr;
  }
}

.post {
  grid-column: 1 / 4;
  text-size-adjust: 100%;

  @media (min-width: $large-screen) {
    grid-column: 2 / 3;
  }
}

.post-title {
  @include title;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.post-publication-date {
  font-size: 0.9em;
  margin-bottom: 1rem;
}

.post-content {
  ::v-deep {
    p {
      line-height: 1.6em;
      margin: 1.5em 0;
    }

    a {
      text-decoration-color: $pumpkin-orange;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;

      &:visited {
        color: inherit;
      }
    }

    img {
      max-width: 100%;
    }

    ol {
      li::marker {
        color: $pumpkin-orange;
        font-family: $primary-font;
      }
    }

    ul {
      list-style: url("static/dot.svg");
    }
  }
}
</style>
