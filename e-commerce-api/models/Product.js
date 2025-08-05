const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  discount_price: Number,
  stock_quantity: { type: Number, default: 0 },
  is_active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
