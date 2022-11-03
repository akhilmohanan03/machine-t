import { configureStore } from "@reduxjs/toolkit";
import { housingReducer } from "../Services/Housing";

export const Store = configureStore({
  reducer: { housing: housingReducer },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
