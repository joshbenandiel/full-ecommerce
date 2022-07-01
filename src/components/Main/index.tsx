import { MainContainer, ProductContainer, ProductWrapper } from "./mainStyled";
import {BsMouse2} from 'react-icons/bs'
import { Product } from "../Product";
import { useSelector } from "react-redux";
import { Loader } from "../Loader";
import { useGetAllProducts } from "../../hooks/product";

export const Main = () => {

  const products = useSelector((state: any) => state.product.product)
  const {isLoading} = useGetAllProducts()

  
 

  return (
    <>
    {isLoading ? 
      <Loader/>
    : (
    <>
      <MainContainer>
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <button>
          Scroll <BsMouse2/>
        </button>
      </MainContainer>
      <ProductContainer>
        <span className='product-header'><h2>Featured Products</h2></span>
        <ProductWrapper>
          {products.map((product: any) => {
            return <Product product={product}/>
          })}
        </ProductWrapper>
      </ProductContainer>
    </>
    )}
    </>
  )
}
