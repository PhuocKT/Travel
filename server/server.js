const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Destination = require("./models/Destination");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// cho phép serve ảnh từ thư mục public/images
app.use("/images", express.static("public/images"));

mongoose.connect("mongodb+srv://hoanphuoc20021208:abcdefg@createcluster.d9tdpy9.mongodb.net/travelDB?retryWrites=true&w=majority")

    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.log("❌ MongoDB connection error:", err));

    // API lấy tất cả destinations
    app.get("/api/destinations", async (req, res) => {
    try {
        const data = await Destination.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Lỗi server" });
    }
    });

    app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
    });
