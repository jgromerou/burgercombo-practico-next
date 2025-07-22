import mongoose from "mongoose";

// const orderProductSchema = new mongoose.Schema({
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//     required: true
//   }
// });

const categoryOrderSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
  selectedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }],
  selectionType: { 
    type: String, 
    required: true,
    enum: ['simple', 'multiple'], // Solo permite estos valores
  },
});

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  order: [categoryOrderSchema],
  subtotal: { type: Number, required: true },
  totalCalories: {type: Number, required: true},
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);