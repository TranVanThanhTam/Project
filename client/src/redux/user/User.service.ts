import { json } from "stream/consumers";
import { getFailure, getStart } from "../common/Common.reducer";
import { AppThunk } from "../Store";
import { getUserSuccess } from "./User.reducer";

export const fetchUser =
  (userId: string): AppThunk =>
  async (dispatch) => {
    // xy ly exception
    try {
      dispatch(getStart());
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      dispatch(getUserSuccess(data));
    } catch (error: any) {
      dispatch(getFailure(error.message));
    }
  };
