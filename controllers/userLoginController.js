import usersignupModel from "../models/userSignup.js"
const userLoginController = async (req, res) => {
    try {
        // Attempt to find a user based on UserName
        let check = await usersignupModel.findOne({ UserName: req.body.UserName })

        // If user is found and password matches
        if (check && check.Password == req.body.password) {

             // Redirect to homeRide
            res.redirect('/userPanel')
            
        }
        else{
            // Handle case where user or password is incorrect
            return res.send("Wrong password or user not found");
        }
        // console.log(check);
    } catch (error) {
        // console.log(error);
        return res.status(500).send("Internal server error");
    }
}
export { userLoginController }




