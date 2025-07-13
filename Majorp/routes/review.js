const express = require("express");
const router= express.Router({mergeParams: true});
const wrapAsync=require("/home/vijay/Desktop/Majorp/utils/wrapAsync.js");
const ExpressError=require("/home/vijay/Desktop/Majorp/utils/ExpressError.js");
const Review = require("/home/vijay/Desktop/Majorp/models/review.js");
const Listing = require("/home/vijay/Desktop/Majorp/models/listing.js");
const {validateReview ,isLoggedIn , isReviewAuthor}= require("/home/vijay/Desktop/Majorp/middleware.js");
const reviewController= require("/home/vijay/Desktop/Majorp/controllers/reviews.js");


// reviews
// post review route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// delete review route
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports=router;