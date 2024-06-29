// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface DummyJSON {
      products: Product[]
      total: number
      skip: number
      limit: number
    }

    interface Product {
      readonly title: string

      id: number
      name: string
      description: string
      category: string
      price: number
      discountPercentage: number
      rating: number
      stock: number
      tags: string[]
      brand: string
      sku: string
      weight: number
      dimensions: Dimensions
      warrantyInformation: string
      shippingInformation: string
      availabilityStatus: string
      reviews: Review[]
      returnPolicy: string
      minimumOrderQuantity: number
      meta: Meta
      images: string[]
      thumbnail: string
    }

    interface Dimensions {
      width: number
      height: number
      depth: number
    }

    interface Review {
      rating: number
      comment: string
      date: Date
      reviewerName: string
      reviewerEmail: string
    }

    interface Meta {
      createdAt: Date
      updatedAt: Date
      barcode: string
      qrCode: string
    }

    interface Categories {
      slug: string
      name: string
      url: string
    }

    interface Cart extends Product {
      quantity: number
    }

    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
