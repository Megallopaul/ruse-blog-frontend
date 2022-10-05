import { useRuntimeConfig } from "nuxt/app";
import axios from 'axios'
import strapiRepository from './strapiRepository'

const strapiClient = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
  headers: { 'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}` }
})

const blogRepository = new strapiRepository(strapiClient)

export { blogRepository }
/*
let blogRepository

export const useRepositories = () => {
  const { STRAPI_TOKEN } = useRuntimeConfig()
  console.log(useRuntimeConfig())

  if (!blogRepository) {
    const strapiClient = axios.create({
      headers: { 'Authorization': `Bearer ${STRAPI_TOKEN}` }
    })
    blogRepository = new strapiRepository(strapiClient)
  }

  return { blogRepository }
}
 */