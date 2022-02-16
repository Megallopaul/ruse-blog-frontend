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

  async listPosts() {
    const { data } = await this.client.get('/articles', {
      params: {
        populate: '*'
      }
    })
    this.posts = data
    return this.posts
  }

  async getPostFromSlug(slug) {
    if (this.posts.length < 1) {
      await this.listPosts()
    }
    return this.posts.data.find(post => post.attributes.slug === slug)
  }
}
