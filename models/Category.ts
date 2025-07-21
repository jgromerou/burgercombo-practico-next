import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    selectionType: { 
    type: String, 
    required: true,
    enum: ['simple', 'multiple'], // Solo permite estos valores
    default: 'multiple' // Valor por defecto
  },
})


export default mongoose.models.Category ||  mongoose.model("Category",categorySchema)