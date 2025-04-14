// routes/prescription.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Ensure uploads folder exists
if (!fs.existsSync("./uploads")) fs.mkdirSync("./uploads");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("prescription"), (req, res) => {
  if (!req.file) {
    console.log("❌ No file uploaded");
    return res.status(400).send("No file uploaded");
  }

  console.log("✅ File uploaded:", req.file);

  res.status(200).json({
    message: "File uploaded successfully",
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
});

module.exports = router;
