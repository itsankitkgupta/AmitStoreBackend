const mongoose = require("mongoose")
MONGODB_URI= "mongodb+srv://ankitkumar132962:zvfG6bLFVE9difqm@amitstore.3vd2x3c.mongodb.net/MERN_Ecommerce?retryWrites=true&w=majority&appName=AmitStore"

async function connectDB(){
    try{
        await mongoose.connect(MONGODB_URI)
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB