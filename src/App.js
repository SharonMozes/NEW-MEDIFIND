import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🏠 Pages
import LanguageSelector from "./pages/LanguageSelector";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterCustomer from "./pages/RegisterCustomer";
import RegisterDelivery from "./pages/RegisterDelivery";
import RegisterStore from "./pages/RegisterStore";

// 🧑‍💼 Dashboards
import CustomerDashboard from "./pages/CustomerDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import StoreDashboard from "./pages/StoreDashboard";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 🌐 General Routes */}
        <Route path="/" element={<LanguageSelector />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✍️ Registration */}
        <Route path="/register/customer" element={<RegisterCustomer />} />
        <Route path="/register/delivery" element={<RegisterDelivery />} />
        <Route path="/register/store" element={<RegisterStore />} />

        {/* 🧭 Dashboards */}
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />

        <Route path="/dashboard/delivery" element={<DeliveryDashboard />} />
        <Route path="/dashboard/store" element={<StoreDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
};

export default App;
