const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["customer", "delivery", "store"],
    required: true,
  },
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  storeName: String,  // only for stores
});

module.exports = mongoose.model("User", userSchema);
