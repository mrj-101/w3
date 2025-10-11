<template>
  <div class="flex flex-col items-center justify-center mx-auto gap-4 p-4  h-1/2 w-1/2">
    <h1>Useful Link</h1>
    <UAccordion trailing-icon="i-lucide-arrow-down" :items="items" class="w-full max-w-md">
      <template #body="{ item }">
        <p v-html="item.content" class="text-sm pb-3.5 text-secondary" />
      </template>
    </UAccordion>
  </div>
</template>

<script lang="ts" setup>
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'Nuxt&Vue',
    icon: 'i-lucide-swatch-book',
    content: `
      <ul>
        <li><a href="https://vuejs.org" target="_blank" class="text-blue-600 cursor-pointer ml-7">Vue</a></li>
        <li><a href="https://ui.nuxt.com" target="_blank" class="text-blue-600 cursor-pointer ml-7">UINuxt</a></li>
        <li><a href="https://nuxt.com" target="_blank" class="text-blue-600 cursor-pointer ml-7">Nuxt</a></li>
        <li><a href="https://github.com/michalsnik/aos" target="_blank" class="text-blue-600 cursor-pointer ml-7">aos</a></li>
        <li><a href="https://icones.js.org/collection/iconoir?s=menu" target="_blank" class="text-blue-600 cursor-pointer ml-7">Icon</a></li>
      </ul>
    `,
  },
  {
    label: 'Section 2',
    icon: 'i-lucide-swatch-book',
    content: `<a href="https://rvc.ac.th" target="_blank" class="text-blue-600 hover:underline">Ratchavinit School</a>`,
  },
  {
    label: 'Section 3',
    icon: 'i-lucide-swatch-book',
    content: `<a href="https://rvc.ac.th" target="_blank" class="text-blue-600 hover:underline">Ratchavinit School</a>`,
  },
])
</script>