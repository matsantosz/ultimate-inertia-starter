<script setup lang="ts">
const model = defineModel<string>({ required: true })

const input = ref<HTMLInputElement | null>(null)

onMounted(() => {
  if (input.value?.hasAttribute('autofocus')) {
    input.value?.focus()
  }
})

defineExpose({ focus: () => input.value?.focus() })
</script>

<template>
  <input
    class="border-gray-300 text-slate-800 rounded-lg shadow focus:border-slate-500 focus:ring-slate-500"
    v-model="model"
    ref="input"
  />
</template>
