'use client';
import axios from "axios";
import { useRouter } from "next/navigation";

const CategoryForm = () => {
    
     const router = useRouter();

     const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
        }
       
        const response = await axios.post("/api/categories",
          data
        );

        console.log(response);
        //TODO: Mostrar los errores como por ejemplo que el usuario ingrese campo vacio

        //Redireccionar a categories
        router.push('/admin/categories');
    };
    
  return (

        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
          <form action={handleSubmit} className="space-y-5">
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

             <input type="submit" className="btn-primary"
              value="Registrar Categoria"/>
          </form>
        </div>
    )
}

export default CategoryForm