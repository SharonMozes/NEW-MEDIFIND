const mongoose = require("mongoose");

const deliveryBoySchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  vehicleNumber: String,
  phone: String,
});

module.exports = mongoose.model("DeliveryBoy", deliveryBoySchema);
