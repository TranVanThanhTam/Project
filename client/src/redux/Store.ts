import { useDispatch } from "react-redux";
import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import UserReducer from "./user/User.reducer";
import ProductReducer from "./product/Product.reducer";
import CommonReducer from "./common/Common.reducer";
import cartReducer from "../component/features/cartSlice";
// import { createLogger } from "redux-logger";

// const loggerMiddleware = createLogger();

export const store = configureStore({
  reducer: {
    common: CommonReducer,
    user: UserReducer,
    cart: cartReducer,
    product: ProductReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(loggerMiddleware);
  // },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
