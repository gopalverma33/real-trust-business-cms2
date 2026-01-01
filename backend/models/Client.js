const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: String,
  description: String,
  designation: String,
  image: String,
});

module.exports = mongoose.model("Client", clientSchema);
