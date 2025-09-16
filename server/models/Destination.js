const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
    destTitle: String,
    location: String,
    grade: String,
    fees: String,
    description: String,
    imgSrc: String
});

module.exports = mongoose.model("Destination", destinationSchema);
