// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/css/roboto.css'],
    modules: [
        [
            '@storyblok/nuxt', 
            { 
                accessToken: process.env.STORYBLOK_API_KEY
            }
        ],
        '@nuxtjs/tailwindcss',
    ],
})
