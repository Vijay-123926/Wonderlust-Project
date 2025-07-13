const express = require("express");
const router= express.Router();
const user= require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("/home/vijay/Desktop/Majorp/controllers/users.js");

// signup form && signup
router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post( wrapAsync(userController.signup)
);

// login form && login
router
        .route("/login")
        .get(userController.renderLoginForm)
        .post(saveRedirectUrl,passport.authenticate
        ("local",{failureRedirect: "/login", failureFlash: true}), 
        userController.Login
);

// logout
router.get("/logout",userController.Logout);

module.exports= router;