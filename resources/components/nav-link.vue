<script setup lang="ts">
defineProps<{
  href: string
  active?: boolean
}>()
</script>

<template>
  <Link
    :href="href"
    :class="{
      'inline-flex items-center px-5 pt-1 border-b-2 text-sm font-medium transition': true,
      'border-white text-white': active,
      'border-transparent text-slate-300': !active,
      'hover:text-white hover:border-white': !active,
      'focus:text-white focus:border-white': !active,
    }"
  >
    <slot />
  </Link>
</template>
