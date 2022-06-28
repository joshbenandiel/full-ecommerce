import { MainContainer, ProductContainer, ProductWrapper } from "./mainStyled";
import {BsMouse2} from 'react-icons/bs'
import { Product } from "../Product";
import { getAllProduct } from "../../services/getAllProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/reducers/product";

export const Main = () => {

  const dispatch = useDispatch()
  const products = useSelector((state: any) => state.product.product)

  const getProducts = async() => {
    const productsData = await getAllProduct()
    dispatch(getProduct(productsData))
  }
  useEffect(() => {
    getProducts()
  },[])

  return (
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
  )
}
