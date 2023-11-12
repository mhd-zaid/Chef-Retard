<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {{ appConfig.title }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{ appConfig.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
