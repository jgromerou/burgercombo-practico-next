import Heading from "@/components/ui/Heading";
import Link from "next/link";

//TODO: Aqui traigo las categorias de la base de datos.

const CategoriesPage = async () => {

  return (
   <>
    <Heading>Administración de Categorias</Heading>

    <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
      <Link href={'/admin/categories/new'} className="btn-primary">Crear Categoría</Link>

    </div>

    // TODO: Aqui va la tabla de administración de categorias.
   </>
  )
}

export default CategoriesPage;