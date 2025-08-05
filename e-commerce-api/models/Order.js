const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    total_amount: { type: Number, required: true },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "shipped", "delivered", "cancelled"],
    },
    placed_at: { type: Date, default: Date.now },
    payment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
