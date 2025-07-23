import AdminRoute from "@/components/admin/AdminRoute";

const adminNavigation = [
    {url: '/admin/categories', text: 'Categorias', blank: false},
    {url: '/admin/products', text: 'Productos', blank: false},
    {url: '/admin/orders', text: 'Órdenes', blank: false},
    {url: '/order', text: 'Armá tu Combo', blank: true},
]

const AdminSidebar = () => {

    return (
        <>

            <div className="space-y-3 ">
                <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">Navegación</p>
                <nav className="flex flex-col">
                    {adminNavigation.map(link => (
                        <AdminRoute key={link.url} link={link}/>
                    ))}
                </nav>
            </div>
        </>

    )
}

export default AdminSidebar