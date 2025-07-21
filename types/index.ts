//Aqui va el tipado estricto de los tipos de datos globales que se usan en la aplicacion
interface Product {
  _id: string;
  name: string;
  price: number;
  calories: number;
  category: {
    _id:string,
    name:string,
    selectionType: "simple" | "multiple";
  }
}

type Category = {
  name: string;
  selectionType: "simple" | "multiple";
  selectedProducts: Product[];
};

type OrderState = {
  order: Category[];
  subtotal: number;
  totalCalories: number;
};

// interface CategorySelections {
//   displayName: string;
//   products: Product[];
//   selectionType: 'simple' | 'multiple';
// }