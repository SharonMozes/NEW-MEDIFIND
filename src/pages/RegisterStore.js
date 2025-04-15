import React, { useState } from "react";
import axios from "axios";

const RegisterStore = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation - check if all fields are filled
    const { storeName, email, phone, licenseNumber, address, password } = formData;
    if (!storeName || !email || !phone || !licenseNumber || !address || !password) {
      alert("❌ Please fill out all fields.");
      return; // Stop form submission if any field is empty
    }

    try {
      await axios.post("http://localhost:5000/api/users/register/store", formData);
      alert("Medical Store Registered Successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Registration failed.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.header}>Register as Medical Store</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            name="storeName"
            placeholder="Store Name"
            style={styles.input}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            style={styles.input}
            onChange={handleChange}
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            style={styles.input}
            onChange={handleChange}
          />
          <input
            name="licenseNumber"
            placeholder="Store License Number"
            style={styles.input}
            onChange={handleChange}
          />
          <input
            name="address"
            placeholder="Address"
            style={styles.input}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            style={styles.input}
            onChange={handleChange}
          />
          <button style={styles.button} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#FFE2D6", // Full-page light peach background
    height: "100vh", // Full page height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif", // Font style
  },
  container: {
    backgroundColor: "#fff", // White background for the form container
    padding: "40px",
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for depth
    width: "100%",
    maxWidth: "400px", // Maximum width for the form
    textAlign: "center",
  },
  header: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333", // Dark text for the header
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px", // Space between form elements
  },
  input: {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box", // Includes padding in width calculation
  },
  button: {
    padding: "12px",
    backgroundColor: "#004d00", // Dark green button color
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%", // Full width button
    transition: "background-color 0.3s ease", // Hover effect
  },
};

export default RegisterStore;
