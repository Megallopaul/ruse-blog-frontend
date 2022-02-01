import axios from 'axios'
import strapiRepository from '@/repositories/strapiRepository'

const strapiClient = axios.create({ baseURL: process.env.STRAPI_URL })

const blogRepository = new strapiRepository(strapiClient)

export { blogRepository }
