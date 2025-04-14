import React, { useState } from "react";
import axios from "axios";

import i18n from "i18next"; 
const Home = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage(i18n.t("selectFile")); 
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

      setMessage(i18n.t("uploadSuccessful"));
      console.log("🧾 File info:", response.data);
    } catch (error) {
      console.error("❌ Upload error:", error);
      setMessage(i18n.t("uploadFailed"));
    }
  };

  return (
    <>
    

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>{i18n.t("welcome")}</h1>
        <p style={styles.heroSub}>{i18n.t("heroDescription")}</p>
        <img
          src="https://i.pinimg.com/originals/91/22/b1/9122b11c4a355f05d41d223bfc49531d.gif"
          alt="hero"
          style={styles.heroImage}
        />
      </section>

      {/* Upload Section */}
      <section style={styles.uploadSection}>
        <h2>{i18n.t("uploadTitle")}</h2>
        <input type="file" style={styles.fileInput} onChange={handleFileChange} />
        <br />
        <button style={styles.uploadBtn} onClick={handleUpload}>{i18n.t("uploadBtn")}</button>
        {message && <p style={{ marginTop: "10px", color: "#333" }}>{message}</p>}
      </section>

      <footer style={styles.footer}>
        <p>{i18n.t("footerText")}</p>
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
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    textAlign: "center",
  },
  fileInput: {
    padding: "10px",
    marginBottom: "20px",
  },
  uploadBtn: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  footer: {
    backgroundColor: "#f8f9fa",
    padding: "20px 0",
    textAlign: "center",
  },
};

export default Home;
