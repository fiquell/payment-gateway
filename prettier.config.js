/** @type {import('prettier').Config} */
const config = {
  bracketSameLine: true,
  endOfLine: 'auto',
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}

export default config
