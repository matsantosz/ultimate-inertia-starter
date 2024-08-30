import type { Config } from 'tailwindcss'

import forms from '@tailwindcss/forms'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Config>{
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/**/*.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [forms],
}
