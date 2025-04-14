import React, { useState } from "react";
import axios from "axios";

const RegisterDelivery = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register/delivery", formData);
      alert("Delivery Boy Registered Successfully!");
    } catch (err) {
      console.error(err);
      alert("Registration failed.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register as Delivery Boy</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" style={styles.input} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" style={styles.input} onChange={handleChange} />
        <input name="phone" type="tel" placeholder="Phone Number" style={styles.input} onChange={handleChange} />
        <input name="vehicleNumber" placeholder="Vehicle Number" style={styles.input} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" style={styles.input} onChange={handleChange} />
        <button style={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default RegisterDelivery;
