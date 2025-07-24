"use client";
import { useEffect, useState } from "react";
import Heading from "@/components/ui/Heading";
import axios from "axios";
import Link from "next/link";
import ProductsTable from "@/components/products/ProductsTable";

const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getProducts = async () => {
        const resp = await axios.get("/api/products")
        setProducts(resp.data)  
  }

  useEffect(() => {
    setLoaded(false);
    getProducts();
    setLoaded(true);
    }, [])

  if(!loaded) return <Heading>Cargando...</Heading>

  return (
   <>
    <Heading>Administración de Productos</Heading>

    <div className="flex flex-col md:flex-row md:justify-end gap-5">
      <Link href={'/admin/products/new'} className="btn-primary">Crear Producto</Link>

    </div>

    <ProductsTable products={products} />
   </>
  )
}

export default ProductsPage;