

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="md:flex">

            <main className="md:flex-1 p-5 md:h-screen md:overflow-y-scroll">
                {children}
            </main>
            
            //TODO: Aqui va la parte del Resumen de la Orden. Barra a la derecha (OrderSummary)

        </div>

    </>
  );
}