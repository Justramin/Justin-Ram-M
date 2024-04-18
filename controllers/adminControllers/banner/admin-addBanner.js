


const admin_addBanner = async (req,res)=>{
    try {
        if(req.session.isAdminAuth){
            res.render('admin-addBanner')
        }else{
            res.redirect('/admin/admin-login')
        }
    } catch (error) {
        console.error('Error in admin_addBanner:', error);
        res.status(500).send('Internal Server Error');
    }   
}


module.exports = {
    admin_addBanner
}