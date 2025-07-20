
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: OrderState = {
  selections: {},
  subtotal: 0,
  totalCalories: 0
};

const inferSelectionType = (categoryName: string): 'single' | 'multiple' => {
  const singleCategories = ['Hamburguesa Base'];
  return singleCategories.some(term => 
    categoryName.includes(term)
  ) ? 'single' : 'multiple';
};

const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    toggleProduct(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const categoryName = product.category.name;
      const selectionType = inferSelectionType(product.category.name);

      // Inicializar categoría si no existe
      if (!state.selections[categoryName]) {
        state.selections[categoryName] = {
          displayName: product.category.name,
          products: [],
          selectionType
        };
      }

      const category = state.selections[categoryName];
      const productIndex = category.products.findIndex(p => p._id === product._id);

      if (productIndex >= 0) {
        // Remover producto
        const [removed] = category.products.splice(productIndex, 1);
        state.subtotal -= removed.price;
        state.totalCalories -= removed.calories;
      } else {
        // Agregar producto según reglas
        if (category.selectionType === 'single') {
          const [removed] = category.products.splice(0);
          if (removed) {
            state.subtotal -= removed.price;
            state.totalCalories -= removed.calories;
          }
        }
        
        category.products.push(product);
        state.subtotal += product.price;
        state.totalCalories += product.calories;
      }
    },
    clearOrder(state) {
      state.selections = {};
      state.subtotal = 0;
      state.totalCalories = 0;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleProduct, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;