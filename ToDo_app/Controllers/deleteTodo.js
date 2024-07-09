const Todo = require("../models/To_do");

exports.deleteTodo = async(req, res) =>{

    try{
        const {id} = req.params;
        
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json(
            {
                success: true,
                data:todo,
                message: "deleted Successfully",
            }
        )

    }
    catch(error){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error:err.message,
            message: "server error",
        });

    }
   

}