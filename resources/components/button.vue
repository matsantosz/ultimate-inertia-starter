<script setup lang="ts">
const variants = {
  primary:
    'bg-slate-800 text-white hover:bg-slate-900 focus:bg-slate-900 focus:ring-slate-900',
  secondary:
    'bg-slate-700 text-white hover:bg-slate-800 focus:bg-slate-800 focus:ring-slate-800',
  danger:
    'bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 focus:ring-red-700',
}

withDefaults(
  defineProps<{
    variant: keyof typeof variants
  }>(),
  {
    variant: 'primary',
  },
)
</script>

<template>
  <button
    :class="[
      'px-4 py-2',
      'inline-flex items-center border border-transparent rounded-md',
      'font-semibold text-xs tracking-widest transition',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      variants[variant],
    ]"
  >
    <slot />
  </button>
</template>
