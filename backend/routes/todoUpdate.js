const express = require("express");
const { todoUpdating } = require("../controllers/todoUpdateController");
const router = express.Router();

router.route('/todo/:id').patch(todoUpdating);

module.exports = router;