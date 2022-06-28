import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [],
}

export const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.product = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getProduct } = productReducer.actions

export default productReducer.reducer