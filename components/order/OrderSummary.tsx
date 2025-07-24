"use client";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useMemo } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { resetOrder } from "@/store/slices/orderSlice";
import { formatCurrency } from "@/utils";


const OrderSummary = () => {
  const router = useRouter();

  const {order, subtotal, totalCalories} = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  // Calcular total de ítems
  const { itemsCount } = useMemo(() => {
    let calculatedCount = 0;

    order.forEach((category) => {
      category.selectedProducts.forEach(() => {
        calculatedCount += 1;
      });
    });

    return {
      itemsCount: calculatedCount,
    };
  }, [order]);

  const itemsText = itemsCount === 1 ? "producto" : "productos";


  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      order,
      subtotal,
      totalCalories,
    };

    const response = await axios.post("/api/orders",
        data
    );

    alert(response.data.msg)
     //TODO: Mostrar los errores como por ejemplo que el usuario ingrese campo vacio

        //Limpiar order en el store
        dispatch(resetOrder())

        //Redireccionar a order
        router.push('/order');
  };


  return (
    <aside className="lg:h-screen lg:overflow-y-scroll w-full md:w-92 lg:w-128 p-5 item-center">
      {/* Resumen */}
      {
        order.length === 0 ? (
          <p className="text-center my-10">Pedido vacío. Agregue un producto nuevo </p>
        ) : (
        
           <div className="text-2xl mt-10 text-center">
            <h1 className="text-3xl text-center font-black mt-8">Resumen del Pedido</h1>
            <p className="text-gray-700">
              {itemsCount > 0 ? `${itemsCount} ${itemsText}` : "No hay productos"}
            </p>
            <p>
              Total a pagar:{" "}
              <span className="font-bold">{formatCurrency(subtotal)}</span>
            </p>
            <p>
              Total de calorías:{" "}
              <span className="font-bold">{totalCalories} cal</span>
            </p>
            <form className="w-full mt-5 space-y-5" action={handleCreateOrder}>
              <input
                type="text"
                placeholder="Tu Nombre"
                className="bg-white border border-gray-100 p-2 w-full"
                name="name"
              />
              <input
                type="submit"
                className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"
                value="Confirmar Pedido"
              />
            </form>
          </div>
        )
      }
    </aside>
  );
};

export default OrderSummary;