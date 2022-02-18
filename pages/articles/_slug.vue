<template>
  <div class="article-wrapper">
    <div class="article" itemscope itemtype="https://schema.org/Article">
      <h1 class="article-title" itemprop="name">{{ article.attributes.title }}</h1>
      <time class="article-publication-date" :datetime="article.attributes.updatedAt" itemprop="datePublished">{{ publicationDate }}</time>
      <img class="article-preview-image" :src="article.attributes.preview_image.data.attributes.url" alt="" />
      <div v-html="contentAsHtml" class="article-content" itemprop="articleBody"></div>
      <footer class="article-author">
        <img class="profile-picture" :src="author.data.attributes.profilePicture.data.attributes.formats.thumbnail.url" :alt="author.data.attributes.profilePicture.data.attributes.alternativeText">
        <div>
          <span class="name" itemprop="author">{{ author.data.attributes.name }}</span>
          <div class="description">{{ author.data.attributes.description }}</div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import MarkdownIt from 'markdown-it'
import { blogRepository } from '@/repositories';

export default {
  name: 'ArticlePage',
  head() {
    return {
      title: this.article.attributes.title,
      htmlAttrs: {
        lang: 'fr',
        amp: true
      },
    }
  },
  async asyncData({ route }) {
    const article = await blogRepository.getArticleFromSlug(route.params.slug)
    const author = await blogRepository.getAuthor('1')
    return { author, article }
  },
  computed: {
    contentAsHtml() {
      const converter = new MarkdownIt({ html: true, linkify: true })
      return converter.render(this.article.attributes.content)
    },
    publicationDate() {
      return new Date(this.article.attributes.updatedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
    }
  }
}
</script>
<style lang="scss" scoped>
.article {
  text-size-adjust: 100%;
}

.article-title {
  @include title;
  margin-top: 0;
  margin-bottom: 1.5rem;

  &:before, &:after {
    content: url("static/4-branch-star.svg");
    height: 24px;
  }

  &:before {
    margin-right: 0.5rem;
  }

  &:after {
    margin-left: 0.5rem;
  }
}

.article-publication-date {
  display: block;
  font-size: 0.9em;
  margin-bottom: 1.5rem;
}

.article-preview-image {
  border-radius: 10px;
  height: 450px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}

.article-content {
  margin-bottom: 2.5rem;

  ::v-deep {
    *::selection {
      background: lighten($pumpkin-orange,5%);
      color: white;
    }
    h1, h2, h3, h4, h5, h6 {
      @include title;
    }
    p {
      line-height: 1.6em;
      margin: 1.5em 0;
    }
    a {
      text-decoration-color: $pumpkin-orange;
      text-decoration-thickness: 1.5px;
      text-underline-offset: 3px;
      font-weight: 500;
      transition: all 0.2s;

      &:visited, &:link {
        color: inherit;
      }

      &:hover {
        color: $pumpkin-orange;
        transition: all 0.2s;
      }
    }
    img {
      max-width: 100%;
    }
    ol {
      li {
        padding-left: 0.5em;

        &::marker {
          color: $pumpkin-orange;
          font-family: $primary-font;
        }
      }
    }
    ul {
      list-style: url("static/dot.svg");

      li {
        padding-left: 0.2em;
      }
    }
    ol, ul {
      padding-left: 1em;
    }
  }
}
.article-author {
  align-items: center;
  background-color: #FDEFDD;
  border-radius: 8px;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;

  .profile-picture {
    border-radius: 50%;
    display: inline-block;
    margin-right: 1rem;
    height: 48px;
    width: 48px;
  }
  .name {
    font-weight: 500;
  }
  .description {
    font-size: 0.8em;
    line-height: 1.3em;
  }
}
</style>
