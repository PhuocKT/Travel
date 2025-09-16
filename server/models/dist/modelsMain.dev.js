"use strict";

var mongoose = require("mongoose");

var destinationSchema = new mongoose.Schema({
  destTitle: String,
  location: String,
  grade: String,
  fees: String,
  description: String,
  imgSrc: String
});
module.exports = mongoose.model("Destination", destinationSchema);
//# sourceMappingURL=modelsMain.dev.js.map
