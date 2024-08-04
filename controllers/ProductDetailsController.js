import StudentModel from "../models/student.js";

const ProductDetailsController = async (req, res)=>{
    const productId = req.params.id;
    const detailData = await StudentModel.findById(productId);
    res.render('productDetail',{ detailData})
}

export {ProductDetailsController}