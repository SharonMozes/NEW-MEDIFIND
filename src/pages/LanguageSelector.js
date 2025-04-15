import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import i18n from "i18next"; // i18n instance for translations

const LanguageSelector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#FFDAB9"; // Light peach color for the whole page
    return () => {
      document.body.style.backgroundColor = ""; // Reset when component is unmounted (optional)
    };
  }, []);

  const handleLanguageSelect = (lang) => {
    localStorage.setItem("language", lang); // Save selected language
    i18n.changeLanguage(lang); // Change language for i18n
    navigate("/home"); // Navigate to home
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>{i18n.t("selectLanguage")}</h2>
        <button onClick={() => handleLanguageSelect("en")} style={styles.btn}>
          {i18n.t("english")}
        </button>
        <button onClick={() => handleLanguageSelect("hi")} style={styles.btn}>
          {i18n.t("hindi")}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#FFDAB9", // Light peach background color
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px", // Max width for better mobile responsiveness
  },
  header: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
    fontWeight: "600",
  },
  btn: {
    display: "block",
    width: "100%",
    padding: "15px",
    margin: "10px 0",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#004d00", // Green button color
    border: "none",
    color: "#fff", // White text for contrast
    borderRadius: "8px", // Rounded button edges
    transition: "transform 0.3s ease, background-color 0.3s ease",
    fontWeight: "500",
  },
  btnHover: {
    transform: "scale(1.05)",
    backgroundColor: "#45a049", // Darker green on hover
  },
};

export default LanguageSelector;
