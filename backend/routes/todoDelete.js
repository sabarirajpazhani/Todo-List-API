const express = require("express");
const { todoDeleting } = require("../controllers/todoDeleteController");
const router = express.Router();

router.route('/todo/:id').patch(todoDeleting);

module.exports = router;