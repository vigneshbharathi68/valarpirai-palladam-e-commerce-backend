const mongoose = require("mongoose");

const productImageSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    image_data: { type: Buffer, required: true }, // Storing image as binary blob
    alt_text: String,
    is_primary: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductImage", productImageSchema);
