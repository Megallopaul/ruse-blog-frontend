<template>
  <div>
    <h1>Bienvenue sur le blog de Ruse</h1>
    <p>Site en construction :)</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="{ name: 'article', params: { article } }">{{ article.attributes.Title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: []
    }
  },
  async fetch() {
    const { data } = await this.$axios.$get('https://ruse-blog.herokuapp.com/api/articles', {
      headers: {
        Authorization:
          'Bearer 5a7f16e06962bc7e40c74a0c9f19ad1e7f51bade815f3941006c5a5c80c2250ffa4f71c082d2e493ef8b4d91cbdbaa4f7896de70213612d9c3f040aadf34bab7ad309f0861c5e93a4cad09c80c1fbf424fa7cdb7445ccc78fb14c1631a1d4c4684eccf697809d62fdc73d472bc46b6b0c0507906ef26f6b2f234c2a89122b0a3'
      }
    })
    this.articles = data
  }
}
</script>
