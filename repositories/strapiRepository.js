import axios from "axios"

export default class strapiRepository {
  constructor(client = axios) {
    this.client = client
    this.posts = []
  }

  async getAuthor(id) {
    const { data } = await this.client.get(`${process.env.STRAPI_URL}/authors/${id}`, {
      params: { populate: '*' }
    })
    return data
  }

  async listArticles() {
    const { data } = await this.client.get(`${process.env.STRAPI_URL}/articles`, {
      params: { populate: '*' }
    })
    this.posts = data
    return this.posts
  }

  async getArticle(slug) {
    const { data: article } = await this.client.get(`${process.env.STRAPI_URL}/articles`, {
      params: {
        'filters[slug][$eq]': slug,
        populate: '*'
      }
    })
    return article.data[0]
  }

  async getArticleFromSlug(slug) {
    if (this.posts.length < 1) {
      await this.listArticles()
    }
    return this.posts.data.find(post => post.attributes.slug === slug)
  }
}
