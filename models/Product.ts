import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    calorie: {type: String, required: true},
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true } // relación por ID
})


export default mongoose.models.Product ||  mongoose.model("Product",productSchema)