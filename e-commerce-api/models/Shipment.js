const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    tracking_number: { type: String, required: true },
    carrier: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["pending", "shipped", "delivered", "cancelled"],
    },
    shipped_at: Date,
    delivered_at: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shipment", shipmentSchema);
