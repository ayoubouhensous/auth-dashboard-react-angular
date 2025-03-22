import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <ul>
        <li>
          <a href="/dashboard">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="/products">
            <i className="fas fa-boxes"></i> Products
          </a>
        </li>
        <li>
          <a href="/upload">
            <i className="fas fa-upload"></i> Upload File
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
