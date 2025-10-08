import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaSeedling, FaRegCalendarCheck, FaChartBar } from "react-icons/fa";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidebar-darknav">
      <NavLink to="/" className="side-link"><FaTachometerAlt /> Dashboard</NavLink>
      <NavLink to="/crops" className="side-link"><FaSeedling /> Crops</NavLink>
      <NavLink to="/tasks" className="side-link"><FaRegCalendarCheck /> Tasks</NavLink>
      <NavLink to="/market" className="side-link"><FaChartBar /> Market</NavLink>
      <NavLink to="/login" className="side-link">Login</NavLink>
      <NavLink to="/signup" className="side-link">Signup</NavLink>
    </nav>
  );
}
