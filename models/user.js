const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

  email: {
    type: String,
    required: true
},
  telephone: {
    type: String,
    required: true
},
  location: {
    type: String,
    required: true
},
  serviceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  yearsOfExperience: {
    type: String,
},
  password: {
    type: String,
    required: true
},
  name: {
    type: String,
    required: true
},
  userType: {
    type: String,
    required: true
},
bio: {
  type: String
}


});

module.exports = mongoose.model('User', userSchema);