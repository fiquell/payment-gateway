import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', ...fontFamily.sans],
      },
    },
  },
  plugins: [daisyui],
} satisfies Config

export default config
