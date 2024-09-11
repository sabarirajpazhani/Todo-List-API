const express = require("express");
const { todoCreating } = require("../controllers/todoCreateController");
const router = express.Router();

router.route('/todo').post(todoCreating);

module.exports=router;