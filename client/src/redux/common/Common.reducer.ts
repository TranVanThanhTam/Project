import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICommon = {
  loading: false,
  error: null,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    getStart(state) {
      state.loading = true;
    },
    getSuccess(state) {
      state.loading = false;
    },
    getFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getStart, getSuccess, getFailure } = commonSlice.actions;

export default commonSlice.reducer;
