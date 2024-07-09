// import
const Todo = require("../models/To_do");

//route handler

exports.getTodo = async(req, res)=>{
    try{
        // fetch all to do items from database
        const todos = await Todo.find({});

        //response

        res.status(200)
        .json({
            success: true,
            data:todos,
            message: "Entire todo data is fetched"
        })

        
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error:err.message,
            message: "server error",
        })
       
   
    }
}

exports.getTodoById = async(req, res) =>{
    try{
        //anstract to do iteam by id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message : "NO data found"
            })
        }
        // data found
        res.status(200).json({
            success: true,
            data: todo,
            message: "To do found"
        });
        
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error:err.message,
            message: "server error",
        });
       
   
    }

}