const express = require("express");
const router = express.Router();
const { getUsers, addUsers } = require("../controllers/userController");

router.get("/", getUsers);
router.post("/add", addUsers);

module.exports = router;