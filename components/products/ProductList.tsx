'use client';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { toggleProductSelection } from '@/store/slices/orderSlice';
import { formatCurrency } from '@/utils';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const dispatch = useAppDispatch();

  const handleSelectProduct = (categoryName: string, selectionType: "simple" | "multiple", product: Product) => {
    const newSelection = selectedProduct?._id === product._id ? null : product;
    setSelectedProduct(newSelection);
    dispatch(toggleProductSelection({ categoryName, selectionType, product }));
  };

  const IsProductSelected = (categoryName: string, productId: string): boolean => {
    return useAppSelector((state) => {
      const category = state.order.order.find((o) => o.name === categoryName);
      if (!category) return false;
      return category.selectedProducts.some((sp) => sp._id === productId);
    });
  };

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex items-center justify-between bg-white shadow p-4 rounded-lg hover:bg-gray-50 w-80 md:w-92 lg:w-128 xl:w-200"
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={IsProductSelected(product.category.name, product._id)}
              onChange={() =>
                handleSelectProduct(product.category.name, product.category.selectionType, product)
              }
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <div>
              <div className="text-sm font-medium text-gray-900">{product.name}</div>
              {product.category?.name && (
                <div className="text-sm text-gray-500">{product.category.name}</div>
              )}
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-900 font-semibold">{formatCurrency(product.price)}</div>
            <div className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded-full inline-block">
              {product.calories} cal
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;