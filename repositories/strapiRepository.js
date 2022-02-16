import axios from "axios"

export default class strapiRepository {
  constructor(client = axios) {
    this.client = client
    this.posts = []
  }

  async getAuthor(id) {
    const { data } = await this.client.get(`/authors/${id}`, {
      params: {
        populate: '*'
      }
    })
    return data
  }

  async listArticles() {
    const { data } = await this.client.get('/articles', {
      params: {
        populate: '*'
      }
    })
    this.posts = data
    return this.posts
  }

  async getArticleFromSlug(slug) {
    if (this.posts.length < 1) {
      await this.listArticles()
    }
    return this.posts.data.find(post => post.attributes.slug === slug)
  }
}
