import axios from 'axios'
import strapiRepository from "./repositories/strapiRepository";

const getRoutes = async () => {
	const strapiClient = axios.create({
		baseURL: process.env.VITE_STRAPI_URL,
		headers: { 'Authorization': `Bearer ${process.env.VITE_STRAPI_TOKEN}` }
	})
	const blogRepository = new strapiRepository(strapiClient)
	const { data } = await blogRepository.listArticles()
	return data.map(article => '/articles/' + article.attributes.slug)
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	ssr: false,
	css: [
		"@/assets/global.scss",
		"@/assets/fonts.scss"
	],
	hooks: {
		async 'nitro:config' (nitroConfig) {
			if (nitroConfig.dev) { return }
			const routes = await getRoutes()
			nitroConfig.prerender.routes.push(...routes)
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/main.scss" as *;'
				}
			}
		}
	}
})
