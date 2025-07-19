


//TODO: Aqui traigo el listado de productos de la base de datos

import Heading from "@/components/ui/Heading";

const OrderPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  

  console.log("Category:", category);

  return (
    <>
      <Heading>
        Elige por categoría y armá tu combo
      </Heading>

      //Todo: Aquí debería ir el componente que muestra las categorías

      //Todo: Aquí debería ir el componente que muestra los productos por categoría
    </>
  );
};

export default OrderPage;