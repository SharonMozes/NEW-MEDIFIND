import React, { useState } from "react";

const StoreDashboard = () => {
  const [editing, setEditing] = useState(false);
  const [store, setStore] = useState({
    storeName: "MediCare Pharmacy",
    email: "store@medicare.com",
    phone: "9988776655",
    address: "45 Health St, City",
    licenseNumber: "LIC123456",
  });

  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("✅ Profile updated successfully!");
    setEditing(false);
  };

  return (
    <div style={styles.container}>
      <h2>🏪 Welcome, {store.storeName}</h2>

      <div style={styles.card}>
        <h3>📝 My Store Info</h3>
        {editing ? (
          <div style={styles.form}>
            <input
              type="text"
              name="storeName"
              value={store.storeName}
              onChange={handleChange}
              placeholder="Store Name"
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              value={store.email}
              onChange={handleChange}
              placeholder="Email"
              style={styles.input}
              
            />
            <input
              type="tel"
              name="phone"
              value={store.phone}
              onChange={handleChange}
              placeholder="Phone"
              style={styles.input}
            />
            <input
              type="text"
              name="address"
              value={store.address}
              onChange={handleChange}
              placeholder="Address"
              style={styles.input}
            />
            <input
              type="text"
              name="licenseNumber"
              value={store.licenseNumber}
              onChange={handleChange}
              placeholder="License Number"
              style={styles.input}
            />
            <button onClick={handleSave} style={styles.button}>
              Save Changes
            </button>
          </div>
        ) : (
          <div>
            <p><strong>Store Name:</strong> {store.storeName}</p>
            <p><strong>Email:</strong> {store.email}</p>
            <p><strong>Phone:</strong> {store.phone}</p>
            <p><strong>Address:</strong> {store.address}</p>
            <p><strong>License No:</strong> {store.licenseNumber}</p>
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

export default StoreDashboard;
