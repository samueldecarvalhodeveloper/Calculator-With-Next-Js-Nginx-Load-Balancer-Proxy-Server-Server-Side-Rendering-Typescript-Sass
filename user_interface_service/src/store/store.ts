import { configureStore } from "@reduxjs/toolkit";
import CalculatorReducer from "../slices/calculator_slice";

const store = configureStore({
  reducer: {
    calculator: CalculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
