const todoModel = require("../models/todoModels");

exports.todoUpdating = async(req,res,next)=>{
    try{
        const task = req.body.task;
        const completed = req.body.completed;

        const todo = await todoModel.findById(req.params.id);
        if(!todo){
            return res.status(404).json({
                message:"Todo not found"
            })
        }

        if(task!==undefined){
            todo.task = task;
        }
    
        if(completed!==undefined){
            todo.completed = completed;
        }
        
        const updateTodo = await todo.save();
        res.json({
            message:"Updated Successfully",
            updateTodo
        })
    }
    catch(err){
        res.status(500).json({
            message:"Internal Server error"
        })
    }




    
    

}