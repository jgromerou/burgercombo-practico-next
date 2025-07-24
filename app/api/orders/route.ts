//Order
// params: _id, name, order[CategoryOrderSchema], subtotal, totalCalories

import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { NextRequest, NextResponse } from "next/server";

// Get: Enviar información al Frontend


export async function GET() {
    await connectDB();
    try {
        const orders = await Order.find().populate('order.selectedProducts').sort({ createdAt: -1 });
        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: "Error en el servidor, comunicarse con un administrador"
        }, { status: 500 });
    }
}

// Post: crear nueva orden
export async function POST(req: NextRequest) {
    await connectDB();
    try {
        
        // en la req viene el objeto que me envia el front
        const body = await req.json()
        const {name, order, subtotal, totalCalories} = body
        
        // Validar nombre
        if (!name || typeof name !== 'string' || name.trim() === '') {
        return NextResponse.json(
            { error: 'El nombre de la persona es requerido y no puede estar vacío.' },
            { status: 400 }
        );
        }

        // Validar order
        if (!Array.isArray(order) || order.length === 0) {
        return NextResponse.json(
            { error: 'La orden debe ser un array con al menos un producto.' },
            { status: 400 }
        );
        }

        // Validar subtotal
        if (typeof subtotal !== 'number' || isNaN(subtotal) || subtotal <= 0) {
        return NextResponse.json(
            { error: 'El subtotal debe ser un número válido mayor a 0.' },
            { status: 400 }
        );
        }

        // Validar totalCalories
        if (typeof totalCalories !== 'number' || isNaN(totalCalories) || totalCalories < 0) {
        return NextResponse.json(
            { error: 'Las calorías totales deben ser un número válido mayor o igual a 0.' },
            { status: 400 }
        );
        }

        await Order.create({
            customerName: name,
            order,
            subtotal,
            totalCalories
        })

        //devuelve un mensaje exitoso.
        return NextResponse.json({
            msg: "Orden creada exitosamente"},
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