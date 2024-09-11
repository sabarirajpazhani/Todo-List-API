exports.getTodoGeting = (req,res,next)=>{

    res.json({
        success:true,
        message:"Geting Route is working"
    })
}

exports.getTodoSingle=(req,res,next)=>{
    res.json({
        success:true,
        message:"Single todo is working"
    })
}