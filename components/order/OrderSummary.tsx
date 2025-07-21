"use client";
import { useAppSelector } from "@/store/store";
import ProductDetails from "./ProductDetails";


const OrderSummary = () => {
  const order = useAppSelector((state) => state.order.order);
 

  console.log(order);


  
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-128 p-5">
      <h1 className="text-3xl text-center font-black mt-8">Pedido</h1>

      {order.length === 0? (
        <p className="text-center my-10">Pedido vacío. Agregue un producto nuevo </p>
      ) : (
        <div className="mt-5">
          {order.map((category) =>
            category.selectedProducts.map((item) => (
              <ProductDetails key={item._id} item={item} />
            ))
          )}
         

         //TODO: Hacer el Resumen
        </div>
      )}
    </aside>
  );
};

export default OrderSummary;