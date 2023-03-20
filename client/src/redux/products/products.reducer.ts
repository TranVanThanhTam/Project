import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: IProducts = {
  products: [],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsSuccess(state, action: PayloadAction<Array<IProduct>>) {
      
      state.products = action.payload;
    },
    clearProducts(state) {
      state.products = [];
      
      
    },
  },
});

export const {getProductsSuccess, clearProducts } =
productsSlice.actions;

export default productsSlice.reducer;
