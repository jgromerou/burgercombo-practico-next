'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Heading from '@/components/ui/Heading';
import ProductList from '@/components/products/ProductList';
import CategoryScrollBar from '@/components/categories/CategoryScrollBar';

// Podés definir las categorías fijo o desde API
// const categories = ['Pan', 'Carne', 'Queso', 'Salsas', 'Vegetales'];

const OrderPage = () => {
  const params = useParams();
  const router = useRouter();
  const category : any = params.category; // o params['category']

  console.log(category)

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [selectedCategoryName, setSelectedCategoryName] = useState<string>(decodeURIComponent(category));

  const getCategories = async () => {
     const resp = await axios.get('/api/categories');
     setCategories(resp.data);
  //   //setSelectedCategoryName(decodeURIComponent(category)); // primera categoría por defecto
  };

 useEffect(() => {
  const fetchData = async () => {
    setLoaded(false);
    await getCategories();
    
    const decoded = decodeURIComponent(category as string);
    setSelectedCategoryName(decoded);

    const resp = await axios.get(`/api/products?category=${decoded}`);
    setProducts(resp.data);
    setLoaded(true);
  };

  if (category) fetchData();
}, [category]);

  // Cuando el usuario selecciona una categoría desde el scroll
  const handleCategoryChange = (name: string) => {
    router.push(`/order/${encodeURIComponent(name)}`);
    setSelectedCategoryName(name);
  };

  if (!loaded) return <Heading>Cargando categorias y productos...</Heading>;

  return (
    <>
      <Heading>Elige por categoría y armá tu combo</Heading>

      {loaded && categories.length > 0 ? (
        <CategoryScrollBar
          categories={categories}
          selectedCategoryName={selectedCategoryName}
          onSelectCategory={handleCategoryChange}
        />
      ) : (
        <p>No hay categorías disponibles</p>
      )}

      {/* Listado de Productos */}
    {loaded && products.length > 0 ? (
      <ProductList products={products} />
    ) : (
      <p>No hay productos en esta categoría</p>
    )}
    </>
  );
};

export default OrderPage;
