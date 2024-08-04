import mongoose from "mongoose";

// defining schema 
const adminSingupSchema = new mongoose.Schema({
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
    ContactNumber:{
        type:String,
        required:true,
        unique:true
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
const adminSignupModel = mongoose.model('adminSignupDetail', adminSingupSchema)

export default adminSignupModel


