const mongoose = require("mongoose");

const productVariantSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    variant_name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    additional_price: Number,
    stock_quantity: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductVariant", productVariantSchema);
