const todoModel = require("../models/todoModels")

exports.getTodoGeting = async (req,res,next)=>{
    try{
        const todos = await todoModel.find({});
        if(!todos.length){
            return res.status(404).json({
                message:"No Todos Found"
            })
        }
        res.json({
            todos
        })
    }
    catch(err){
        res.status(500).json({
            message:"Server Error, Please try again Later"
        })
    }
}

exports.getTodoSingle=async(req,res,next)=>{
    try{
        const todoID = await todoModel.findById(req.params.id);

        if(!todoID){
            return res.status(404).json({
                message:"Todo Not Found"
            })
        }
        res.json({
            todoID
        })
    }
    catch(err){
        res.status(500).json({
            message: "An error occurred while retrieving the todo"
        })
    }
}