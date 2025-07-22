'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Heading from '@/components/ui/Heading';
import ProductList from '@/components/products/ProductList';

interface Category {
  _id: string;
  name: string;
  selectionType: 'simple' | 'multiple'
}

interface Product {
  _id: string;
  name: string;
  price: number;
  calories: number,
  category: Category;
}

const OrderPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoaded(false);

      const [catResp, prodResp] = await Promise.all([
        axios.get('/api/categories'),
        axios.get('/api/products'),
      ]);

      setCategories(catResp.data);
      setProducts(prodResp.data);
      setLoaded(true);
    };

    fetchData();
  }, []);

  if (!loaded) return <Heading>Cargando categorías y productos...</Heading>;

  return (
    <div className='flex flex-col items-center'>
      <Heading>Armá tu combo</Heading>

      {categories.map((category) => {
        const productsInCategory = products.filter(
          (product) => product.category?.name === category.name
        );

        if (productsInCategory.length === 0) return null;

        return (
          <div key={category._id} className="mb-8">
            <h2 className="text-xl font-bold mb-2">{category.name}</h2>
            <ProductList products={productsInCategory} />
          </div>
        );
      })}
    </div>
  );
};

export default OrderPage;