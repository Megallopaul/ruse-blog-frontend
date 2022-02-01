import axios from "axios"

const loginData = {
  identifier: process.env.STRAPI_AUTH_ID,
  password: process.env.STRAPI_AUTH_PASSWORD
}

export default class strapiRepository {
  constructor(client = axios) {
    this.client = client
    this.posts = []
  }

  async authenticate() {
    const { data } = await this.client.post('/api/auth/local', loginData)
    this.token = data.jwt
  }

  async listPosts() {
    if (!this.token) {
      await this.authenticate()
    }
    const { data } = await this.client.get('https://ruse-blog.herokuapp.com/api/posts', {
      headers: {
        Authorization:
          `Bearer ${this.token}`
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
