"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var Destination = require("./models/Destination");

var app = express();
var PORT = 5000;
app.use(cors());
app.use(express.json()); // cho phép serve ảnh từ thư mục public/images

app.use("/images", express["static"]("public/images"));
mongoose.connect("mongodb+srv://hoanphuoc20021208:abcdefg@createcluster.d9tdpy9.mongodb.net/travelDB?retryWrites=true&w=majority").then(function () {
  return console.log("✅ MongoDB connected");
})["catch"](function (err) {
  return console.log("❌ MongoDB connection error:", err);
}); // API lấy tất cả destinations

app.get("/api/destinations", function _callee(req, res) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Destination.find());

        case 3:
          data = _context.sent;
          res.json(data);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: "Lỗi server"
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.listen(PORT, function () {
  console.log("\uD83D\uDE80 Server ch\u1EA1y t\u1EA1i http://localhost:".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
