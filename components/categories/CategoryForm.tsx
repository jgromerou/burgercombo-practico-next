'use client';
import axios from "axios";
import { useRouter } from "next/navigation";

const CategoryForm = () => {
    
     const router = useRouter();

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        const formData = new FormData(e.currentTarget);
        const data = {
          name: formData.get('name'),
          selectionType: formData.get('selectionType')
        };

       
        const response = await axios.post("/api/categories",
          data
        );

        //TODO: Mostrar los errores como por ejemplo que el usuario ingrese campo vacio

        //Redireccionar a categories
        router.push('/admin/categories');
    };
    
  return (

        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-gray-100 mt-3"
                    placeholder="Nombre Categoría"
                />
            </div>

            <div className="space-y-2">
              <label className="text-gray-800" htmlFor="selectionType">
                Tipo de selección:
              </label>
              <select
                id="selectionType"
                name="selectionType"
                className="block w-full p-3 bg-gray-100 mt-3"
              >
                <option value="simple">Simple</option>
                <option value="multiple">Múltiple</option>
              </select>
            </div>

             <input type="submit" className="btn-primary"
              value="Registrar Categoria"/>
          </form>
        </div>
    )
}

export default CategoryForm