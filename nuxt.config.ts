import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: true },
    modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/ui'],
    routeRules: {
        '/': { prerender: true },
    },
});