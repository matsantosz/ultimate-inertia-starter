<script setup lang="ts">
const emit = defineEmits(['update:checked'])

const props = defineProps<{
  checked: boolean
  value?: any
}>()

const proxyChecked = computed({
  get() {
    return props.checked
  },

  set(val) {
    emit('update:checked', val)
  },
})
</script>

<template>
  <input
    type="checkbox"
    :value="value"
    v-model="proxyChecked"
    class="cursor-pointer rounded p-2 border-gray-300 text-slate-800 shadow-sm focus:ring-slate-500"
  />
</template>
