import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/image/image.webp";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
