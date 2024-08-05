
import usersignupModel from "../models/userSignup.js"
const userSignupController1 = async (req, res) => {

    try {
        console.log('Received data:', req.body);
        
        // Destructure the data from the request body
        const { username, email, password, cpassword } = req.body;
        
        // Creating a new instance of  model
        const doc = new usersignupModel({
            UserName: username,
            email: email,
            Password: password,
            ConfirmPassword: cpassword

        })
       
        // Save the data to the database
        const result = await doc.save();
        res.redirect('/userPanel');       
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export { userSignupController1 }
