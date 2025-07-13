const user= require("../models/user.js");

module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signup=async(req,res)=>{
    try{
    let{username, email, password}= req.body;
    const newUser= new user({username, email});
    const registeredUser= await user.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err)=>{
        if(err) {
            return next(err);
        }
        req.flash("success", "Welcome to wonderlust");
        res.redirect("/listings");
    });
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
    };

    module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
};

module.exports.Login=async(req,res)=>
    {
    req.flash("success"," Welcome back to wonderlust!");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
    };

module.exports.Logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","Logged out successfully!");
        res.redirect("/listings");
    });
};