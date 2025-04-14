import React, { useEffect, useState } from "react";
import CustomerHeader from "../component/CustomerHeader";
import axios from "axios";

const CustomerDashboard = () => {
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch logged-in user from backend using token
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/customers/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };
    fetchUser();
  }, []);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return setMessage("Please select a file.");

    const formData = new FormData();
    formData.append("prescription", file);

    try {
      await axios.post("http://localhost:5000/api/prescription/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Upload successful!");
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload failed. Try again.");
    }
  };

  return (
    <>
      <CustomerHeader />
      <div style={styles.container}>
        {/* Sidebar with customer info */}
        <div style={styles.sidebar}>
          <h3>👤 Customer Info</h3>
          {user ? (
            <>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Main dashboard area */}
        <div style={styles.main}>
          <h1>Welcome{user ? `, ${user.name}` : ""}!</h1>
          <p>Upload your prescription to get your medicines delivered!</p>

          <section style={styles.uploadSection}>
            <h3>Upload Prescription</h3>
            <input type="file" onChange={handleFileChange} style={styles.fileInput} />
            <br />
            <button onClick={handleUpload} style={styles.uploadBtn}>
              Upload
            </button>
            {message && <p style={styles.message}>{message}</p>}
          </section>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
  },
  sidebar: {
    width: "260px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },
  main: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#f9f9f9",
  },
  uploadSection: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    marginTop: "30px",
    textAlign: "center",
  },
  fileInput: {
    margin: "15px 0",
  },
  uploadBtn: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    color: "#333",
  },
};

export default CustomerDashboard;
