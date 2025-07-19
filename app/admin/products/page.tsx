import Heading from "@/components/ui/Heading";
import Link from "next/link";

//TODO: Aqui traigo los productos de la base de datos.

const ProductsPage = async () => {

  return (
   <>
    <Heading>Administración de Productos</Heading>

    <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
      <Link href={'/admin/products/new'} className="btn-primary">Crear Producto</Link>

    </div>

    // TODO: Aqui va la tabla de administración de productos.
   </>
  )
}

export default ProductsPage;