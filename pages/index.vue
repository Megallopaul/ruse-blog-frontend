<template>
  <div>
    <h1>Bienvenue sur le blog de Ruse</h1>
    <div>Total de posts : {{ metadata.pagination.total }}</div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="{ path: `/posts/${ post.attributes.slug }` }">{{ post.attributes.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { blogRepository } from "@/repositories"

export default {
  name: 'IndexPage',
  async asyncData() {
    const { data, meta } = await blogRepository.listPosts()
    return { posts: data, metadata: meta }
  }
}
</script>
