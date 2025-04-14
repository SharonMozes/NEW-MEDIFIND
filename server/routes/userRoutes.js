const express = require("express");
const router = express.Router();

const Customer = require("../models/Customer");
const DeliveryBoy = require("../models/DeliveryBoy");
const MedicalStore = require("../models/MedicalStore");


// 🔐 LOGIN ROUTES ----------------------------------

// Customer Login
router.post("/login/customer", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Customer.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid credentials");
    }
    res.send("Customer login successful ✅");
  } catch (err) {
    res.status(500).send("Error logging in: " + err.message);
  }
});

// Delivery Boy Login
router.post("/login/delivery", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await DeliveryBoy.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid credentials");
    }
    res.send("Delivery login successful ✅");
  } catch (err) {
    res.status(500).send("Error logging in: " + err.message);
  }
});

// Medical Store Login
router.post("/login/store", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await MedicalStore.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid credentials");
    }
    res.send("Store login successful ✅");
  } catch (err) {
    res.status(500).send("Error logging in: " + err.message);
  }
});

// Admin Login (Hardcoded)
router.post("/login/admin", (req, res) => {
  const { email, password } = req.body;

  // 🔐 Hardcoded admin credentials
  if (email === "admin@example.com" && password === "admin123") {
    return res.send("Admin login successful ✅");
  }
  res.status(401).send("Invalid admin credentials ❌");
});


// 📝 REGISTRATION ROUTES ----------------------------

// Customer Registration
router.post("/register/customer", async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).send("Customer registered");
  } catch (err) {
    res.status(400).send("Error registering customer: " + err.message);
  }
});

// Delivery Boy Registration
router.post("/register/delivery", async (req, res) => {
  try {
    const newDelivery = new DeliveryBoy(req.body);
    await newDelivery.save();
    res.status(201).send("Delivery boy registered");
  } catch (err) {
    res.status(400).send("Error registering delivery boy: " + err.message);
  }
});

// Medical Store Registration
router.post("/register/store", async (req, res) => {
  try {
    const newStore = new MedicalStore(req.body);
    await newStore.save();
    res.status(201).send("Medical store registered");
  } catch (err) {
    res.status(400).send("Error registering medical store: " + err.message);
  }
});



// Get all customers
router.get("/all/customers", async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).send("Error fetching customers: " + err.message);
    }
  });
  
  // Get all delivery boys
  router.get("/all/delivery", async (req, res) => {
    try {
      const deliveryBoys = await DeliveryBoy.find();
      res.status(200).json(deliveryBoys);
    } catch (err) {
      res.status(500).send("Error fetching delivery boys: " + err.message);
    }
  });
  
  // Get all medical stores
  router.get("/all/stores", async (req, res) => {
    try {
      const stores = await MedicalStore.find();
      res.status(200).json(stores);
    } catch (err) {
      res.status(500).send("Error fetching medical stores: " + err.message);
    }
  });

  // DELETE by type and ID
router.delete("/delete/:type/:id", async (req, res) => {
    const { type, id } = req.params;
    try {
      let Model;
      if (type === "customer") Model = Customer;
      else if (type === "delivery") Model = DeliveryBoy;
      else if (type === "store") Model = MedicalStore;
      else return res.status(400).send("Invalid type");
  
      const result = await Model.findByIdAndDelete(id);
      if (!result) return res.status(404).send("User not found");
  
      res.send("Deleted successfully");
    } catch (err) {
      res.status(500).send("Error deleting: " + err.message);
    }
  });
  

  module.exports = router;