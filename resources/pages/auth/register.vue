<script setup lang="ts">
const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post(route('register'), {
    onFinish: () => {
      form.reset('password', 'password_confirmation')
    },
  })
}
</script>

<template>
  <Head title="Register" />

  <form @submit.prevent="submit">
    <div>
      <Label for="name" value="Name" />

      <Input
        id="name"
        type="text"
        class="mt-1 block w-full"
        v-model="form.name"
        required
        autofocus
        autocomplete="name"
      />

      <InputError class="mt-2" :message="form.errors.name" />
    </div>

    <div class="mt-4">
      <Label for="email" value="Email" />

      <Input
        id="email"
        type="email"
        class="mt-1 block w-full"
        v-model="form.email"
        required
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
      <Link
        :href="route('login')"
        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
      >
        Already registered?
      </Link>

      <Button
        class="ms-4"
        :class="{ 'opacity-25': form.processing }"
        :disabled="form.processing"
      >
        Register
      </Button>
    </div>
  </form>
</template>
