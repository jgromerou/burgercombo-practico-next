

// Get: Enviar información al Frontend

import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(_ : any , {params} : any ) {

    const { id } = params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    await connectDB();

    try {
        const category = await Category.findById(id);
        if (!category) {
            return NextResponse.json({ error: 'Categoría no encontrada' }, { status: 404 });
        }
        return NextResponse.json(category, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            error: "Error en el servidor, comunicarse con un administrador"
        }, { status: 500 });
    }
}