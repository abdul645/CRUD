import express from 'express'
import { adminLoginFormController } from '../controllers/adminLoginFormController.js';
import { adminLoginController } from '../controllers/adminLoginController.js';
import { adminSignupFormController } from '../controllers/adminSignupFormController.js';
import AdminController from '../controllers/AdminController.js';
import { categoryController } from '../controllers/categoryController.js';
import { userLoginController } from '../controllers/userLoginController.js';
import { userSignupController } from '../controllers/userSignupController.js';
import { userSignupController1 } from '../controllers/userSignupController1.js';
import { adminSignupController } from '../controllers/adminSignupController.js';
import { userLoginFormController } from '../controllers/userLoginFormController.js';
import userPanelController from '../controllers/userPanelController.js';
// import productDetailsController from '../controllers/productDetailController.js';
import { ProductDetailsController } from '../controllers/ProductDetailsController.js';



import multer from "multer";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {  //cb- callback function
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

var upload = multer({ storage });



const router = express.Router();

router.get('/productDetails/:id', ProductDetailsController)

router.get('/', categoryController)

router.get('/userLogin', userLoginFormController)
router.post('/userLogin', userLoginController)

router.get('/userSignup', userSignupController)
router.post('/userSignup', userSignupController1)

router.get('/adminLogin', adminLoginFormController)
router.post('/adminLogin', adminLoginController)

router.get('/adminSignup', adminSignupFormController)
router.post('/adminSignup', adminSignupController)

router.get('/userPanel', userPanelController.getAllDoc)
// router.get('/productdetail', productDetailsController.getProductDetail)

router.get('/adminPanel', AdminController.getAllDoc)

router.post('/adminPanel', upload.single('fileName'), AdminController.createDoc)

router.get('/edit/:id', AdminController.editDoc)
router.post('/update/:id', AdminController.UpdateDocById)
router.post('/delete/:id', AdminController.deleteDocById)

export default router