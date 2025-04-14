import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";  // Import i18n

const Header = () => {
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo} onClick={() => navigate("/")}>
        MediFind
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder={i18n.t("searchPlaceholder")}  // Add placeholder translation
        style={styles.searchBar}
      />

      {/* Right Actions: Home, Login, Register */}
      <div style={styles.actions}>
        <button style={styles.btn} onClick={() => navigate("/")}>
          {i18n.t("home")}  {/* Dynamically use translation */}
        </button>

        <button style={styles.btn} onClick={() => navigate("/login")}>
          {i18n.t("login")}  {/* Dynamically use translation */}
        </button>

        <div
          style={styles.btn}
          onClick={() => setShowRegisterDropdown(!showRegisterDropdown)}
        >
          {i18n.t("register")} ⬇  {/* Dynamically use translation */}
          {showRegisterDropdown && (
            <div style={styles.dropdown}>
              <div
                style={styles.dropdownItem}
                onClick={() => navigate("/register/customer")}
              >
                {i18n.t("registerAsCustomer")}  {/* Add translation for "As Customer" */}
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => navigate("/register/delivery")}
              >
                {i18n.t("registerAsDelivery")}  {/* Add translation for "As Delivery Boy" */}
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => navigate("/register/store")}
              >
                {i18n.t("registerAsStore")}  {/* Add translation for "As Medical Store" */}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
    position: "relative",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  searchBar: {
    padding: "8px",
    width: "40%",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    position: "relative",
  },
  btn: {
    padding: "8px 14px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "40px",
    right: "0",
    color: "black",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    zIndex: 100,
  },
  dropdownItem: {
    padding: "10px 20px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
  },
};

export default Header;
