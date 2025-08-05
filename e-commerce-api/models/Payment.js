const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    amount: { type: Number, required: true },
    payment_method: { type: String, required: true },
    payment_status: {
      type: String,
      required: true,
      enum: ["pending", "paid", "failed"],
    },
    transaction_id: String,
    paid_at: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
