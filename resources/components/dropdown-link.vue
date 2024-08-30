<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <Link
    :href="href"
    :class="[
      'px-4 py-2',
      'block w-full text-sm text-start leading-5 text-black transition',
      'hover:text-slate-900 hover:bg-slate-400/50',
      'focus:text-gray-900 focus:bg-slate-400/50 focus:outline-none',
    ]"
  >
    <slot />
  </Link>
</template>
