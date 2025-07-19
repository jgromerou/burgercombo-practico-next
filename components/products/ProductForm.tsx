






const ProductForm = async ({product}: any) => {
    
    //TODO: Aquí deberíamos traer las categorías de la base de datos.
    
  return (
        <>
            <div className="space-y-2">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-gray-100"
                    placeholder="Nombre Producto"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-gray-800"
                    htmlFor="price"
                >Precio:</label>
                <input
                    id="price"
                    type="number"
                    name="price"
                    className="block w-full p-3 bg-gray-100"
                    placeholder="Precio Producto"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-gray-800"
                    htmlFor="categoryId"
                >Categoría:</label>
                <select
                    className="block w-full p-3 bg-gray-100"
                >
                    <option value="">-- Seleccione --</option>
                    {/* Aquí deberíamos mapear las categorías obtenidas de la base de datos */}
                </select>
            </div>
        </>
    )
}

export default ProductForm