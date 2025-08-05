const mongoose = require("mongoose");

const WishlistItemSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    added_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WishlistItem", WishlistItemSchema);
