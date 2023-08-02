var express = require("express");
var router = express.Router();
var { checkAuthenticated, checkNotAuthenticated } = require("../middleware");
var Category = require("../models/category");
const Service = require("../models/service");
const Booking = require("../models/booking");
const User = require("../models/user");
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
const app = express();

// app.js or index.js

const session = require('express-session');
const flash = require('express-flash');
const userVerificationMiddleware = require('../middleware');



// Express session setup
app.use(session({
  secret: 'your-secret-session-key',
  resave: false,
  saveUninitialized: true,
}));

// Express flash setup
app.use(flash());

// ... other middlewares

// Step 4: Apply the userVerificationMiddleware to the registration route
const authRoutes = require('./auth'); // Replace with your authentication routes file
app.use('/auth', authRoutes);


/*
 *
 * GET ROUTES
 *
 */

/* GET register page. */
router.get("/register", checkNotAuthenticated, function (req, res, next) {
  res.render("register", {
    title: "Register",
    flash: req.flash(), // Pass the flash messages to the view
  });
});


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "TaskGenie" });
});

/* GET login page. */
router.get("/login", checkNotAuthenticated, function (req, res, next) {
  res.render("login", { title: "Login" });
});

/* GET register page. */
router.get("/register", checkNotAuthenticated, function (req, res, next) {
  res.render("register", { title: "Register" });
});

/* GET customer dashboard page. */
router.get(
  "/customer-dashboard",
  checkAuthenticated,
  async function (req, res, next) {
    try {
      var categories = await Category.find().lean();
    } catch (error) {
      console.log(error);
    }
    res.render("customer-dashboard", { title: "Home", categories: categories });
  }
);

/* GET pro dashboard page. */
router.get(
  "/pro-dashboard",
  checkAuthenticated,
  async function (req, res, next) {
    res.render("pro-dashboard", { title: "Home" });
  }
);

/* GET self-service page. */
router.get("/self-service", checkAuthenticated, function (req, res, next) {
  res.render("self-service", { title: "self-service" });
});

/* GET register-pro page. */
router.get("/register-pro", async function (req, res, next) {
  try {
    var categories = await Category.find().lean();
  } catch (error) {
    console.log(error);
  }
  res.render("register-pro", { title: "Register", categories: categories });
});

/* GET services page. */
router.get("/services", checkAuthenticated, async function (req, res, next) {
  var details = req.query;
  var category = details.category;

  try {
    var all_services = await Service.find()
      .populate("category")
      .populate("provider")
      .lean();

    // 2 find all services with category name
    var services_under_category = all_services.filter(
      (filtered) => filtered.category["name"] == category
    );
  } catch (error) {
    console.log(error);
  }

  // 3. send to fronted
  res.render("services", {
    title: "Services",
    services: services_under_category,
  });
});

/* GET pro profile page. */
router.get("/pro-profile", checkAuthenticated, function (req, res, next) {
  const userInfo = req.user;
  res.render("pro-profile", { title: "Profile", userInfo: userInfo });
});

/* GET categories page. */
router.get("/categories", async function (req, res, next) {
  try {
    var categories = await Category.find().lean();
  } catch (error) {
    console.log(error);
  }
  res.render("categories", { title: "Categories", categories: categories });
});

/* GET jobs page. */
router.get("/jobs", checkAuthenticated, async function (req, res, next) {
  try {
    var bookings = await Booking.find()
      .populate("serviceId")
      .populate("providerId")
      .lean();
  } catch (error) {
    return res.send({ code: 500, status: "error", message: "System error" });
  }
  res.render("jobs", {
    title: "Jobs",
    bookings: bookings,
  });
});

/* GET pro jobs page. */
router.get("/pro-jobs", checkAuthenticated, async function (req, res, next) {
  const userInfo = req.user._id;
  try {
    var bookings = await Booking.find({ providerId: userInfo._id })
      .populate("userId")
      .populate("serviceId")
      .lean();
  } catch (err) {}
  res.render("pro-jobs", { title: "Jobs", bookings: bookings });
});

