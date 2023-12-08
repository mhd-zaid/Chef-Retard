<script setup lang="ts">
import postsData from '../../conseils/posts.json'

const fetchPostsById = async (id:any) => {
  
  const data = postsData;
  const post = data.posts.find((post) => post.slug === id);
  return post;
}

const fetchPosts = async () => {
  
  const data = postsData;
  return data.posts;
}
const posts = await fetchPosts()
const route = useRoute()

const post = await fetchPostsById(route.params.id);

const author = 'John Doe'
const publishedAt = new Date('2021-01-01')
const readingTime = 5;

const randomSlug = posts[Math.floor(Math.random() * posts.length)].slug

const link = `/conseils/posts/${randomSlug}`

useHead({
  title: `${post.title}`,
})

</script>

<template>
  <div v-if="post" class="mx-auto py-5 lg:py-10 px-6">
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
