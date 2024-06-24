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
