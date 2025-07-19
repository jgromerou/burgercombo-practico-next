






const CategoryForm = async ({product}: any) => {
    
    //TODO: Aquí deberíamos traer las categorías de la base de datos.
    
  return (

        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
          <form className="space-y-5">
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
                    placeholder="Nombre Categoría"
                />
            </div>
          </form>
        </div>
    )
}

export default CategoryForm