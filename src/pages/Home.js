import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import i18n from "i18next";
import './Home.css';
import heroImage from './heroImg.png';

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
        <img src={heroImage} alt="hero" style={styles.heroImage} />
      </section>

      {/* Why Choose Us Section */}
      <section style={styles.whyChooseUs}>
        <h2 style={styles.whyChooseUsHeading}>Why Choose Us?</h2>
        <p style={styles.whyChooseUsText}>
          At MediFind, we strive to provide seamless, fast, and reliable medicine delivery services.
          Whether you need essential medications, wellness products, or emergency supplies, we ensure
          that your health is in good hands. Our dedicated team guarantees timely deliveries right to
          your doorstep, making your health journey easier and more efficient.
        </p>
        <div style={styles.buttonContainer}>
          
        </div>
      </section>

      {/* Upload Section */}
      <section style={styles.uploadSection}>
        <h2>{i18n.t("uploadTitle")}</h2>
        <input type="file" style={styles.fileInput} onChange={handleFileChange} />
        <br />
        <button style={styles.uploadBtn} onClick={handleUpload}>{i18n.t("uploadBtn")}</button>
        {message && <p style={{ marginTop: "10px", color: "#333" }}>{message}</p>}
      </section>

      {/* Footer */}
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
    backgroundSize: "500px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "500px",
    width: "600px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    animation: "driveScooter 5s linear infinite",
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
  
  // Why Choose Us Section Styles
  whyChooseUs: {
    textAlign: "center",
    padding: "50px 20px",
    backgroundColor: "#ffffff",
    maxWidth: "800px",
    margin: "0 auto",
  },
  whyChooseUsHeading: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  whyChooseUsText: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  buttonContainer: {
    textAlign: "center",
  },
  knowMoreBtn: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  linkText: {
    textDecoration: "none",
    color: "white",
  },
};

export default Home;
