

exports.checkAuthenticated = function(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }



// middleware/userVerification.js



const User = require("../models/user"); // Replace with your User model

const userVerificationMiddleware = async (req, res, next) => {
  const { email, username } = req.body;

  // Check if email or username already exist
  try {
    const existingUser = await User.findOne().or([{ email }, { username }]);
    if (existingUser) {
      req.flash('error', 'Email or username already exists.');
      res.render('register', { flash: req.flash() });
    }
  } catch (error) {
    console.error('Error during user verification:', error);
    req.flash('error', 'Something went wrong. Please try again later.');
    res.render('register', { flash: req.flash() });
  }

 // Password validation (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)
 const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
 if (!password.match(passwordPattern)) {
   req.flash('error', 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
   res.render('register', { flash: req.flash() });
 }


  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    req.flash('error', 'Invalid email address.');
    res.render('register', { flash: req.flash() });
  }

  // Phone validation (10 digits)
  const phonePattern = /^\d{10}$/;
  if (!phone.match(phonePattern)) {
    req.flash('error', 'Invalid phone number. Please enter a 10-digit number without spaces or dashes.');
    res.render('register', { flash: req.flash() });
  }


  // If everything is fine, move to the next middleware
  next();
};

module.exports = userVerificationMiddleware;


    res.redirect('/login')
}

exports.checkNotAuthenticated = function(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/dashboard');
    }



    next();
}