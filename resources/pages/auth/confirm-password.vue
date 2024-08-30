<script setup lang="ts">
const form = useForm({
  password: '',
})

const submit = () => {
  form.post(route('password.confirm'), {
    onFinish: () => {
      form.reset()
    },
  })
}
</script>

<template>
  <Head title="Confirm Password" />

  <div class="mb-4 text-sm text-gray-600">
    This is a secure area of the application. Please confirm your password
    before continuing.
  </div>

  <form @submit.prevent="submit">
    <div>
      <Label for="password" value="Password" />
      <Input
        id="password"
        type="password"
        class="mt-1 block w-full"
        v-model="form.password"
        required
        autocomplete="current-password"
        autofocus
      />
      <InputError class="mt-2" :message="form.errors.password" />
    </div>

    <div class="flex justify-end mt-4">
      <Button
        class="ms-4"
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      >
        Confirm
      </Button>
    </div>
  </form>
</template>
