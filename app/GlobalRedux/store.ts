"use client";

import { AnyAction, configureStore } from "@reduxjs/toolkit";
import keyFeaturesReducer from "./features/keyFeatures/keyFeaturesSlice";

export const store = configureStore({
  reducer: {
    keyFeatures: keyFeaturesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {keyFeaturesList: keyFeaturesListState, researchData: researchDataState}
export type AppDispatch = typeof store.dispatch;
