const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    line1: { type: String, required: true },
    line2: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zip_code: { type: String, required: true },
    is_default: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);
