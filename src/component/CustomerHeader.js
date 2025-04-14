import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <input type="text" placeholder="Search..." style={styles.searchBar} />
      <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#f1f1f1",
  },
  searchBar: {
    padding: "8px",
    width: "60%",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  logoutBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CustomerHeader;
