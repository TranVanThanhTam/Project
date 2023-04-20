import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProducts = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductSuccess(state, action: PayloadAction<Array<IProduct>>) {
      state.products = action.payload;
    },
    clearProduct(state) {
      state.products = [];
    },
  },
});

export const { getProductSuccess, clearProduct } = productSlice.actions;

export default productSlice.reducer;
