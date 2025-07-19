
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
    value: any[]
}

const initialState: OrderState = {
    value: [],
};

const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    
  },
});

// Action creators are generated for each case reducer function
export const { } = orderSlice.actions;

export default orderSlice.reducer;