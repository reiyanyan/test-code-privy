// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
      "~/components",
    ],
  },
  css: ["@/assets/tailwind.css", "@/assets/global.scss"],
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&family=Material+Symbols+Rounded:wght@100..700&family=Raleway:wght@200;300;400;500;600;700;800&family=Roboto:wght@200;300;400;500;600;700;800",
        }
      ]
    }
  }
});
