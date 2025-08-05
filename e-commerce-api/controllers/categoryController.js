const Category = require("../models/Category.js");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addCategory = async (req, res) => {
  try {
    const slug = req.body.name.toLowerCase().replace(/ /g, "-");
    const category = await Category.create({
      name: req.body.name,
      slug,
      description: req.body.description,
    });
    res.status(200).json(category);
  } catch (err) {
    console.log({ err });
    res
      .status(504)
      .json({ message: err?.message ?? err?.errorResponse?.errmsg });
  }
};
