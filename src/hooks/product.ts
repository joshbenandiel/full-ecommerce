import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct, getProductDetails } from "../redux/reducers/product"
import productService from '../services/product'


export const useGetAllProducts = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    setIsLoading(true)
    productService.getProducts()
      .then((res: any) => {
        dispatch(getProduct(res.data.product))
        setIsLoading(false)
      })
  },[])

  return {isLoading}
}

export const useGetAllProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const params = useParams()
  useEffect(() => {
  setIsLoading(true)
  productService.getProductDetails(params.id as string)
    .then((res: any) => {
      dispatch(getProductDetails(res.data.product))
      setIsLoading(false)
    })
  },[params.id])

  return {isLoading}
}