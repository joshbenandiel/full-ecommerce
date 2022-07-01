import { ProductDetailsType } from "../../datatype/product.type"
import { ProductContainer, ProductWrapper, ReviewContainer } from "./productDetailsStyled"
import ReactSimplyCarousel from 'react-simply-carousel';  
import { useState } from "react";
import ReactStars from "react-stars";
import { useSelector } from "react-redux";

interface IProps {
  children?: React.ReactNode
}

export const ProductDetailsMain: React.FC<IProps> = () => {

  const singleProduct = useSelector((state: any) => state.product.productDetails)
  const option = {
    edit: false,
    color: 'rgba(20,20,20,0.1)',
    color2: '#F26550',
    size: 20,
    value: singleProduct.ratings,
    ifHalf: true
  }
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1)

  return (
    <ProductWrapper>
      <ProductContainer>
        <div className='product-wrapper'>
          <div className='first-column'>
            {singleProduct.image && (
              <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                  style: {
                    display: 'none'
                  },
                }}
                backwardBtnProps={{
                  style: {
                    display: 'none'
                  },
                }}
                dotsNav={{
                  show: true,
                  itemBtnProps: {
                    style: {
                      height: 12,
                      width: 12,
                      borderRadius: "50%",
                      border: 0,
                      color: "#9B9A9C",
                      marginLeft: '5px',
                    }
                  },
                  activeItemBtnProps: {
                    style: {
                      height: 12,
                      width: 12,
                      borderRadius: "50%",
                      border: 0,
                      background: "#413F41",
                      marginLeft: '5px'
                    }
                  }
                }}
                speed={400}
                easing="linear"
              >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                {singleProduct.image.map((item: any) => {
                  return (
                    <div key={item._id}>
                      <img key={item._id} src={item.url} alt="product" />
                    </div>
                  )
                })}
              </ReactSimplyCarousel>
            )}
          </div>
          <div className="second-column">
            <div className='first-child'>
              <h1>{singleProduct.name}</h1>
              <p>Product # {singleProduct._id}</p>
            </div>
            <div className="second-child">
              <ReactStars {...option}/> <span>({singleProduct.numOfReviews} reviews)</span>
            </div>
            <div className='third-child'>
              <h1>{singleProduct.price} Php</h1>
              <div className='button-wrapper'>
                <button
                  onClick={() => setQuantity(quantity - 1)} 
                  className='add-minus-button'>-</button>
                <input onChange={() => setQuantity(quantity) }type="text" value={quantity} />
                <button 
                    onClick={() => setQuantity(quantity + 1)} 
                  className='add-minus-button'>+</button>
                <div>
                  <button className='orange-button'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className='fourth-child'>
              <h3>Status: <span>InStock</span></h3>
            </div>
            <div className='fifth-child'>
              <h3>Description:</h3>
              <p>{singleProduct.description}</p>
              <button className='orange-button'>Submit Review</button>
            </div>
          </div>
        </div>
      </ProductContainer>
      <ReviewContainer>
        <>
          <div>
            <p>REVIEWS</p>
          </div>
        </>
      </ReviewContainer>
    </ProductWrapper>
  )

}
