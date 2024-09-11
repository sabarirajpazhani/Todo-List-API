const express = require("express");
const { getTodoGeting, getTodoSingle } = require("../controllers/todoGetController");
const router = express.Router();

router.route('/todo').get(getTodoGeting);
router.route('/todo/:id').get(getTodoSingle);

module.exports = router;