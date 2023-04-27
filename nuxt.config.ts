// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: true,
	css: ['highlight.js/styles/github.css'],
	experimental: {
		componentIslands: true,
	},

	modules: ['@nuxtjs/tailwindcss'],
});
