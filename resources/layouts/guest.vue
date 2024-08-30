<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center px-6 sm:px-0"
  >
    <Link href="/">
      <ApplicationLogo class="w-20 h-20 fill-white text-gray-500" />
    </Link>

    <main
      class="w-full sm:max-w-md mt-6 px-8 py-12 bg-white shadow-md overflow-hidden rounded-lg"
    >
      <slot />
    </main>
  </div>
</template>
