import axios from 'axios'
import strapiRepository from './strapiRepository'

const strapiClient = axios.create({
  headers: { 'Authorization': `Bearer ${process.env.STRAPI_TOKEN}` }
})

const blogRepository = new strapiRepository(strapiClient)

export { blogRepository }
