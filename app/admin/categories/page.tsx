"use client";
import { useEffect, useState } from "react";
import CategoriesTable from "@/components/categories/CategoriesTable";
import Heading from "@/components/ui/Heading";
import axios from "axios";
import Link from "next/link";




const CategoriesPage = () => {

  const [categories, setCategories] = useState("");
  const [loaded, setLoaded] = useState(false);

  const getCategories = async () => {
        const resp = await axios.get("/api/categories")
        setCategories(resp.data)  
  }

  useEffect(() => {
    setLoaded(false);
     getCategories();
    setLoaded(true);
    }, [])

  if(!loaded) return <Heading>Cargando...</Heading>

  return (
   <>
    <Heading>Administración de Categorias</Heading>

    <div className="flex flex-col md:flex-row md:justify-end gap-5">
      <Link href={'/admin/categories/new'} className="btn-primary">Crear Categoría</Link>

    </div>

    <CategoriesTable categories={categories} />
   </>
  )
}

export default CategoriesPage;