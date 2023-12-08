<script setup lang="ts">
import postsData from '../conseils/posts.json'
const fetchPosts = async () => {
  
  const data = postsData;
  return data.posts;
}

const { data } = await useAsyncData(fetchPosts)



useHead({
  title: 'Conseils',
})
</script>

<template>
  <div class="p-4 xl:p-0">
    <div class="text-center py-10 md:max-w-xl md:mx-auto">
      <h1 class="text-3xl mb-3 mt-2 font-semibold tracking-normal text-gray-800">
        Conseils
      </h1>
      <h2 class="text-lg mb-8 font-normal text-gray-600 dark:text-gray-400">
        Nos conseils d'expert pour ne plus être un chef en retard
      </h2>
    </div>
    <div v-if="data" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ConseilsPostItem v-for="post in data" :key="post.id" :post="post" />
    </div>
  </div>
</template>
