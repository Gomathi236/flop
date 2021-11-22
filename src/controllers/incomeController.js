 let getIncomePage = (req,res) =>{
    return res.render("income.ejs");
};



let addSource =(req,res,next) =>{
    if(req.isAuthenticated()){
        return(res.redirect("/addsourceController"))
    }
}

module.exports = {
    getIncomePage:getIncomePage,
    addSource:addSource
}