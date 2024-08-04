const adminLoginFormController = (req, res)=>{
    res.render('adminLogin',{'title': 'Sign in'})
}

export { adminLoginFormController }