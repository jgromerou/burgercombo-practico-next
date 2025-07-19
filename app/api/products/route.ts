import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product";
import "@/models/Category"; 
import { NextResponse } from "next/server"


//Product
// params: _id, name, price, calorie

// Get: Enviar información al Frontend

export async function GET() {
    await connectDB();
    try {
        const products = await Product.find({}).populate("category");
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: "Error en el servidor, comunicarse con un administrador"
        }, { status: 500 });
    }
}

// Post: crear nuevo producto
export async function POST(req: any) {
    await connectDB();
    try {
        
        // en la req viene el objeto que me envia el front
        const body = await req.json()
        const {name, price, calorie, category} = body

        //Validación de que exista nombre y precio.
        if(!name || !price || !calorie || !category){
            return NextResponse.json({
                error:"El Nombre o el Precio o la caloria o la categoria no existe"},
                { status:400 }
            )
        }

        await Product.create({
            name,
            price,
            calorie,
            category
        })

        //devuelve un mensaje exitoso.
        return NextResponse.json({
            msg: "Producto creado exitosamente"},
        { status:201 }
        )


    } catch (error) {
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