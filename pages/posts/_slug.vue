<template>
  <div class="post-wrapper">
    <div class="post" itemscope itemtype="https://schema.org/Article">
      <h1 class="post-title" itemprop="name">{{ post.attributes.title }}</h1>
      <time class="post-publication-date" :datetime="post.attributes.publishedAt" itemprop="datePublished">{{ publicationDate }}</time>
      <div v-html="contentAsHtml" class="post-content" itemprop="articleBody"></div>
      <footer class="article-author">
        <img class="profile-picture" :src="author.data.attributes.profilePicture.data.attributes.formats.thumbnail.url" :alt="author.data.attributes.profilePicture.data.attributes.alternativeText">
        <div>
          <span class="name">{{ author.data.attributes.name }}</span>
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
  name: 'PostPage',
  async asyncData({ route }) {
    const post = await blogRepository.getPostFromSlug(route.params.slug)
    const author = await blogRepository.getAuthor('1')
    return { author, post }
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
.post {
  text-size-adjust: 100%;
}

.post-title {
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

.post-publication-date {
  font-size: 0.9em;
  margin-bottom: 1rem;
}

.post-content {
  margin-bottom: 2.5rem;

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
