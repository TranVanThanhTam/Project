import { json } from "stream/consumers";
import { getFailure, getStart } from "../common/Common.reducer";
import { AppThunk } from "../Store";
import { getProductSuccess } from "./Product.reducer";

export const fetchProducts = (): AppThunk => async (dispatch) => {
  // xy ly exception
  try {
    dispatch(getStart());
    const response = await fetch(
      `https://634ea35d4af5fdff3a62d2a4.mockapi.io/api/v1/products`
    );
    const data = await response.json();
    dispatch(getProductSuccess(data));
  } catch (error: any) {
    dispatch(getFailure(error.message));
  }
};
