import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [daisyui],
} satisfies Config

export default config
