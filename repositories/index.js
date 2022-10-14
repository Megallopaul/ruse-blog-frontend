import axios from 'axios'
import strapiRepository from './strapiRepository'

const strapiClient = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
  headers: { 'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}` }
})

const blogRepository = new strapiRepository(strapiClient)

export { blogRepository }