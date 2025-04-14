import React, { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("customer");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registered as a ${role}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" required /><br /><br />
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />

        <label>Select Role:</label><br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="delivery">Delivery Boy</option>
          <option value="store">Medical Store</option>
        </select><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
