'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Heading from "@/components/ui/Heading";
import ProductList from "@/components/products/ProductList";

const OrderPage =  () => {
  const params = useParams();
  const category = params.category; // o params['category']

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getProducts = async () => {
        const resp = await axios.get(`/api/products?category=${category}`)
        setProducts(resp.data)  
  }

  useEffect(() => {
    setLoaded(false);
    getProducts();
    setLoaded(true);
    }, [])

  if(!loaded) return <Heading>Cargando productos...</Heading>

  return (
    <>
      <Heading>
        Elige por categoría y armá tu combo
      </Heading>

      //Todo: Aquí debería ir el componente que muestra las categorías

      {/* Listado de Productos */}
      <ProductList products={products} />
    </>
  );
};

export default OrderPage;