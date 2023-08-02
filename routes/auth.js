var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
const User = require("../models/user");
const Category = require("../models/category");
const passport = require("passport");
require("dotenv").config();
const saltRounds = 10;
const userVerificationMiddleware = require('../middleware');
// routes/auth.js








router.post("/register",  async function (req, res, next) {
  var details = req.body;
  const errors = [];
  (details.name ||
    details.telephone ||
    details.userType ||
    details.email ||
    details.password ||
    details.consfirmPassword ||
    details.location) == undefined
    ? errors.push("Complete all fields")
    : console.log("All fields completed");

   (details.userType == "customer" || details.userType == "pro") ? console.log("Correct user type passed") : errors.push("User type does not exist in db")

  details.userType == "pro" &&
  (details.specialty || details.experience) == undefined
    ? errors.push(
        "Specialty and Experience fieldds left out of Pro registration"
      )
    : console.log("All fields completed");

  var emailExists = await User.findOne({ email: details.email }).lean();
  emailExists == null
    ? console.log("User does not exist")
    : errors.push("Email already exists");
  const passwordCompareResult = details.password.localeCompare(
    details.confirmPassword
  );
  passwordCompareResult == 0
    ? "confirm password and password match success"
    : errors.push("Passwords do not match");

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(details.password, salt);
    const category = await Category.findOne({name: details.specialty}).lean();
    details.userType == "pro" ? (category == null ? errors.push("Specialty does not exist") : console.log("Specialty exists in db")): console.log("User is not a pro")

    //check if email already exists
    const user = new User({
      name: details.name.toUpperCase(),
      telephone: details.telephone,
      serviceCategory: category ? category._id : undefined,
      yearsOfExperience: details.experience,
      userType: details.userType,
      email: details.email,
      password: hashedPassword,
      location: details.location,
    });

 
    if (errors.length > 0) {
      // If there are errors, set the flash error message
      req.flash("error", errors);
      return res.redirect("/register"); // Redirect back to the registration page
    } else {
      await user.save();
      req.flash("success", "Registration successful!"); // Set a success flash message
      return res.redirect("/login"); // Redirect to the login page
    }
  } catch (error) {
    console.log("Error saving user", error);
  }
});


router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }), function(req, res){
    req.user.userType == "customer" ? res.redirect('/customer-dashboard') : res.redirect('/pro-dashboard')
  }
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});



module.exports = router;
