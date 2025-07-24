import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product";
import "@/models/Category"; 
import { NextRequest, NextResponse } from "next/server"
import Category from "@/models/Category";


//Product
// params: _id, name, price, calories

// Get: Enviar información al Frontend

export async function GET(request: NextRequest) {
    await connectDB();
    try {
        const { searchParams } = new URL(request.url);

        // Buscar primero la categoría por su nombre
        const categoryName = searchParams.get('category')?.trim(); // Limpia espacios

        let filter = {};
        if (categoryName) {
            const category = await Category.findOne({
                name: { $regex: new RegExp(`^${categoryName}$`, 'i') }
            });
 
            if (!category) {
                return NextResponse.json(
                    { error: `Categoría ${categoryName} no encontrada` },
                    { status: 404 }
                );
            }
            filter = { category: category._id };
        }

        //Consulta los Productos por su categoria
        const products = await Product.find(filter).populate("category");
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: "Error en el servidor, comunicarse con un administrador"
        }, { status: 500 });
    }
}

// Post: crear nuevo producto
export async function POST(req: NextRequest) {
    await connectDB();
    try {
        
        // en la req viene el objeto que me envia el front
        const body = await req.json()
        const {name, price, calories, category} = body
        
        //Validación de que exista nombre, precio calories y categoria.
       if (
            typeof name !== 'string' ||
            typeof category !== 'string' ||
            typeof price !== 'number' ||
            typeof calories !== 'number'
        ) {
            return NextResponse.json({
                error:"El Nombre o el Precio o la caloria o la categoria no existe"},
                { status:400 }
            )
        }

        await Product.create({
            name,
            price,
            calories,
            category
        })

        //devuelve un mensaje exitoso.
        return NextResponse.json({
            msg: "Producto creado exitosamente"},
        { status:201 }
        )


    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: "Error en el servidor, comunicarse con un administrador"},
            { status: 500 }
        )
    }
}

//Actualizar el Producto
// export async function PUT(req) {
    
//     try {
//         const {id,nombre,precio} = await req.json()

//         const index = productos.findIndex(p => p.id === id)

//         if(index=== -1){
//             return NextResponse.json({error: "Producto no encontrado"}, {status: 404})
//         }

//         //El producto en su lugar en el arreglo es reemplazado por su id, nombre y precio actualizado.
//         productos[index] = {id,nombre,precio}

//         return NextResponse.json({ok: "Producto Actualizado Correctamente"},{status:200})
//     } catch (error) {
//         return NextResponse.json({
//             error: "Error en el servidor, comunicarse con un administrador"},
//             { status: 500 }
//         )
//     }

// }

// export async function DELETE(_, {params}) {
//     await connectDB()
//     const {id} = params

//     try {
        
//         const productoEliminado = await Producto.findByIdAndDelete(id)
//         if(!productoEliminado){
//             return NextResponse.json({error: "Producto no encontrado"}, {status: 404})
//         }
//         //Si el producto fue eliminado, devuelve un mensaje exitoso.
//         return NextResponse.json({ok: "Producto Eliminado Correctamente"},{status:200})
//     } catch (error) {
//         return NextResponse.json({
//             error: "Error en el servidor, comunicarse con un administrador"},
//             { status: 500 }
//         )
//     }
// }