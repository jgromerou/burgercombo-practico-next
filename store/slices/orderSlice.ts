
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: OrderState = {
  name: '',
  order: [],
  subtotal: 0,
  totalCalories: 0,
};

const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    toggleProductSelection(
      state,
      action: PayloadAction<{
        categoryName: string;
        selectionType: "simple" | "multiple";
        product: Product;
      }>
    ) {
      const { categoryName, selectionType, product } = action.payload;
      let category = state.order.find((c) => c.name === categoryName);

      if (!category) {
        // Crear nueva categoría con el producto o los productos seleccionados.
        state.order.push({
          name: categoryName,
          selectionType,
          selectedProducts: [product],
        });
      } else {
        if (category.selectionType === "simple") {
          category.selectedProducts = [product];
        } else {
          const exists = category.selectedProducts.some((p) => p._id === product._id);
          if (exists) {
            category.selectedProducts = category.selectedProducts.filter(p => p._id !== product._id);
          } else {
            category.selectedProducts.push(product);
          }
        }
      }

      // Recalcular totales
      const allProducts = state.order.flatMap((c) => c.selectedProducts);
      state.subtotal = allProducts.reduce((sum, p) => sum + p.price, 0);
      state.totalCalories = allProducts.reduce((sum, p) => sum + p.calories, 0);
    },
    resetOrder(state) {
      state.order = [];
      state.subtotal = 0;
      state.totalCalories = 0;
    },
  }
});

export const { toggleProductSelection, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;