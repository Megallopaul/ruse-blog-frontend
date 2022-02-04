import axios from "axios"

export default class strapiRepository {
  constructor(client = axios) {
    this.client = client
    this.posts = []
  }

  async listPosts() {
    const { data } = await this.client.get('https://ruse-blog.herokuapp.com/api/posts')
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
