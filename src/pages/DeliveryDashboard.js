import React, { useState } from "react";

const DeliveryDashboard = () => {
  const [editing, setEditing] = useState(false);
  const [deliveryBoy, setDeliveryBoy] = useState({
    name: "Ravi Kumar",
    email: "ravi@delivery.com",
    phone: "9876543210",
    vehicleNumber: "KA05AB1234",
  });

  const handleChange = (e) => {
    setDeliveryBoy({ ...deliveryBoy, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("✅ Profile updated successfully!");
    setEditing(false);
  };

  return (
    <div style={styles.container}>
      <h2>🚴 Welcome, {deliveryBoy.name}</h2>

      <div style={styles.card}>
        <h3>📝 My Profile</h3>
        {editing ? (
          <div style={styles.form}>
            <input
              type="text"
              name="name"
              value={deliveryBoy.name}
              onChange={handleChange}
              placeholder="Full Name"
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              value={deliveryBoy.email}
              onChange={handleChange}
              placeholder="Email"
              style={styles.input}
              
            />
            <input
              type="tel"
              name="phone"
              value={deliveryBoy.phone}
              onChange={handleChange}
              placeholder="Phone"
              style={styles.input}
            />
            <input
              type="text"
              name="vehicleNumber"
              value={deliveryBoy.vehicleNumber}
              onChange={handleChange}
              placeholder="Vehicle Number"
              style={styles.input}
            />
            <button onClick={handleSave} style={styles.button}>
              Save Changes
            </button>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {deliveryBoy.name}</p>
            <p><strong>Email:</strong> {deliveryBoy.email}</p>
            <p><strong>Phone:</strong> {deliveryBoy.phone}</p>
            <p><strong>Vehicle No:</strong> {deliveryBoy.vehicleNumber}</p>
            <button onClick={() => setEditing(true)} style={styles.button}>
              Edit Profile
            </button>
          </div>
        )}
      </div>

      <div style={styles.card}>
        <h3>🚪 Logout</h3>
        <button style={{ ...styles.button, backgroundColor: "#dc3545" }}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  card: {
    background: "#f1f1f1",
    padding: "20px",
    margin: "20px 0",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
};

export default DeliveryDashboard;
