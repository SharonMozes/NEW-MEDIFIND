import React from "react";
import { useNavigate } from "react-router-dom";

const LanguageSelector = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    localStorage.setItem("language", lang); // Save selected language
    navigate("/home"); // Go to Home page
  };

  return (
    <div className="container">
      <h2>Select Your Language</h2>
      <button onClick={() => handleLanguageSelect("en")}>English</button>
      <button onClick={() => handleLanguageSelect("hi")}>हिन्दी</button>
    </div>
  );
};

export default LanguageSelector;
