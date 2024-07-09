const Mongoose = require("mongoose");
require("dotenv").config();// jo bhi .env m define kiya hoga wo sara load hojayega process k andar

const dbConnect = ()=>{
    Mongoose.connect(process.env.DATABASE_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
    })
    .then(()=> console.log("Db connection is successfull")) // this is promis thats why then
    .catch((error)=>{
        console.log("issue in Database")
        console.error(error.message);
        process.exit(1);

    });


}

module.exports  = dbConnect;