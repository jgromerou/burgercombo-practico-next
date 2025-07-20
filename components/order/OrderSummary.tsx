"use client";
import { useAppSelector } from "@/store/store";


const OrderSummary = () => {
  const selections = useAppSelector((state) => state.order.selections);
 

  console.log(selections);


  
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-128 p-5">
      <h1 className="text-3xl text-center font-black mt-8">Mi pedido</h1>

      {Object.keys(selections).length === 0? (
        <p className="text-center my-10">Pedido vacío. Agregue un producto nuevo </p>
      ) : (
        <div className="mt-5">
         //TODO: Detalles de los productos seleccionados
         

         //TODO: Hacer el Resume
        </div>
      )}
    </aside>
  );
};

export default OrderSummary;