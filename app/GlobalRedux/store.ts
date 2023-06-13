"use client";

import { AnyAction, configureStore } from "@reduxjs/toolkit";
import keyFeaturesReducer from "./features/keyFeatures/keyFeaturesSlice";

export const store = configureStore({
  reducer: {
    keyFeatures: keyFeaturesReducer,
    // researchData: researchDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {keyFeaturesList: keyFeaturesListState, researchData: researchDataState}
export type AppDispatch = typeof store.dispatch;

function researchDataReducer(state: unknown, action: AnyAction): unknown {
  throw new Error("Function not implemented.");
}
