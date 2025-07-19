

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="md:flex">
                <aside className="md:w-64 md:h-screen bg-white">
                    //TODO: Aqui va el sidebar para navegar.
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-4 bg-gray-100">
                    {children}
                </main>
            </div>

        </>
    )
}