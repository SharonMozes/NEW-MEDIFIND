import React from "react";
import { useNavigate } from "react-router-dom";
import i18n from "i18next"; // i18n instance for translations

const LanguageSelector = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    localStorage.setItem("language", lang); // Save selected language
    i18n.changeLanguage(lang); // Change language for i18n
    navigate("/home"); // Navigate to home
  };

  return (
    <div style={styles.container}>
      <h2>{i18n.t("selectLanguage")}</h2>
      <button onClick={() => handleLanguageSelect("en")} style={styles.btn}>
        {i18n.t("english")}
      </button>
      <button onClick={() => handleLanguageSelect("hi")} style={styles.btn}>
        {i18n.t("hindi")}
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
  },
  btn: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default LanguageSelector;
