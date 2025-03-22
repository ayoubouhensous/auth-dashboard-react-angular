import React, { useState } from "react"; // Ajout de useState
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="content">
        <Sidebar isCollapsed={isCollapsed} />
        <main className="main-content">
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
