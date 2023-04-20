import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserSuccess(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { getUserSuccess, clearUser } = userSlice.actions;

export default userSlice.reducer;
