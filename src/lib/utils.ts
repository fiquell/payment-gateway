import { browser } from '$app/environment'
import { writable } from 'svelte/store'

export const localStorageWritable = <T>(key: string, initialValue: T) => {
  if (!browser) {
    return writable<T>(initialValue)
  }

  const storedValue = localStorage.getItem(key)
  const parsedValue: T = storedValue ? JSON.parse(storedValue) : initialValue
  const store = writable<T>(parsedValue)

  store.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value))
  })

  return store
}

export const formatIDR = (price: number) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return formatter.format(price).split('\u00A0').join('')
}

export const applyDiscount = (price: number, discount: number) => {
  return price * (1 - discount / 100)
}

export const convertUSDToIDR = (price: number, discount = 0, format = true) => {
  const exchangeRate = 1000
  const discountedUSD = applyDiscount(price, discount)
  const priceIDR = discountedUSD * exchangeRate

  if (!format) {
    return priceIDR
  }

  return formatIDR(priceIDR)
}
