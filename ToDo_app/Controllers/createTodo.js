// import
const Todo = require("../models/To_do");

//route handler

exports.createTodo = async(req, res)=>{
    try{
          //abstract  title and desc
          const {title, description} = req.body;
          // create new ob and insert in db
          const response = await Todo.create({title, description});
          //send json res with success flag
          res.status(200).json(
            {
                success: true,
                data: response,
                message: "entry created"
            }
          )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            data: "Internal server error",
            message: err.message,
        })

    }
}