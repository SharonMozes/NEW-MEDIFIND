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

          {/* Prescription upload */}
          <section style={styles.uploadSection}>
            <h3>Upload Prescription</h3>
            <input type="file" onChange={handleFileChange} style={styles.fileInput} />
            <br />
            <button onClick={handleUpload} style={styles.uploadBtn}>
              Upload Prescription
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
    backgroundColor: "#FFE2D6", // Peach background for the entire page
    fontFamily: "'Arial', sans-serif", // Clean font
  },
  sidebar: {
    width: "260px",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRight: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for sidebar
  },
  main: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#fff", // White background for the main section
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for main content
  },
  uploadSection: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    marginTop: "30px",
    textAlign: "center",
    transition: "box-shadow 0.3s ease",
  },
  fileInput: {
    margin: "15px 0",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "80%",
    maxWidth: "300px",
    boxSizing: "border-box", // Include padding and border in width calculation
  },
  uploadBtn: {
    padding: "12px 20px",
    backgroundColor: "#007bff", // Blue button color
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    width: "80%", // Full width button
    maxWidth: "300px", // Constrained width
    marginTop: "10px",
  },
  uploadBtnHover: {
    backgroundColor: "#0056b3", // Darker blue on hover
  },
  message: {
    marginTop: "10px",
    color: "#333",
    fontSize: "14px",
  },
};

export default CustomerDashboard;
