import { formatCurrency } from "@/utils";

interface Product {
  _id: string;
  name: string;
  price: number;
  calories: number;
}

interface ProductDetailsProps {
  item: Product;
}

const ProductDetails = ({ item }: ProductDetailsProps) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <h4 className="text-lg font-semibold">{item.name}</h4>
      <p className="text-gray-600 text-sm">Precio: {formatCurrency(item.price)}</p>
      <p className="text-gray-600 text-sm">Calorías: {item.calories} cal</p>
    </div>
  );
};

export default ProductDetails;