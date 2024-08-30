<script setup lang="ts">
import DeleteUserForm from './partials/delete-user-form.vue'
import UpdatePasswordForm from './partials/update-password-form.vue'
import UpdateProfileInformationForm from './partials/update-profile-form.vue'

defineProps<{
  mustVerifyEmail?: boolean
  status?: string
}>()
</script>

<template>
  <Head title="Profile" />

  <div class="space-y-6">
    <div class="p-4 sm:p-8 bg-white rounded-lg">
      <UpdateProfileInformationForm
        :must-verify-email="mustVerifyEmail"
        :status="status"
        class="max-w-xl"
      />
    </div>

    <div class="p-4 sm:p-8 bg-white rounded-lg">
      <UpdatePasswordForm class="max-w-xl" />
    </div>

    <div class="p-4 sm:p-8 bg-white rounded-lg">
      <DeleteUserForm class="max-w-xl" />
    </div>
  </div>
</template>
