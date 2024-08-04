
import StudentModel from "../models/student.js"

class userPanelController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find();
            // console.log(result)
            res.render("userPanel", { data: result })
        }
        catch (err) {
            console.log(err)
        }
    }

}

export default userPanelController

