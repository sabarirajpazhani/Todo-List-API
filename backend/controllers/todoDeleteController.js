const todoModel = require("../models/todoModels");

exports.todoDeleting = async (req, res, next) => {
    try {
        const todo = await todoModel.findById(req.params.id); 
        if (!todo) {
            return res.status(404).json({
                message: "Todo Not Found"
            });
        }

        await todoModel.findByIdAndDelete(todo); 
        res.json({
            message: "Todo Deleted Successfully"
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server error"
        });
    }
};
