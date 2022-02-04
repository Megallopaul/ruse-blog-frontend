import axios from 'axios'
import strapiRepository from './strapiRepository'

const strapiLoginData = {
  identifier: process.env.STRAPI_AUTH_ID,
  password: process.env.STRAPI_AUTH_PASSWORD
}

const strapiClient = axios.create({ baseURL: process.env.STRAPI_URL })

strapiClient.interceptors.request.use(async req => {
  if (!req.headers['Authorization']) {
    const { data } = await axios.post(`${process.env.STRAPI_URL}/api/auth/local`, strapiLoginData)
    req.headers['Authorization'] = `Bearer ${data.jwt}`
  }

  return req
})

const blogRepository = new strapiRepository(strapiClient)

export { blogRepository }
