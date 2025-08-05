const express = require("express");
const {body} = require('express-validator')
const router = express.Router();
const validate = require('../middlewares/validate')
const { getAllCategories, addCategory } = require("../controllers/categoryController");


const categoryValidationRules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Description is required")
]
router.get("/", getAllCategories);
router.post("/", validate(categoryValidationRules), addCategory);

module.exports = router;
