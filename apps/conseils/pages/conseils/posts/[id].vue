<script setup lang="ts">
import type { Post } from '~~/types'

const route = useRoute()
const { data: post, pending, error } = await useLazyFetch<Post>(`https://dummyjson.com/posts/${route.params.id}`)
post.body
const author = 'John Doe'
const publishedAt = new Date('2021-01-01')
const readingTime = 5;
const seoLink = [
  "https://www.cadremploi.fr/editorial/conseils/droit-du-travail/detail/article/managers-comment-recadrer-un-collaborateur-en-retard.html",
  "https://www.qapa.fr/news/retard-travail-patron/",
  "https://www.pagepersonnel.fr/advice/candidats/vie-de-bureau/les-meilleures-excuses-pour-justifier-un-retard",
  "https://www.journaldunet.com/management/vie-personnelle/1039181-bien-vivre-avec-des-collegues-difficiles/1039183-celui-qui-est-en-retard",
  "https://www.bonheurpourtous.com/humour-respectueux/regles-du-chef.html",
  "https://www.keobiz.fr/le-mag/quels-sont-les-recours-pour-sanctionner-un-salarie-en-retard/",
  "https://www.lettres-gratuites.com/modele-lettre-excuses-retard-travail-panne-1357.html",
  "https://madame.lefigaro.fr/bien-etre/pourquoi-certaines-personnes-sont-elles-toujours-en-retard-020615-96800",
  "https://www.alice-miller.com/le-chef-a-toujours-raison/",
  "https://madame.lefigaro.fr/business/cinq-regles-imbattables-pour-ne-plus-jamais-etre-en-retard-au-travail-021118-151582"
  ];

const link = seoLink[Math.floor(Math.random() * seoLink.length)];
useHead({
  title: `Article n°${route.params.id}`,
  meta: [{ hid: 'seo-link', name: 'seo-link', content: link }],
})

</script>

<template>
  <div v-if="pending" class="py-10">
    <div class="bg-gray-300 h-5 mb-4 animate-pulse rounded-lg max-w-2xl mx-auto" />
    <div class="bg-gray-300 h-3 mb-10 animate-pulse rounded-lg max-w-xs mx-auto" />
    <div class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg ml-14" />
    <div v-for="i in 6" :key="i" class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg" />
    <div class="bg-gray-300 h-4 mb-6 animate-pulse rounded-lg max-w-2xl" />
    <div class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg ml-14" />
    <div v-for="i in 5" :key="i" class="bg-gray-300 h-4 mb-2 animate-pulse rounded-lg" />
    <div class="bg-gray-300 h-4 mb-10 animate-pulse rounded-lg max-w-md" />
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>
  <div v-else-if="post" class="mx-auto py-5 lg:py-10 px-6">
    <div class="text-center mb-5 lg:mb-10 max-w-xl mx-auto py-5 lg:py-10">
      <h1 class="text-3xl lg:text-4xl text-blue-600 font-bold mb-5">
        {{ post.title }}
      </h1>
      <div class="text-sm dark:text-gray-500 text-gray-500">
        <span class="font-semibold"> {{ author }} </span>
        &middot;
        {{ postDate(publishedAt) }} &middot; {{ readingTime }} min read
      </div>
    </div>

    <BlogPostImage
      v-if="post.image"
      :src="`https://source.unsplash.com/random?${post.tags.join(',')}`"
      :alt="post.title"
      class="rounded mb-8"
    />
    <br/><br/>
    <article
      class="prose prose-blue dark:prose-invert max-w-full"
      v-html="`${post.body} pas de chef retard` "
    />
    <article>
      <a :href=link> pour en savoir plus sur l'article Chef Retard cliquez ici</a>
    </article>
  </div>
</template>
