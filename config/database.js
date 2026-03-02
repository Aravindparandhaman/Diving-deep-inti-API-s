const mongoose = require("mongoose");




const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://Aravinnd:CsGunnBeMuznKNR6@cluster0.4yvluuo.mongodb.net/DB")
}


module.exports = connectDB;