import { ProductDetailsMain } from '../../components/ProductDetailsMain/index'
import { useGetAllProductDetails } from "../../hooks/product"


export const ProductDetails = () => {

  const {isLoading} = useGetAllProductDetails()
  
 
  return (
    <>
    <ProductDetailsMain/>
    </>
  )
}