import React, { useState } from "react";
import axios from "axios";
import Header from "../component/Header";

const Home = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("⚠️ Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("prescription", file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/prescription/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage("✅ Upload successful!");
      console.log("🧾 File info:", response.data);
    } catch (error) {
      console.error("❌ Upload error:", error);
      setMessage("❌ Upload failed. Please try again.");
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to MediFind</h1>
        <p style={styles.heroSub}>
          Upload your prescription and get your medicines delivered to your door!
        </p>
        <img
          src="https://i.pinimg.com/originals/91/22/b1/9122b11c4a355f05d41d223bfc49531d.gif"
          alt="hero"
          style={styles.heroImage}
        />
      </section>

      {/* Upload Section */}
      <section style={styles.uploadSection}>
        <h2>Upload Your Prescription</h2>
        <input type="file" style={styles.fileInput} onChange={handleFileChange} />
        <br />
        <button style={styles.uploadBtn} onClick={handleUpload}>Upload</button>
        {message && <p style={{ marginTop: "10px", color: "#333" }}>{message}</p>}
      </section>

      <footer style={styles.footer}>
        <p>© 2025 MediConnect. All rights reserved.</p>
      </footer>
    </>
  );
};

const styles = {
  hero: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
  },
  heroTitle: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  heroSub: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  heroImage: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  uploadSection: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#ffffff",
  },
  fileInput: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  uploadBtn: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    marginTop: "40px",
  },
};

export default Home;
