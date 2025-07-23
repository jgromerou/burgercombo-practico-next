'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import { useRouter } from "next/navigation";


const ProductForm = () => {
  
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getCategories = async () => {
        const resp = await axios.get("/api/categories")
        setCategories(resp.data)  
  }

  useEffect(() => {
    setLoaded(false);
     getCategories();
    setLoaded(true);
    }, [])


     

     const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: Number(formData.get('price')),
            calories: Number(formData.get('calories')),
            category: formData.get('category')
        }

        const response = await axios.post("/api/products",
          data
        );

        //TODO: Mostrar los errores como por ejemplo que el usuario ingrese campo vacio

        //Redireccionar a products
        router.push('/admin/products');
    };

  if(!loaded) return <Heading>Cargando...</Heading>
    
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
                    className="block w-full p-3 mb-3 bg-gray-200"
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
                    className="block w-full p-3 mb-3 bg-gray-200"
                    placeholder="Precio Producto"
                />
            </div>

             <div className="space-y-2">
                <label
                    className="text-gray-800"
                    htmlFor="price"
                >Caloria:</label>
                <input
                    id="calories"
                    type="number"
                    name="calories"
                    className="block w-full p-3 mb-3 bg-gray-200"
                    placeholder="Caloría Producto"
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-gray-800"
                    htmlFor="category"
                >Categoría:</label>
                <select
                    className="block w-full p-3 mb-3 bg-gray-200"
                    id="category"
                    name="category"
                >
                    <option value="">-- Seleccione --</option>
                     {categories.map((category:any) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

             <input type="submit" className="btn-primary mt-2"
              value="Registrar Producto"/>
          </form>
        </div>
    )
}

export default ProductForm