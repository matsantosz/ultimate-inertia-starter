<script setup lang="ts">
const props = defineProps<{
  email: string
  token: string
}>()

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post(route('password.store'), {
    onFinish: () => {
      form.reset('password', 'password_confirmation')
    },
  })
}
</script>

<template>
  <Head title="Reset Password" />

  <form @submit.prevent="submit">
    <div>
      <Label for="email" value="Email" />

      <Input
        id="email"
        type="email"
        class="mt-1 block w-full"
        v-model="form.email"
        required
        autofocus
        autocomplete="username"
      />

      <InputError class="mt-2" :message="form.errors.email" />
    </div>

    <div class="mt-4">
      <Label for="password" value="Password" />

      <Input
        id="password"
        type="password"
        class="mt-1 block w-full"
        v-model="form.password"
        required
        autocomplete="new-password"
      />

      <InputError class="mt-2" :message="form.errors.password" />
    </div>

    <div class="mt-4">
      <Label for="password_confirmation" value="Confirm Password" />

      <Input
        id="password_confirmation"
        type="password"
        class="mt-1 block w-full"
        v-model="form.password_confirmation"
        required
        autocomplete="new-password"
      />

      <InputError class="mt-2" :message="form.errors.password_confirmation" />
    </div>

    <div class="flex items-center justify-end mt-4">
      <Button
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      >
        Reset Password
      </Button>
    </div>
  </form>
</template>
