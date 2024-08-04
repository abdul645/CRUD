import mongoose from "mongoose";

//defining schema 
const StudentSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const StudentModel = mongoose.model('student', StudentSchema)

export default StudentModel