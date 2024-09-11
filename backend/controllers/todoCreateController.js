const todoModel = require("../models/todoModels");

exports.todoCreating=async(req, res, next)=>{
    try{
        const {task} = req.body;
    
        if(!task){
            return res.status(400).json({
                message:"Task field is required"
            })
        }

        let tasks = await todoModel.findOne({task});
        if(tasks){
            return res.status(409).json({
                message:"Taks already Exists"
            })
        }
        tasks = new todoModel({task});
        await tasks.save();

        res.status(200).json({
            message:"New Todo Created Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}