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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
