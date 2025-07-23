import OrderSummary from "@/components/order/OrderSummary";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="md:flex">

            {/* Mostrar Categorias y Productos */}
            <main className="md:flex-1 p-5 md:h-screen md:overflow-y-scroll">
                {children}
            </main>
            
            {/* Mi Pedido y el Resumen */}
            <OrderSummary />

        </div>

    </>
  );
}