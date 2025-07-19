import Link from "next/link"


const ProductsTable = ({products}: any) => {

  return (
       <div className="px-4 mt-20">
            <div className="mt-8 flow-root ">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full py-2 align-middle bg-white p-5 ">
                        <table className="min-w-full divide-y divide-gray-500 ">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
                                        Nombre 
                                    </th>
                                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
                                        Precio 
                                    </th>
                                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
                                        Caloria 
                                    </th>

                                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
                                        Categoria 
                                    </th>
                                    <th scope="col" className="py-3 pr-5 text-right text-sm font-semibold text-gray-700 sm:pr-0">
                                        <span className="justify-end pr-5">Acciones</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {
                                products && products.length > 0 ? (
                                    products.map((product: any) => (
                                    <tr key={product._id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {product.name}
                                        </td>

                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {product.price}
                                        </td>

                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {product.calorie}
                                        </td>

                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {product.category.name}
                                        </td>
                                    
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-right text-sm font-medium sm:pr-0">
                                            <Link href={`/admin/products/${product._id}/edit`} className="btn-secondary">Editar</Link>
                                        </td>
                                    </tr>
                                ))
                                ) : (
                                    <tr>
                                        <td
                                        colSpan={2}
                                        className="text-center py-4 text-gray-500 text-sm"
                                        >
                                        No hay productos disponibles.
                                        </td>
                                    </tr>
                                    )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductsTable