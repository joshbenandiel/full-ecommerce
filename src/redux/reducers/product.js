import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
  productDetails: {}
}

export const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      return {
        ...state,
        product: action.payload

      }
    },
    getProductDetails: (state, action) => {
      return {
        ...state,
        productDetails: action.payload
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { getProduct, getProductDetails} = productReducer.actions

export default productReducer.reducer