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
      'block w-full ps-3 pe-4 py-2 border-l-4 text-start text-base font-medium transition': true,
      'border-slate-600 text-slate-900 bg-slate-500/50 hover:bg-slate-400/50 hover:border-slate-400/90 focus:outline-none focus:bg-slate-400/50 focus:border-slate-400/90':
        active,
      'border-transparent text-slate-600': !active,
      'hover:text-slate-900 hover:bg-slate-400/50 hover:border-slate-400/90':
        !active,
      'focus:text-gray-900 focus:bg-slate-400/50 focus:border-slate-400/90 focus:outline-none':
        !active,
    }"
  >
    <slot />
  </Link>
</template>
