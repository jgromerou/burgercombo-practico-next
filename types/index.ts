//Aqui va el tipado estricto de los tipos de datos globales que se usan en la aplicacion
interface Product {
  _id: string;
  name: string;
  price: number;
  calories: number;
  category: {
    _id:string,
    name:string
  }
}

interface CategorySelections {
  displayName: string;
  products: Product[];
  selectionType: 'single' | 'multiple';
}

interface OrderState {
  selections: Record<string, CategorySelections>;
  subtotal: number;
  totalCalories: number;
}