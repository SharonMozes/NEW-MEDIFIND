const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  storeName: String,
  email: { type: String, unique: true },
  password: String,
  licenseNumber: String,
  address: String,
  phone: String,
});

module.exports = mongoose.model("MedicalStore", storeSchema);
