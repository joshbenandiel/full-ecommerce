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