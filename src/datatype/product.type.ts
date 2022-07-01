export interface ProductType {
  name: string,
  images: [
    {
      url: string
    }
  ]
  price: string,
  _id: string,
  ratings: number,
  numOfReviews: number
  image: [
    {
      url: string
    }
  ]
}

export interface UserType {
  email: any,
  password: any
}

export interface ProductDetailsType {
  image: [
    {public_id: string, url: string}
  ]
  name: string
  _id: string
  ratings: number
  numOfReviews: number
  price: number
  description: string
  reviews: [
    {
      comment: string
      name: string
      rating: number
    }
  ]


}