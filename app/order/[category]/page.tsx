'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Heading from '@/components/ui/Heading';
import ProductList from '@/components/products/ProductList';

const OrderPage = () => {
  const params = useParams();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const category : any = params.category; // o params['category']

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);


 useEffect(() => {
  const fetchData = async () => {
    setLoaded(false);
    
    const decoded = decodeURIComponent(category as string);

    const resp = await axios.get(`/api/products?category=${decoded}`);
    setProducts(resp.data);
    setLoaded(true);
  };
  
  if (category) 
    {
      fetchData();
    }
}, [category]);

  if (!loaded) return <Heading>Cargando categorias y productos...</Heading>;

  return (
    <>
      <Heading>Elige por categoría y armá tu combo</Heading>


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
