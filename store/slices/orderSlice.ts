
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
    // añadir un item
    addToOrder: (state, action: PayloadAction<any>) => {
        const { category, ...data } = action.payload; // eslint-disable-line @typescript-eslint/no-unused-vars
        const existingItemIndex = state.value.findIndex(item => item._id === action.payload._id);
        
        if (existingItemIndex !== -1) {
          // Si el item ya existe, lo reemplazamos (en lugar de incrementar cantidad)
          state.value[existingItemIndex] = {
            ...data,
            subtotalPrice: action.payload.price,
            subtotalCalorie: action.payload.calorie
          };
        } else {
          // Si es un item nuevo, lo añadimos
          state.value.push({
            ...data,
            subtotalPrice: action.payload.price,
            subtotalCalorie: action.payload.calorie
          });
        }
      },


  }
});

// Action creators are generated for each case reducer function
export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;