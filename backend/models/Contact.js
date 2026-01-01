const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobile: String,
  city: String,
});

module.exports = mongoose.model("Contact", contactSchema);
