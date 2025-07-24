

// Get: Enviar información al Frontend

import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(_ : NextRequest , { params }: any ) {

    const { _id } = params;

      if (!mongoose.Types.ObjectId.isValid(_id)) {
        return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    }

    await connectDB();

    try {
        const category = await Category.findById(_id);
        if (!category) {
            return NextResponse.json({ error: 'Categoría no encontrada' }, { status: 404 });
        }
        return NextResponse.json(category, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: "Error en el servidor, comunicarse con un administrador"
        }, { status: 500 });
    }
}