/* GET pro services page. */
router.get(
  "/pro-services",
  checkAuthenticated,
  async function (req, res, next) {
    const userId = req.user._id;
    try {
      const userInfo = await User.findById(userId)
        .populate("serviceCategory")
        .lean();
      var userCategory = userInfo.serviceCategory.name;

      var services = await Service.find({ provider: userId })
        .populate("category")
        .lean();
    } catch (error) {
      console.log(error);
    }

    res.render("pro-services", {
      title: "Services",
      userCategory: userCategory,
      services: services,
    });
  }
);

router.get("/change-job-status", checkAuthenticated, async function (req, res) {
  var query = req.query;
  try {
    if (!query || !query.status || !query.id) {
      return res.send("Missing values");
    } else {
      await Booking.findOneAndUpdate(
        { bookingId: query.id },
        { status: query.status }
      );
    }
  } catch (error) {
    console.log("An error occurred while updatimg the status of the job", err);
  }

  return res.redirect("/jobs");
});

/************************************************************************************* */

/*
 *
 * POST ROUTES
 *
 */

/* Book Service */
router.post("/book-service", async function (req, res) {
  var details = req.body;
  var serviceDetails = await Service.findById(details.serviceId);

  try {
    var booking = new Booking({
      bookingId: Date.now(),
      userId: req.user._id,
      serviceId: details.serviceId,
      serviceCategory: serviceDetails.category,
      providerId: serviceDetails.provider,
      bookingDate: details.bookingDate,
      bookingTime: details.bookingTime,
      durationInHours: details.durationInHours,
      address: details.address,
      contactNumber: details.contactNumber,
      additionalNotes: details.additionalNotes,
    });
    await booking.save();

    return res.send({
      code: 200,
      status: "success",
      message: "Service has been succesfully booked",
    });
  } catch (error) {
    console.log("There was an error booking this servcice", error);
    return res.send({ code: 500, status: "error", message: "System error" });
  }
});

router.post("/add-service", async function (req, res) {
  const details = req.body;
  const userInfo = req.user;

  try {
    var service = new Service({
      title: details.serviceTitle,
      description: details.serviceDescription,
      category: userInfo.serviceCategory,
      location: details.serviceLocation,
      price: details.servicePrice.toString(),
      provider: userInfo._id,
    });
    await service.save();

    return res.send({
      code: 200,
      status: "success",
      message: "Service has been succesfully added",
    });
  } catch (error) {
    console.log("There was an error adding this servcice", error);
    return res.send({ code: 500, status: "error", message: "System error" });
  }
});

router.post("/update-profile", async function (req, res) {
  const details = req.body;
  const userInfo = req.user;

  try {
    await User.findOneAndUpdate(
      { _id: userInfo._id },
      {
        name: details.fname,
        yearsOfExperience: details.yearsOfExperience,
        email: details.email,
        telephone: details.telephone,
        bio: details.bio,
      }
    );

    return res.send({
      code: 200,
      status: "success",
      message: "User profile has been succesfully updated",
    });
  } catch (error) {
    console.log("There was an error adding this service", error);
    return res.send({ code: 500, status: "error", message: "System error" });
  }
});

router.post("/get-steps", async function (req, res) {
  var details = req.body;
  var url = "https://api.openai.com/v1/chat/completions";

  try {
    var options = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      method: "POST",
      url: url,
      data: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `${details.message} how? Return the response in markdown format(If the question asked does not fall into the categories of grocery and errand services, home cleaning and organization, handyman and repairs, personal assistance, pet care services, yard and outdoor services, home improvement and renovation, health and wellness services,event services or technology services return the response: "This question does not fall under the service categories we offer. Please enter an appropriate promt. Thank you." )`,
          },
        ],
        temperature: 0.7,
      },
    };
    var response = await axios(options);
    //console.log(response)
    var message = response.data.choices[0].message.content;
  } catch (err) {
    console.error(`Error getting response from CHATGPT`, err);
    return res.send({
      code: 500,
      status: "failed",
      message: "There was an error processing your request",
    });
  }

  return res.send({ code: 200, status: "success", message: message });
});
/************************************************************************************* */

module.exports = router;
