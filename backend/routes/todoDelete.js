const express = require("express");
const { todoDeleting } = require("../controllers/todoDeleteController");
const router = express.Router();

router.route('/todo/:id').delete(todoDeleting);

module.exports = router;