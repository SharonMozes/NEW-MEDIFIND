import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [deliveryBoys, setDeliveryBoys] = useState([]);
  const [stores, setStores] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [custRes, delRes, storeRes] = await Promise.all([
        axios.get("http://localhost:5000/api/users/all/customers"),
        axios.get("http://localhost:5000/api/users/all/delivery"),
        axios.get("http://localhost:5000/api/users/all/stores"),
      ]);
      setCustomers(custRes.data);
      setDeliveryBoys(delRes.data);
      setStores(storeRes.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleDelete = async (type, id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/users/delete/${type}/${id}`);
      alert("✅ User deleted");
      fetchAllData(); // refresh list
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("❌ Failed to delete user");
    }
  };

  const filterData = (data, keys) => {
    return data.filter((item) =>
      keys.some((key) => item[key]?.toLowerCase().includes(search.toLowerCase()))
    );
  };

  return (
    <div style={styles.container}>
      <h1>📊 Admin Dashboard</h1>

      <input
        type="text"
        placeholder="Search by name, email, store..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      <h2>👨‍👩‍👧‍👦 Customers</h2>
      <Table
        data={filterData(customers, ["name", "email"])}
        columns={["name", "email", "phone", "address"]}
        onDelete={(id) => handleDelete("customer", id)}
      />

      <h2>🚴‍♂️ Delivery Boys</h2>
      <Table
        data={filterData(deliveryBoys, ["name", "email"])}
        columns={["name", "email", "phone", "vehicleNumber"]}
        onDelete={(id) => handleDelete("delivery", id)}
      />

      <h2>🏥 Medical Stores</h2>
      <Table
        data={filterData(stores, ["storeName", "email"])}
        columns={["storeName", "email", "phone", "address", "licenseNumber"]}
        onDelete={(id) => handleDelete("store", id)}
      />
    </div>
  );
};

const Table = ({ data, columns, onDelete }) => (
  <table style={styles.table}>
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col} style={styles.th}>{col.toUpperCase()}</th>
        ))}
        <th style={styles.th}>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((col) => (
            <td key={col} style={styles.td}>{item[col]}</td>
          ))}
          <td style={styles.td}>
            <button onClick={() => onDelete(item._id)} style={styles.deleteBtn}>
              ❌ Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const styles = {
  container: {
    maxWidth: "95%",
    margin: "30px auto",
    fontFamily: "Arial, sans-serif",
  },
  search: {
    padding: "10px",
    width: "100%",
    marginBottom: "20px",
    fontSize: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "40px",
  },
  th: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "1px solid #ccc",
  },
  td: {
    padding: "10px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
  deleteBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default AdminDashboard;
