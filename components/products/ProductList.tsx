'use client';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { toggleProductSelection } from '@/store/slices/orderSlice';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({products}: ProductListProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const dispatch = useAppDispatch();

  //Selecciona el checkbox
  const handleSelectProduct = (categoryName : any, selectionType : any, product: Product) => {
    const newSelection = selectedProduct?._id === product._id ? null : product;
    setSelectedProduct(newSelection);
    console.log('Selected product:', newSelection);
    dispatch(toggleProductSelection({categoryName, selectionType, product}));
  };

  //Lee la categoria con sus respectivos productos del store.
  const useIsProductSelected = (categoryName: string, productId: string) => {
    return useAppSelector((state) => {
      const category = state.order.order.find((o) => o.name === categoryName);
      if (!category) return false;
      //console.log('por el true', category)
      return category.selectedProducts.some((sp) => sp._id === productId);
    });
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Seleccionar
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Producto
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Precio
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Calorías
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={useIsProductSelected(product.category.name, product._id)}
                  onChange={() => handleSelectProduct(product.category.name, product.category.selectionType, product)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {product.name}
                </div>
                {product.category?.name && (
                  <div className="text-sm text-gray-500">
                    {product.category.name}
                  </div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  ${product.price}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {product.calories} kcal
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* {selectedProducts.length > 0 && (
        <div className="p-4 bg-gray-50 border-t">
          <p className="text-sm text-gray-600">
            {selectedProducts.length} producto(s) seleccionado(s)
          </p>
        </div>
      )} */}
    </div>
  );
}

export default ProductList;