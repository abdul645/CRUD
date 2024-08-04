import mongoose from "mongoose";

// defining schema 
const userSingupSchema = new mongoose.Schema({
    UserName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        trim:true,
        unique: true
    },
    Password:{
        type: String,
        required: true,
        
    },
    ConfirmPassword: {
        type: String,
        required: true, 
       
    }
})


// compiling schema 
const usersignupModel = mongoose.model('UserSignupDetail', userSingupSchema)

export default usersignupModel


