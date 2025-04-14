const User = require("../models/User");

const registerUser = async (req, res) => {
  const { role, name, email, password, phone, address, storeName } = req.body;

  try {
    const user = new User({
      role,
      name,
      email,
      password,
      phone,
      address,
      storeName: role === "store" ? storeName : null,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully", user });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to register user" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to log in" });
  }
};

module.exports = { registerUser, loginUser };
