import { ProductContainer } from "./productStyled"
import { ProductType } from "../../datatype/product.type"
import ReactStars from 'react-stars'


interface IProps {
  product: ProductType
}

export const Product: React.FC<IProps> = ({product}) => {
  const option = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    color2: '#F26550',
    size: 20,
    value: product.ratings,
    ifHalf: true
  }
  console.log(product)
  return (
    <ProductContainer>
      <img src={product.image[0].url} alt="product-image" />
      <div className='details-wrapper'>
        <p>{product.name}</p>
        <div className='star-wrapper'>
          <ReactStars {...option}/> <span>({product.numOfReviews} reviews)</span>
        </div>
        <p>{product.price}</p>
      </div>
    </ProductContainer>
  )
}