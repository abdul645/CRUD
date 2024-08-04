import StudentModel from "../models/student.js"



class AdminController {
    static createDoc = async (req,res) =>{

         //to access form data
        console.log('Body:', req.body);
        console.log('File:', req.file);

        try {
            const {title,category,price,description} = req.body
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }
            const doc = new StudentModel({
                title:title,
                file: req.file.filename,
                category: category,
                description:description,
                price:price
            })
            // saving document
            const result = await doc.save();
            console.log(result);
            res.redirect("/adminPanel")
        } catch (error) {
            console.log(error);
        }
    }

    static getAllDoc = async (req,res) =>{
        try{
            const result = await StudentModel.find()
            // console.log(result)
            res.render("AdminPanel", {data: result})
        }
        catch(err){
            console.log(err)
        }
    }

    // show edit form with data 
    static editDoc = async (req,res) =>{
        // console.log(req.params.id);
        try {
            // findById is a Mongoose method used to find a single document by its unique identifier
            //  (ObjectId). It returns a Promise that resolves to the document if found,
            //  or null if no document is found with that ID.
            // req.params.id retrieves the value of the id parameter from the URL.
            // If a request is made to /students/456, req.params.id will be '456'.
            const result = await StudentModel.findById(req.params.id)
            // console.log(result);
            res.render("edit",{data: result})
            // This is an object passed to the template as local variables.
            // data is a variable name that will be available within the edit view/template.
            // result is the value assigned to data. In the context of your example, result is likely the data retrieved from a database or some other source.
        } catch (err) {
            console.log(err);
            
        }
    }

    static UpdateDocById =async (req,res) =>{
        // console.log(req.params.id);
        // console.log(req.body);

        try {
            // findByIdAndUpdate is a Mongoose method used to find a document by its ID and update it with new data.
            // req.body: This contains the new data to update the document with. It typically comes from the body of an HTTP request, such as a form submission or a JSON payload in a PUT or POST request.
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            // console.log(result);
        } catch (err) {
            console.log(err);
            
        }
        res.redirect("/adminPanel")
    }

    static deleteDocById = async (req,res) =>{
        console.log(req.params.id);
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
        } catch (err) {
            console.log(err);
            
        }
        res.redirect("/adminPanel")
    }
}


export default AdminController