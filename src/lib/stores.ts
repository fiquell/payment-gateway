import { writable } from 'svelte/store'

export const cart = writable<App.Product[]>([])
