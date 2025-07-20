import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    calories: {type: Number, required: true},
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true } // relación por ID
})


export default mongoose.models.Product ||  mongoose.model("Product",productSchema)