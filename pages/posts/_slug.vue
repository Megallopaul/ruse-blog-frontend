<template>
  <div>
    <NuxtLink to="/">
      <button>
        Home
      </button>
    </NuxtLink>
    <h1>{{ post.attributes.title }}</h1>
    <p>{{ post.attributes.content }}</p>
  </div>
</template>

<script>
import { blogRepository } from "@/repositories";

export default {
  name: 'PostPage',
  async asyncData({ route }) {
    const post = await blogRepository.getPostFromSlug(route.params.slug)
    return { post }
  }
}
</script>
