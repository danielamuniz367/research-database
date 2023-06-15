"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface keyFeaturesState {
  value: string[];
}

// Define the initial state using that type
const initialState: keyFeaturesState = {
  value: [],
};

export const keyFeaturesSlice = createSlice({
  name: "keyFeatures",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (keyFeature) => keyFeature !== action.payload
      );
    },
  },
});

export const { add, remove } = keyFeaturesSlice.actions;

export default keyFeaturesSlice.reducer;
