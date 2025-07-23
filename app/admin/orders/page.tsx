"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";


const OrdersPage = () => {

  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getOrders = async () => {
        const resp = await axios.get("/api/orders")
        setOrders(resp.data)  
  }

  useEffect(() => {
    setLoaded(false);
    getOrders();
    setLoaded(true);
    }, [])

  if(!loaded) return <p className="text-center">Cargando órdenes...</p>


  return (
    <>
     <Heading>Administrar Órdenes</Heading>
     {
      orders.length ? (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
            {
              orders.map((order : Order) => (
                <OrderCard key={order._id} order={order}/>
                // <p key={order._id}>{order.customerName} - {order.subtotal} - {order.createdAt}</p> // Placeholder for OrderCard component
              ))
            }
        </div>
      ): <p className="text-center">No hay órdenes pendientes.</p>
     }
    </>
  )
}

export default OrdersPage