import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // 1. Check Admin
    if (email === "admin@example.com" && password === "admin123") {
      alert("✅ Logged in as Admin");
      navigate("/dashboard/admin");
      return;
    }

    try {
      // 2. Try Customer Login
      await axios.post("http://localhost:5000/api/users/login/customer", {
        email,
        password,
      });
      alert("✅ Logged in as Customer");
      navigate("/dashboard/customer");
      return;
    } catch (err1) {
      try {
        // 3. Try Delivery Login
        await axios.post("http://localhost:5000/api/users/login/delivery", {
          email,
          password,
        });
        alert("✅ Logged in as Delivery Boy");
        navigate("/dashboard/delivery");
        return;
      } catch (err2) {
        try {
          // 4. Try Medical Store Login
          await axios.post("http://localhost:5000/api/users/login/store", {
            email,
            password,
          });
          alert("✅ Logged in as Medical Store");
          navigate("/dashboard/store");
          return;
        } catch (err3) {
          alert("❌ Invalid credentials for all user types");
        }
      }
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.loginContainer}>
        <h2 style={styles.header}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: "#FFE2D6", // Full-page light peach background
    height: "100vh", // Ensure the page covers full height of the viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  loginContainer: {
    backgroundColor: "#fff", // White background for the login container
    padding: "40px",
    borderRadius: "10px", // Rounded corners for a soft look
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow for depth
    width: "100%",
    maxWidth: "400px", // Limit the container's width
    textAlign: "center",
  },
  header: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#333", // Dark color for the header text
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box", // To include padding in the width calculation
  },
  button: {
    padding: "12px",
    backgroundColor: "#004d00", // Dark green button color
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    transition: "background-color 0.3s ease", // Button hover effect
  },
  buttonHover: {
    backgroundColor: "#003b00", // Darker green on hover
  },
};

export default Login;
