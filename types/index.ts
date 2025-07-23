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


interface CategoryOrder {
  name: string;
  selectionType: 'simple' | 'multiple';
  selectedProducts: Product[];
}

interface OrderState {
  name: string;
  order: CategoryOrder[];
  subtotal: number;
  totalCalories: number;
}

type Order = {
  _id: string;
  customerName: string;
  order: CategoryOrder[];
  subtotal: number;
  totalCalories: number;
  createdAt: string;
}

// export type OrderWithProducts = Order & {
//     orderProducts: (OrderProducts &{
//         product: Product
//     })[]
// }