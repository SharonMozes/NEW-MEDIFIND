import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        placeholder="Search medicines..."
        style={styles.searchBar}
      />

      {/* Right Actions: Home, Login, Register */}
      <div style={styles.actions}>
        <button style={styles.btn} onClick={() => navigate("/")}>
          Home
        </button>

        <button style={styles.btn} onClick={() => navigate("/login")}>
          Login
        </button>

        <div
          style={styles.btn}
          onClick={() => setShowRegisterDropdown(!showRegisterDropdown)}
        >
          Register ⬇
          {showRegisterDropdown && (
            <div style={styles.dropdown}>
              <div
                style={styles.dropdownItem}
                onClick={() => navigate("/register/customer")}
              >
                As Customer
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => navigate("/register/delivery")}
              >
                As Delivery Boy
              </div>
              <div
                style={styles.dropdownItem}
                onClick={() => navigate("/register/store")}
              >
                As Medical Store
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
