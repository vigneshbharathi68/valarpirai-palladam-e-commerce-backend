const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    parent_category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
