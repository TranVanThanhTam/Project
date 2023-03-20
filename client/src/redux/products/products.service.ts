import { getFailure, getStart } from "../Commom/Common.reducer";
import { AppThunk } from "../Store";
import { getProductsSuccess, } from "./products.reducer";

export const fetchProducts =
  (): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getStart());
      const response = await fetch(
        `https://640c50cd94ce1239b0aa13b9.mockapi.io/products`
      );
      const data = await response.json();
      dispatch(getProductsSuccess(data));
    } catch (error: any) {
      dispatch(getFailure(error.message));
    }
  };
