<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

// Optionally clear the error to go back to the home page
const handleError = () => clearError({ redirect: '/' });

// Use useHead() for the error page's metadata
useHead({
  title: `${props.error?.statusCode} | An error occurred`
});
</script>

<template>
  <div class="error-page">
    <div class="error-content">
      <h1 v-if="error.statusCode === 404">Page Not Found</h1>
      <h1 v-else>An error occurred</h1>
      <p>{{ error.statusMessage }}</p>
      <button @click="handleError">Go back home</button>
    </div>
  </div>
</template>

<style>
.error-page {
  /* Add your custom styles here */
  text-align: center;
  padding: 50px;
}
</style>
